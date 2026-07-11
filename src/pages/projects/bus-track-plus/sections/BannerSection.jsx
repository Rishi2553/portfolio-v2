// import React from "react";

import adminImg from "../../../../assets/projects/bus-track-plus/bustrackplus.png";

function BannerSection() {
  return (
    <section className="banner-section">

      <div className="banner-card">

        <img
          src={adminImg}
          alt="BusTrackPlus Dashboard"
          className="banner-image"
        />

      </div>

    </section>
  );
}

export default BannerSection;