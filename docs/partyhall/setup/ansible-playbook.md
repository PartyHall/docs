---
sidebar_position: 3
---

# Ansible playbook

We are using ansible to set everything up. If you don't know about it, here's Wikipedia description:

> Ansible is a suite of software tools that enables infrastructure as code. It is open-source and the suite includes software provisioning, configuration management, and application deployment functionality.

Think of it as if it's bash script on stereoids that sets everything up, and you can run multiple time without having to be careful about what's already done.

This has several advantages:
- We don't have to build a complete image and keep it up to date.
- We have a clear script that can be easily reviewed and updated.
- All your config are stored in a simple yaml file that you can backup for later deployments.

## Preparing the terrain

First, you should install Ansible, you can check how on [their docs](https://docs.ansible.com/ansible/latest/installation_guide/installation_distros.html).

Then, clone the [PartyHall](https://github.com/PartyHall/partyhall) repository wherever you want and in the terminal, go in the ansible folder.

Let's ensure we are on the latest released tag so that the setup is doing what it is supposed to do:
```
$ git checkout vX
```

Where X is the latest version that you see in the release tab on Github. As of the time of writing this guide, it's `v0.8-beta15`.


Finally, let's install / update the dependencies so that you have everything you need to run the playbooks:
```sh
$ cd ansible
$ ansible-galaxy install -r requirements.yaml --force
$ ansible-galaxy collection install -r requirements.yaml --force
```

Please ensure you do this every time you update an appliance (or install a new one at a later date).

## Configuring your appliance

Before running ansible, we need to configure the appliance properly.

In the folder you're currently in, there is a `inventory.yaml.dist` file. Copy it to `inventory.yaml` and open it in a text editor such as Visual Studio Code.

```yaml
all:
  hosts:
    appliance:
      ansible_host: 192.168.14.85 # This should be replaced with your appliance's IP
      ansible_user: 'partyhall'

      grub_resolution: '1280x720' # You should probably keep this the same

      ## TEMP SETTINGS (Until onboarding is ready)

      # PartyHall config
      # Here you can set the account details for the main administrator account
      # of the appliance
      partyhall_admin_username: 'admin'
      partyhall_admin_password: 'admin_password'
      partyhall_admin_fullname: 'Administrator' # The named displayed for singer (karaoke) or participant (quiz)

      # Hostapd settings
      hostapd_iface: 'wlp5s0'
      hostapd_ssid: 'PartyHall'
      hostapd_pwd: 'YourPassword'

      ## PartyNexus config
      # The URL should NOT contain the trailing slash
      # The Hardware ID and the API Key are the ones you generated on PartyNexus
      nexus_url: ''
      nexus_ignore_ssl: false
      nexus_apikey: ''
```

## Deploying

Finally, you can run the playbooks to deploy everything !

```sh
$ ansible-playbook -i inventory.yaml setup.yaml
```

When the script is over, the appliance will reboot. Please be sure that you have both the webcam and the ESP32 plugged in before running the script.

## First run

As we are getting progressively ready to have an onboarding process, most of the settings are now configurable directly from the web app instead of the yaml file of the ansible.

Go to the IP of the appliance and log in with your administrator account.

Then go to the settings to complete the initial steps (You can find more details in the settings section of this documentation. Go back to the "Usage" section afterward).