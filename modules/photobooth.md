# Photobooth module

This module lets your PartyHall booth act as a photobooth.

It also features an `unattended` mode that takes pictures every X minutes and create a small video when exported. To have the best effect it's advised to let it take pictures every 3 minutes (This makes a ~30 second video for a 10 hour long event)

The module name is `photobooth`

## Config

```yaml
# Whether you have an hardware flash (Relay on the Arduino that triggers a ledstrip / other kind of flash)
hardware_flash: false

# The countdown from when you press the button until the picture is taken
default_timer: 3

# The amount of minutes between when the booth takes a picture (To build the recap video)
# Set to 0 to disable it
unattended_interval: 3

# The webcam resolution
webcam_resolution:
  width: 1280
  height: 720
```
