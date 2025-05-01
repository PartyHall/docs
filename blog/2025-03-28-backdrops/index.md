---
slug: introducing-onboarding-backdrops
title: Onboarding & Backdrops
authors: [oxodao]
tags: [project, feature]
---

A few neat new features: Onboarding, Backdrops

<!-- truncate -->

Long time without any updates, this project is still going on!

I spiraled down the TTRPG rabbit hole since I started mastering Cyberpunk RED and watching a lot of [La bonne auberge](https://www.twitch.tv/labonneaubergejdr) lately.

## General project updates

The rewrite is still going on. The current state seems to be "stable enough" for now, as we used it successfully for the new year's party.

I still have issues with PulseAudio and the karaoke stuff though, as when you scream a bit too much in the microphones, the song audio cuts off (not the mics for some reason). I did not find the source of the issue yet.

I'm growing increasingly fed up of ant-design, so we might see at some point a change for Material UI as I'm quite a bit more familiar with this component kit. Not sure yet.

## Onboarding

This is a big one. It only changes the appliance software.

It took the major part of my week-end but the API is cleaned up. This was mandatory to be able to create a nice onboarding process.

Now when you first install the appliance software, instead of having anything to configure in ansible depending on your machine, you will now be prompted on the first run to do the following in a clean onboarding process:
- [Skippable] Setup the access point
- Setup the webcam (Resolution)
- Setup the photobooth stuff (Enable unattended pictures, the interval, the flash brightness)
- [Skippable] Setup the karaoke stuff (Select the input/output devices, choose the volume)
- [Skippable] Setup the Spotify stuff (the device name in Spotify Connect)
- [Skippable] Setup PartyNexus (Host + username + password)
- [Skippable] Setup physical buttons mappings
- Create an admin account

Note that everything that is not mandatory is skippable.

Adding the onboarding process also let us have nice explanation of everything without having to refer to the wiki.

## Backdrops

With the upcoming suprise birthday for a friend's girlfriend (seems to be a pattern by now), he asked for a simple feature that fits perfectly the theme of this project.

She's a fan of Tim Burton movies so he wanted to add "Passe-têtes" (I have no clue what's it called in english and I can't find the translation for some reason so I called it "backdrops"). That's the thing where you have a cardboard scene with the head of the characters cut out so that you can put your own.

The next release add just that!

From PartyNexus you can now create backdrop albums that contains multiple backdrops. Those will be synchronized to the appliance.

On the appliance, simply select the album from the admin page and you're good to go !

As usual, everything is usable in anonymous mode on the backend but physical buttons can be used too.

The backdrop stays on for a minute then disappear (so that people do not forget to reset it after taking a picture).

Note that the software saves both the normal picture (with the backdrop fused on) and an "alternate" version that is the picture without the backdrop.

A side effect of this, which was an after-thought, is that you can use this feature as overlay (Kinda like Snapchat filters).

<figure>
![Example filter](pictures/banner.png)
<figcaption>Example filter made by my friend [nullgemm](https://nicolussi.fr/en/)</figcaption>
</figure>