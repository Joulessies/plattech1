import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/LandingHero.css";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";

function ButtonAnimation() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="button-animation"
    >
      <Button variant="primary">Get Started</Button>
    </motion.div>
  );
}

export default function LandingHero() {
  return (
    <div className="landing-hero">
      <ButtonAnimation />
    </div>
  );
}
