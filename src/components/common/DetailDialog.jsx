import { ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/common/Dialog";

// detail = { title, text, image?, meta? } | null
export default function DetailDialog({ detail, onClose }) {
  return (
    <Dialog open={detail !== null} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="nova-dialog" data-lenis-prevent>
        {detail?.image && <img className="dialog-image" src={detail.image} alt={detail.title} />}
        <div className="dialog-body">
          <p className="eyebrow blue">{detail?.meta}</p>
          <DialogTitle className="dialog-title">{detail?.title}</DialogTitle>
          <DialogDescription className="dialog-description">{detail?.text}</DialogDescription>
          <a className="button button-blue" href="#contact" onClick={onClose}>
            Enquire with NOVA <ArrowUpRight size={18} />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
