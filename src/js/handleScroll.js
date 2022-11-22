export const handleScroll = () => {
  const topWrapper = document.getElementById("top-wrapper");
  const bottomWrapper = document.getElementById("bottom-wrapper");
  for (const wrappers of [topWrapper, bottomWrapper]) {
    if (window.scrollY) {
      window.removeEventListener("scroll", handleScroll);
      topWrapper.style.transform = `translateX(-2%)`;
      bottomWrapper.style.transform = `translateX(2%)`;
      wrappers.style.transition = "transform 0.2s ease-in-out";

      setTimeout(() => {
        wrappers.style.transform = "translate3d(0, 0, 0)";
        wrappers.style.opacity = "0.2";
      }, 200);

      setTimeout(() => {
        wrappers.style.opacity = "0.4";
      }, 250);

      setTimeout(() => {
        wrappers.style.opacity = "0.6";
      }, 260);

      setTimeout(() => {
        wrappers.style.opacity = "0.8";
      }, 270);

      setTimeout(() => {
        wrappers.style.opacity = "1";
      }, 280);
    }
  }
};
