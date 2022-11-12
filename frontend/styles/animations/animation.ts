export const CardHover = {
  hover: {
    y: -10,
  },

  start: {
    opacity: 0,
    y: 5,
  },

  end: {
    opacity: 1,
    y: 0,
    transition: {
      default: {
        duration: 0.2,
      },
      opacity: {
        duration: 1,
      },
    },
  },
};

export const WelcomeMotion = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 10,
    },
  },
};

export const WrapperVar = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 3,
      bounce: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};

export const EleVar = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

export const SvgAni = {
  start: { strokeDashoffset: 60 },
  end: {
    strokeDashoffset: 0,
  },
};

export const NabAni = {
  open: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      duration: 0.5,
    },
  },
};

export const NabCategoryAni = {
  open: {
    opacity: 1,
    height: "160px",
    transition: {
      duration: 0.5,
      opacity: {
        delay: 0.3,
      },
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.5,
      opacity: {
        duration: 0.1,
      },
    },
  },
};