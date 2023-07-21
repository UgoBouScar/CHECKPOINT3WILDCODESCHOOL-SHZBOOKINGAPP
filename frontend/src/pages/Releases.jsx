import React from "react";
import Navbar from "../components/Navbar";
import absbg from "../assets/absbg.jpg";

function Releases() {
  const bgStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent), url(${absbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };
  return (
    <div style={bgStyle} className="bg-cover">
      <Navbar />
      <div className="pt-60 text-white text-center">
        Releases
        <div className="pt-10">
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
    </div>
  );
}

export default Releases;
