const smoothScroll = () => {
    console.log("RUNNING")
  const elem = document.getElementById("offers");
  // Calculate how far and how fast to scroll
  const startLocation = window.pageYOffset;
  const endLocation = elem.offsetTop;
  const distance = endLocation - startLocation;
  const increments = distance / (500 / 16);
  let stopAnimation;
  const animateScroll = () => {
    window.scrollBy(0, increments);
    stopAnimation();
  };
  const travelled = window.pageYOffset;
 // Loop the animation function
  let runAnimation = setInterval(animateScroll, 16);
  if (increments >= 0) {
    // If scrolling down
    // Stop animation when you reach the anchor OR the bottom of the page
    stopAnimation = () => {
      if (
        travelled >= endLocation - increments ||
        window.innerHeight + travelled >= document.body.offsetHeight
      ) {
          console.warn("STOPPED")
        clearInterval(runAnimation);
      }
    };
  } else {
    // If scrolling up
    // Stop animation when you reach the anchor OR the top of the page
    stopAnimation = () => {
      if (travelled <= (endLocation || 0)) {
        console.warn("STOPPED")
        clearInterval(runAnimation);
      }
    };
  }
/*   if (elem) {
    // Scroll to the anchor
    smoothScroll(elem);
  } */
};

export default smoothScroll;
