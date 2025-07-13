// components/LiveStream.js
import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const LiveStream = () => {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
hls.loadSource("http://memo-regarded-shaft-indoor.trycloudflare.com/stream.m3u8");
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = 'http://memo-regarded-shaft-indoor.trycloudflare.com/stream.m3u8';
    }
  }, []);

  return (
    <div>
      <h2>Live Stream</h2>
      <video ref={videoRef} controls autoPlay width="100%" />
    </div>
  );
};

export default LiveStream;
