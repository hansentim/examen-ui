import { motion } from 'framer-motion';

//Spara data för animation i ett object
//Initial är utgångsläge dvs när komponenten mounts starta med det state som finns i objektet
//animate är när komponenten mounts genomför animeringen i objektet
//Exit när denna komponent unmounts kommer den "transition" till det state som finns i exit.
const pageTransition = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -300 },
};

//Ta in children som props
//Variants lägger in animationen i ditt element
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
