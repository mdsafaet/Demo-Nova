import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { heroVideo, project1 } from "@/assets";

export default function HeroVideo() {
  const videoRef = useRef(null);
  const userPaused = useRef(false);
  const autoAllowed = useRef(false);
  const inView = useRef(true);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const connection = navigator.connection;
    const sync = () => {
      autoAllowed.current = !preference.matches && !connection?.saveData;
      if (autoAllowed.current && !userPaused.current && inView.current && !document.hidden) {
        if (!video.getAttribute("src")) video.src = heroVideo;
        void video.play().catch(() => setPlaying(false));
      } else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => { inView.current = entry.isIntersecting; sync(); }, {threshold:0});
    observer.observe(video);
    preference.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => { observer.disconnect(); preference.removeEventListener("change", sync); document.removeEventListener("visibilitychange", sync); video.pause(); };
  }, []);
  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) { userPaused.current = true; video.pause(); }
    else {
      userPaused.current = false;
      if (!video.getAttribute("src")) video.src = heroVideo;
      void video.play().catch(() => setPlaying(false));
    }
  };
  return <>
    <video ref={videoRef} className="hero-image hero-video" poster={project1} muted loop playsInline preload="metadata" aria-hidden="true" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setFailed(true)} style={failed ? {display:"none"} : undefined}/>
    {failed && <img className="hero-image" src={project1} alt="Contemporary NOVA residence overlooking a pool"/>}
    {!failed && <button type="button" className="hero-video-toggle" onClick={toggle} aria-label={playing ? "Pause background video" : "Play background video"} title={playing ? "Pause background video" : "Play background video"}>{playing ? <Pause size={16}/> : <Play size={16}/>}</button>}
  </>;
}
