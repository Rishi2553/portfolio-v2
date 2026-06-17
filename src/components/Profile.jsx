import ProfilePicture from "../assets/profile.jpg";
import SocialLinks from "./SocialLinks";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-section">

      <div className="profile-image-container">
        <img
          src={ProfilePicture}
          alt="Rishi Panneerselvam"
          className="profile-image"
        />
      </div>

      <h3 className="profile-name">
        Rishi Panneerselvam
      </h3>

      <p className="profile-role">
        Full Stack Developer
      </p>

      <SocialLinks />

    </div>
  );
}

export default Profile;