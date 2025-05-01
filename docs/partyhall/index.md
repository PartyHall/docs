---
sidebar_position: 1
---

# PartyHall

PartyHall is the brain of the project.

It is the main appliance software that does all the work.

It's comprised of multiple things:
- A carefully setup Debian distribution through Ansible
- A set of scripts
- An mqtt server that let all components speak to each others
- A golang app that handles the bulk of the work
- A golang app that handles the communication with the hardware
- A React JS app

It should be installed on an appliance that you can build with the help of the `Hardware` section of the documentation.