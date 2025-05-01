---
sidebar_position: 2
---

# Documentation versionning

I am not planning on having a version selector for the documentation, though I know this is really useful.

The compromise I agreed to make is to release each new documentation revision as a separate tag on Github.

This mean that if you are on an older PartyHall or PartyNexus version you can simply go to the [built documentation repository](https://github.com/PartyHall/partyhall.github.io) or [documentation repository](https://github.com/PartyHall/docs) and check out the version of the doc you want.

If I follow the guidelines that I fixed for myself, the tags should follow this format:

```
Pn0.0.0-Ph0.0.0-[BUILD_ID]
```

With the first version number being the current PartyNexus version, the second the PartyHall version number and the build id an incremental value for each documentation update.

## Release checklist

That section is a memo for myself, you probably have no use for it.

When any release of either PartyHall or PartyNexus is made, the following stuff needs to be done:

- Updating the Makefile to change the version number
- Update the `contrib` folders with new `compose.yaml` and `.env` (PartyNexus only)
- Ensure linting & tests are passing (make tests & make lint)
- Make the final commit for the release
- `git tag -a "v"0.1.9"" -m ""0.1.9""`
- `git push --follow-tags`
- **Wait for the GHA to build the image**
- Edit the release on Github to add the changelog
- Update the docs to match the new feature
- Update the docs' `docs/partynexus/getting-started.md` to match the correct link for the `contrib` folder
- Update the docs' `docs/partyhall/setup/esp32.md` to match the correct link for the `hardware_handler.ino` file (PartyHall only)
- Update the docs' `docs/partyhall/setup/ansible-playbook.md` to match the latest available version and the inventory.yaml explanation if it changed (PartyHall only)
- Build+release on the Github pages repository

The tags for the docs should be in the format: `Pn0.0.0-Ph0.0.0-[BUILD_ID]`.

With the first version number being the current PartyNexus version, the second the PartyHall version number and the build id an incremental value for each documentation update.

@TODO: Maybe there is a way to automate this (?)