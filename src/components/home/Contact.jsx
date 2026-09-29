import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div>
        <p className="eyebrow">YOUR NEXT CHAPTER</p>
        <h2>Let’s build<br /><em>what comes next.</em></h2>
      </div>
      <div className="contact-copy">
        <p>A new home. A new opportunity. A shared ambition.<br />Your conversation with NOVA starts here.</p>
        <a className="button button-white" href="mailto:info@novadevelopment.com">Start a conversation <ArrowUpRight size={19} /></a>
        <a className="contact-email" href="mailto:info@novadevelopment.com">info@novadevelopment.com</a>
      </div>
    </section>
  );
}
