import ImageGallery from "react-image-gallery";
import { ProductStore } from "../../Store/ProductStore";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductImages = () => {
  const { DetailsList } = ProductStore();
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <>
      <ImageGallery autoPlay={true} items={images} />
    </>
  );
};

export default ProductImages;
