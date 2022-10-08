(function () {
    var video = document.querySelector('#player');

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource('');
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED,function() {
                video.play();
           });
        }
      plyr.setup(video);
  })();
