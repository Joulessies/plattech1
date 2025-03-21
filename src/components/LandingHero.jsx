import '../styles/LandingHero.css';
import CustomMarquee from './CustomMarquee';

export default function LandingHero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <CustomMarquee />
      </div>
    </div>
  );
}
