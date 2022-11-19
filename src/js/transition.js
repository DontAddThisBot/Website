export function transition(isNegative, ...streamerInfo) {
  for (const classes of [...streamerInfo]) {
    classes[0].style.transform = `translate3d(${
      isNegative ? "-" : ""
    }25%, 0, 0)`;
    classes[0].style.transition = "transform 0.5s ease-in-out";

    setTimeout(() => {
      classes[0].style.transform = "translate3d(0, 0, 0)";
    }, 500);

    setTimeout(() => {
      classes[0].style.transition = "none";
    }, 1000);

    setTimeout(() => {
      classes[0].style.transition = "transform 0.5s ease-in-out";
    }, 1001);
  }
}
