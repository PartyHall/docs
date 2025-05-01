---
sidebar_position: 1
---

# Getting started

PartyNexus can be easily deployed using Docker and Docker Compose. It follow the same principle as Immich where on each release you grab the new `compose.yaml` and `.env` file and you `docker compose down && docker compose up -d` unless something is specified in the changelog.

## Setting up

PartyNexus relies on three containers:
- `postgres`: The database used to store everything
- `redis`: The key-val server
- `partynexus`: The main server that contains:
  - `caddy+mercure+frankenphp`: The webserver that serves the app
  - `worker_emails`: A worker that handle email sending
  - `worker_export`: A worker that generate the zip file once the event is over.

NOTE: @TODO Resplitter le container "partynexus" en container à part, ce qui permettra avec des healthchecks d'être tranquille et pas qu'il se passe des migrations foireuses

Note that docker emphasises on having ONE container per task, this is not the case here to simplify deployment. If you really want to, you can make your own to split the partynexus one properly but this is not a supported use-case.

## Creating the compose.yaml

You can find the latest `compose.yaml` and `.env` file [here](https://github.com/PartyHall/partynexus/tree/v0.1.15/contrib). This link will be updated on each release of PartyNexus, remember to get those file again every time you want to update.

In the `compose.yaml` file you only need to update the port to a one that is free on your server:
```
[...]
  ports:
    '127.0.0.1:[YOUR_PORT]:80'
```

:::warning
Please keep the binding to localhost (`127.0.0.1:[YOUR_PORT]:80`)
because docker bypasses iptables.

You don't want your PartyNexus instance be available directly !
:::

Let's now fill the `.env` file:
```
[...]
APP_SECRET="" # Generate it with `openssl rand -base64 32`
PUBLIC_URL=https://partyhall.example.com # WITHOUT THE TRAILING SLASH
[...]
MAILER_DSN=smtp://mailer:1025
MAILER_FROM=no-reply@example.com
[...]
MERCURE_PUBLISHER_JWT_KEY="" # Generate it with `openssl rand -base64 32`
SPOTIFY_CLIENT_ID=""
SPOTIFY_CLIENT_SECRET=""
```

The `SPOTIFY_CLIENT_ID` and `SPOTIY_CLIENT_SECRET` variables are obtained by creating an app on the [Spotify dev portal](https://developer.spotify.com/). Those are used to search the songs on Spotify and get their metadata/cover.

The `MAILER_DSN` and `MAILER_FROM` are used to send emails. For this you need a SMTP provider like [Mailgun](https://www.mailgun.com/). You can then fill this variable with `smtp://[ENCODED_EMAIL]:[TOKEN]@smtp.mailgun.org:587`. To encode the email you can use a website like [UrlEncoder](https://www.urlencoder.org/).

## Starting the containers

Due to a known bug in the supervisor config, you need to start manually the containers so that it doesn't break the whole database. This will be fixed later.

```
$ docker compose up -d redis database # Starting the database
$ docker compose run app bin/console cache:clear -v --env=prod
$ docker compose run app bin/console doctrine:migrations:migrate # Update the database structure
$ docker compose up -d # Start the whole thing
```

The containers are now running.

## Setup an admin account

This is only useful the first time you spin up your instance.

```
$ docker compose exec app bin/console users:create:admin [USERNAME] [EMAIL] [LANGUAGE]
```

The language can be either `en_US` or `fr_FR`.

You will receive a mail saying that your account has been created.

## Reverse proxy

You need to setup a reverse proxy in front of PartyNexus.

The following example configuration is ready for nginx but you'll need to adapt it to your needs. I'm not used to other reverse proxies so no help will be given for anything but nginx.

```
server {
        listen      80;
        server_name partyhall.example.com;

        return 308 https://$server_name$request_uri;
}

server {
        listen 443 ssl http2;
        server_name partyhall.example.com;

        include snippets/ssl.conf;

        client_max_body_size 250M;

        location / {
                proxy_pass http://localhost:[YOUR_PORT];

                proxy_set_header Host $host;
                proxy_set_header X-Forwarded-Proto $scheme;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $remote_addr;

                proxy_set_header X-HARDWARE-ID $http_x_hardware_id;
                proxy_set_header X-API-TOKEN $http_x_api_token;
        }
}
```

:::note
This uses a snippet called `ssl.conf` which you can generate
at [Mozilla's SSL config generator](https://ssl-config.mozilla.org)

This implies that you have HTTPS enabled through Let's Encrypt or 
something similar.

It also contains the following line to set up HSTS:

add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
:::


## Conclusion

If you've done everything correctly, you can now login at `https://partyhall.example.com` with the account you set up earlier.

This will send you an email that lets you login. You can set a password using the `bin/console users:set-password` command if you want.

You can now setup your appliance and come back to this part of the documentation when told to.