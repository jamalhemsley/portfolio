const animations = {
  CardImage: {
    initial: {
      scale: 1,
      transition: {
        type: 'tween',
        duration: 0.1,
      },
    },
    hover: {
      scale: 3,
      transition: {
        duration: 90,
        ease: 'linear',
      },
    },
  },
};

export default animations;
