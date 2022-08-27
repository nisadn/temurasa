import React, { useState, useCallback, useEffect } from "react";
React.useLayoutEffect = React.useEffect;
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
// import { photos } from "./Photos";

// https://codepen.io/neptunian/pen/Oxraod

export default function GallerySet({data}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const [photos, setPhotos] = useState();

  useEffect(() => {
    const temp = [];
    const w = data.length > 1 ? 4 : 0;
    const h = data.length > 1 ? 3 : 0;
    data.map((val) => temp.push({
      src: val.image ? val.image : val,
      width: w,
      height: h,
    }));
    setPhotos(temp);
    console.log(photos);
  }, []);

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              // className="place-content-center bg-blue-200"
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
