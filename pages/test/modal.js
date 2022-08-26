import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import { Button, layoutPropNames } from "@chakra-ui/react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

// https://www.cluemediator.com/how-to-set-a-modal-popup-with-an-image-in-react
// gatau kenapa tapi kok di load pas pertama lama , tapi abis di next bisa2 aja
export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const images = [
    {
      title: "Kitten 1",
      caption: "Caption 1",
      url: "https://placekitten.com/1500/500",
    },
    {
      title: "Kitten 2",
      caption: "Caption 2",
      url: "//placekitten.com/4000/3000",
    },
    {
      title: "Kitten 3",
      caption: "Caption 3",
      url: "//placekitten.com/800/1200",
    },
    {
      title: "Kitten 4",
      caption: "Caption 4",
      url: "//placekitten.com/1500/1500",
    },
  ];

  return (
    <Layout>
      <div>
        <Button onClick={() => setIsOpen(true)}>Preview Images</Button>
        {isOpen && (
          <Lightbox
            imageTitle={images[imgIndex].title}
            imageCaption={images[imgIndex].caption}
            mainSrc={images[imgIndex].url}
            nextSrc={images[(imgIndex + 1) % images.length].url}
            prevSrc={images[(imgIndex + images.length - 1) % images.length].url}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setImgIndex((imgIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setImgIndex((imgIndex + 1) % images.length)
            }
          />
        )}
      </div>
    </Layout>
  );
}
