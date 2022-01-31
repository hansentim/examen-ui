export const heartAnimation = {
  show: {
    scale: [1, 2, 2, 1, 1],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

export const fadeSlow = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: 'easeIn', duration: 2 },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: 'easeIn', duration: 1.5 },
  },
};

export const fadeFaster = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: 'easeIn', duration: 0.75 },
  },
};
export const fadeSuperFast = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: 'easeIn', duration: 0.2 },
  },
};

export const scrollReveal = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
