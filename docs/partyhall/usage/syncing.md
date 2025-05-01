---
sidebar_position: 3
---

# Synchronizing with PartyNexus

One of the main part of PartyHall is the ability to automatically sync everything with PartyNexus.

As long as your appliance has the PartyEvent ID set properly, it will automatically synchronise the following to the server's event:
- Hand-taken pictures
- Unattended pictures
- Sing sessions

On the other hand, the appliance will fetch multiple things from the nexus automatically:
- Karaoke songs
- Backdrops

## How to sync

By default, the appliance will automatically send pictures when they're taken, and sing sessions when they are over.

On first startup and every five minutes afterward, it will also download in the background everything listed above from the Nexus.

If for some reason you want to sync manually, you can do so by going in the UI and click the `Force sync` button.

This can be useful for example when your appliance do not have internet during the event, you can force-sync it right before bringing it to the location to ensure everything is up-to-date, then force-sync it right when you get back so that the Nexus store everything.