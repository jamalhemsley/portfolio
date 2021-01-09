const animations = {
  Card: {
    initial: {
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 70,
      },
    },
    hover: {
      y: -8,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 80,
      },
    },
  },
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
