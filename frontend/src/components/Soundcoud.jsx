import React from "react";

function Soundcloud({ artistId }) {
  const widgetUrl = {
    1: 1005447433,
    2: 1362970390,
    3: 1403382670,
    4: 1347344791,
    5: 1390403389,
    6: 1466012584,
    7: 1401170020,
  };

  const trackTitle = `Soundcloud Widget for Artist ${artistId}`;

  return (
    <div>
      <iframe
        title={trackTitle}
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="no"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${widgetUrl[artistId]}&color=%23f7f5ed&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`}
      />
    </div>
  );
}

export default Soundcloud;
