import { ArrowUpRight } from "lucide-react";
import { logo } from "@/assets";

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <a href="#home" className="logo" aria-label="Back to NOVA home">
          <img src={logo} alt="NOVA Development" width="155" height="54" />
        </a>
        <p>Places of possibility.<br />A legacy of belonging.</p>
        <nav aria-label="Footer navigation">
          <a href="#company">Company</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#presence">Global presence</a>
          <a href="#responsibility">Responsibility</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} NOVA Development</span>
        <span>DUBAI · DHAKA · NEW YORK · LONDON</span>
        <a href="#home">Back to top <ArrowUpRight size={15} /></a>
      </div>
    </footer>
  );
}
