export const handleScroll = () => {
  const topWrapper = document.getElementById("top-wrapper");
  const bottomWrapper = document.getElementById("bottom-wrapper");
  for (const wrappers of [topWrapper, bottomWrapper]) {
    if (window.scrollY > 200) {
      window.removeEventListener("scroll", handleScroll);
      topWrapper.style.transform = `translateX(-20%)`;
      bottomWrapper.style.transform = `translateX(20%)`;
      wrappers.style.transition = "transform 0.8s ease-in-out";

      setTimeout(() => {
        wrappers.style.transform = "translate3d(0, 0, 0)";
        wrappers.style.opacity = "0.2";
      }, 800);

      setTimeout(() => {
        wrappers.style.opacity = "0.4";
      }, 850);

      setTimeout(() => {
        wrappers.style.opacity = "0.6";
      }, 900);

      setTimeout(() => {
        wrappers.style.opacity = "0.8";
      }, 950);

      setTimeout(() => {
        wrappers.style.opacity = "1";
      }, 1000);
    }
  }
};
