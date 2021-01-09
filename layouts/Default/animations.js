const animations = {
  DefaultLayout: {
    enter: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.4,
        ease: [0.39, 0.575, 0.565, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.39, 0.575, 0.565, 1],
      },
    },
  },
};

export default animations;
