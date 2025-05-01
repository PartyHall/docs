---
sidebar_position: 2
---

# Making a karaoke video

What happens when the song you want is not available to purchase as a `cdg` file ? You need to make it yourself.

This guide will **not** be exhaustive as its a complete separate topic, you should probably get in touch with the karaoke maker community.

## Finding the song

You need to purchase the original song as an `mp3` file, be careful to buy only from store that are **DRM-FREE**. If you have a physical release of the song you'd like you can rip the CD.

Stores that are known to sell DRM-FREE songs:

- [Quobuz Store](https://www.qobuz.com/) (The store, NOT THE STREAMING SERVICE !)
- [ProStudioMasters](https://www.prostudiomasters.com)
- [HDTracks](https://www.hdtracks.com/)
- [7digital](https://7digital.com/)

## Creating the kbp file

First you'll need [Karaoke Builder Studio](https://www.karaokebuilder.com/kbstudio.php) to make your lyrics. The trial version is enough if you want to make transparent videos (the recomended format), but the full version is required if you want to compile them to `cdg` files.

I'm not going into details about this software, you should check out tutorials on how to use it.

## Getting the instrumental and vocals separated

Now that you have your lyrics synchronised, you need to get both `instrumental.mp3` and `vocals.mp3`.

To do so, you can use the [Ultimate Vocals Remover](https://github.com/Anjok07/ultimatevocalremovergui) software that works pretty well.

Having the vocals is optional but that will let you have a guide when singing, since you will be able to set the vocals track's volume separately from the instrumental.

## Converting the kbp to ass

The `.ass` files are pretty advanced subtitles. That's the trick we're going to use to generate our video.

For this, we will use [kbp2ass](https://github.com/Aeden-B/kbp2ass).

```sh
$ kbp2ass -f project.kbp > lyrics.ass
```

## Creating the video

Now that we have everything we need, we can use `ffmpeg` to create the final video.

```sh
$ ffmpeg -f lavfi -i "color=c=000000@0:r=60:s=1920x1080,format=rgba" -i instrumental.mp3 -c:v libvpx-vp9 -vf ass=lyrics.ass:alpha=1 -shortest instrumental.webm
```

Explanation:
- `-f lavfi`: Use custom filters.
- `-i "color=c=000000@0:r=60:s=1920x1080,format=rgba"`: Add as an input a video that is 1080p with transparent background.
- `-i instrumental.mp3`: Add the instrumental audio for the song.
- `-c:v libvpx-vp9`: Encode the output as a VP9 video.
- `-vf ass=project.ass:alpha=1`: Add the subtitle file **while retaining the alpha properly**.
- `-shortest`: Makes the background to be the same duration as the mp3.
- `instrumental.webm`: The output file.

## Conclusion

Now you have your video file and your vocals file, you can add the song in PartyNexus as usual.