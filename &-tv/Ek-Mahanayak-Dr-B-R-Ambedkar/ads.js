(function () {
    var video = document.querySelector('#player');

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource('https://feisty.tvlogy.to/j-uoFGgBOoGjswhFt1H32MdUb4lv7pGCWONVHHT_-RnolUb9r8lyLMb0jv5JzAlPf6Cc7JXrIomuKVjjxwyOLQ/MEK4Ty0rT5wIr_2c-YytqkMaQ-x2EZTJhyoA2dItC7o/video.m3u8');
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED,function() {
                video.play();
           });
        }
      plyr.setup(video);
  })();
