import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import gallery_images from "../../utils/header";
import "../../css/Header.css";



export default function Header() {
  return (
    <div>
      <ImageGallery
        autoPlay={true}
        showPlayButton={false}
        showNav={false}
        showThumbnails={false}
        slideInterval={6000}
        slideDuration={1000}
        thumbnailPosition={"bottom"}
        slideOnThumbnailOver={true}
        showFullscreenButton={false}
        items={gallery_images}
      />

      <div className="title-text">
        <h1>
          Welcome to <br></br> Coders SB!
        </h1>
        <hr />
        <p>A student org at UCSB that strives to help <br></br>students develop the skills to build real-world,<br></br>impactful software applications.</p>
      </div>
    </div>
  );
}
