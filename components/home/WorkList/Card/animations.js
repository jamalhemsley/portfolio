export const animations = {
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
      y: -5,
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
  CardMain: {
    initial: {
      y: 0,
    },
    hover: {
      y: '-.5rem',
    },
  },
  CardBody: {
    initial: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.39, 0.575, 0.565, 1],
      },
    },
    hover: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.39, 0.575, 0.565, 1],
      },
    },
  },
};

export default animations;
