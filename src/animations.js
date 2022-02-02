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

export const pageAnimation = {
  hidden: { x: -1200, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',

      staggerChildren: 0.25,
    },
  },
};

export const titleAnim = {
  hidden: { x: -1200 },
  show: {
    x: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
      /* staggerChildren: 0.5, */
    },
  },
};
export const pageAnimationB = {
  hidden: { x: 1200, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.5 },
  },
};

export const titleAnimB = {
  hidden: { x: 1200 },
  show: {
    x: 0,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
      /* staggerChildren: 0.5, */
    },
  },
};
export const titleAnimC = {
  hidden: { y: -1200 },
  show: {
    y: 0,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
      /* staggerChildren: 0.5, */
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
    transition: { ease: 'easeIn', duration: 0.4 },
  },
};

export const endFade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: 'easeIn', duration: 4 },
  },
};
