import BackgroundSlider from "@/components/homepage(assets)/background/BackgroundSlider";

const LandingPage = () => {
  const slides = [
    "https://gamevault-assets.vercel.app/backgrounds/landing-page/video/wall.mp4",
    "https://static.vecteezy.com/system/resources/previews/049/855/259/non_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg",
    "https://t3.ftcdn.net/jpg/08/06/10/36/360_F_806103697_E9Y1vKhtQimCEIiA75QWEn4NdZe7lQXj.jpg",
  ];
  return (
    <div>
      {/* <BackgroundSlider slides={slides} interval={9000} /> */}
      <BackgroundSlider slides={slides} interval={7000} duration={1.5} />
      <div className="">
        <h1>content here</h1>
      </div>
    </div>
  )
}

export default LandingPage
