---
sidebar_position: 1
---

# ESP32

Before setting up the appliance software, we'll need to prepare the ESP32 board to have the correct firmware.

## Arduino IDE

You will need to have the Arduino IDE installed with the ESP32 board.

Let's [download](https://www.arduino.cc/en/software), install it, and start it.

We then need to add the board: Go to `File` > `Preferences` and in `Additional board manager URLs set the following one:
```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

Now on the left, in the `Board Manager` tab, you should be able to search for `ESP32` by `Espressif Systems` (NOT `Arduino ESP32 Boards` !) and install it.

Your Arduino IDE is now ready to flash the board.

## Flashing the board

Once your IDE is ready, you can then load the firmware file that can be found in the [PartyHall repository](https://github.com/PartyHall/partyhall/blob/36bf476452c283cbadbb99642f31c99cb13efc15/backend/hwhandler/hwhandler.ino).

You can adjust the pins used for the different actions, depending on your board type and how you wired them.

Once you are ready, plug the ESP32, go into `Tools` > `Port` and select the port corresponding to your ESP32.

Finally, you should see three round button under the top toolbar, a checkmark, a right arrow and a play button with a bug in it. Press the second one (right arrow) to upload the script to the board.

Wait for the board to compile and upload the script, then you'll be ready !

If you want to try out that it worked properly, go in `Tools` > `Serial Monitor`. On the right-hand side of the section that just opened, change the baudrate to `115200` and press the reset button on the ESP32.

If every thing worked properly, you should be able to see text in the console for each button press in the form of `BTN_X` where `X` is the number of the button pressed.

Note that you might need to modify the code depending on how you wire your ESP32. In my setup, the pins 0 to 13 are button inputs, and the pin 15 is the flash trigger pin.