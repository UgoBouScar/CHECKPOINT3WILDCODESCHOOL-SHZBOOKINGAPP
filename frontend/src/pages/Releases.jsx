import React from "react";
import Navbar from "../components/Navbar";

function Releases() {
  return (
    <div>
      <Navbar />
      <div className="pt-60">
        Releases
        <iframe
          title="Played Music"
          width="100%"
          height="300"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1534120858&color=%23363436&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
        />
      </div>
      <div>
        <iframe
          title="Played Music"
          width="100%"
          height="300"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1257026896&color=%23363436&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
        />
      </div>
      <div>
        <iframe
          title="Played Music"
          width="100%"
          height="300"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1146729064&color=%23363436&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
        />
      </div>
    </div>
  );
}

export default Releases;
