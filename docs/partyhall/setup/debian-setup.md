---
sidebar_position: 2
---

# Debian setup

On the computer that will be used as the appliance, setup a clean Debian 12 install.

Use the following settings:
- Setup your language
- Hostname: partyhall
- Domain name: partyhall.local
- Root password: set a password
- Username for the account: partyhall (Set a password of your choice)
- Partitions: Use entire disk / All files in one partition
- Software to install: Only enable "SSH server" and "Usual system tools"

Once the setup is over, reboot and login to the partyhall account, and check out the IP address:

```sh
$ ip -br -c a
```

Then from your main computer, add your ssh key:
```sh
$ ssh-copy-id partyhall@[APPLIANCE IP]
```

Connect to the appliance:
```sh
$ ssh partyhall@[APPLIANCE IP]
```

Then you'll need to grant sudo rights for the user:

```sh
$ su
# apt update && apt install sudo vim
# EDITOR=vim /usr/sbin/visudo
```

Go to the line that starts with `%sudo` and update it accordingly:
```
%sudo  ALL=(ALL) NOPASSWD: ALL
```

And now add the user to the group:
```sh
# /usr/sbin/usermod -aG sudo partyhall
```

The initial setup is ready. Let's now take a look at the Ansible playbook to setup the software.