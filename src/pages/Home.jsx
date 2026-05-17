import Hero          from "../sections/Hero";
import InfoBar       from "../sections/InfoBar";
import About         from "../sections/About";
import GalleryScroll from "../sections/GalleryScroll";
import MenuPreview   from "../sections/MenuPreview";
import Reservation   from "../sections/Reservation";
import Happenings    from "../sections/Happenings";
import Newsletter    from "../sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <InfoBar />
      <About />
      <GalleryScroll />
      <MenuPreview />
      <Reservation />
      <Happenings />
      <Newsletter />
    </>
  );
}
