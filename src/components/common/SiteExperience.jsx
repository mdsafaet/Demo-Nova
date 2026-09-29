import { useEffect, useRef } from "react";
import { logo, project1, project2, project3 } from "@/assets";

const THREE_CDN = "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js";
const LENIS_CDN = "https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js";

function loadScript(src, ready) {
  if (ready()) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export default function SiteExperience() {
  const mountRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    let destroyed = false;
    let lenis = null;
    let lenisRaf = 0;
    let cleanupThree = () => {};

    // Museum-like section reveals: restrained, slow and editorial.
    const revealTargets = document.querySelectorAll(".section, .market-strip, footer");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.target.classList.toggle("in-view", entry.isIntersecting)),
      { threshold: 0.08, rootMargin: "0px 0px -10% 0px" }
    );
    revealTargets.forEach((el) => {
      el.classList.add("reveal-section");
      observer.observe(el);
    });

    const anchorHandler = (event) => {
      const target = event.target;
      const anchor = target?.closest("a[href^='#']");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const element = document.querySelector(href);
      if (!element) return;
      event.preventDefault();
      if (lenis && !reducedMotion) lenis.scrollTo(element, { duration: 1.65, offset: 0 });
      else element.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", href);
    };
    document.addEventListener("click", anchorHandler);

    if (reducedMotion || !mountRef.current) {
      return () => {
        document.removeEventListener("click", anchorHandler);
        observer.disconnect();
      };
    }

    Promise.all([
      loadScript(THREE_CDN, () => Boolean(window.THREE)),
      loadScript(LENIS_CDN, () => Boolean(window.Lenis)),
    ]).then(() => {
      if (destroyed || !mountRef.current || !window.THREE) return;
      const THREE = window.THREE;

      // Inertial scroll similar to modern creative / museum sites.
      if (window.Lenis) {
        lenis = new window.Lenis({
          duration: 1.25,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 0.88,
          touchMultiplier: 1.15,
          infinite: false,
        });
        const smoothRaf = (time) => {
          lenis?.raf(time);
          lenisRaf = requestAnimationFrame(smoothRaf);
        };
        lenisRaf = requestAnimationFrame(smoothRaf);
      }

      const host = mountRef.current;
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x07101f, isMobile ? 0.075 : 0.055);

      const camera = new THREE.PerspectiveCamera(34, innerWidth / innerHeight, 0.1, 60);
      camera.position.set(0, 0.15, 8.8);

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !isMobile,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(devicePixelRatio, isMobile ? 1.25 : 1.7));
      renderer.setSize(innerWidth, innerHeight);
      renderer.setClearColor(0x07101f, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      host.appendChild(renderer.domElement);

      // Lighting: soft gallery key + cold rim + warm fill.
      scene.add(new THREE.HemisphereLight(0xc8d8ff, 0x05070d, 1.45));
      const key = new THREE.DirectionalLight(0xffffff, 4.2);
      key.position.set(4.5, 6.5, 7);
      scene.add(key);
      const rim = new THREE.PointLight(0x4e76ff, 22, 14, 2);
      rim.position.set(-3.5, 1.5, 3);
      scene.add(rim);
      const warm = new THREE.PointLight(0xffd8b0, 10, 10, 2);
      warm.position.set(3, -2, 1.5);
      scene.add(warm);

      const world = new THREE.Group();
      scene.add(world);

      // Central floating NOVA mark: uses the exact same logo asset as the site header.
      const textureLoader = new THREE.TextureLoader();
      const sculpture = new THREE.Group();
      world.add(sculpture);

      const logoTexture = textureLoader.load(logo);
      logoTexture.colorSpace = THREE.SRGBColorSpace;
      const sculptureMaterial = new THREE.MeshBasicMaterial({
        map: logoTexture,
        transparent: true,
        alphaTest: 0.02,
        side: THREE.DoubleSide,
        depthWrite: false,
        toneMapped: false,
      });
      const body = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 1.12), sculptureMaterial);
      body.rotation.set(0.04, 0.08, 0.02);
      sculpture.add(body);

      // A subtle rear layer gives the flat logo a little physical depth while preserving the original mark.
      const logoDepthMaterial = new THREE.MeshBasicMaterial({
        map: logoTexture,
        color: 0x7896ff,
        transparent: true,
        opacity: 0.18,
        alphaTest: 0.02,
        side: THREE.DoubleSide,
        depthWrite: false,
        toneMapped: false,
      });
      const logoDepth = new THREE.Mesh(new THREE.PlaneGeometry(4.6, 1.12), logoDepthMaterial);
      logoDepth.position.z = -0.10;
      logoDepth.position.x = 0.04;
      logoDepth.position.y = -0.03;
      logoDepth.rotation.copy(body.rotation);
      sculpture.add(logoDepth);

      const haloMat = new THREE.MeshBasicMaterial({ color: 0xcbd8ff, transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false });
      const halo = new THREE.Mesh(new THREE.RingGeometry(1.85, 1.858, 220), haloMat);
      halo.rotation.x = Math.PI * 0.5;
      sculpture.add(halo);

      const pedestal = new THREE.Mesh(
        new THREE.CylinderGeometry(1.05, 1.22, 0.28, 64),
        new THREE.MeshStandardMaterial({ color: 0x182132, roughness: 0.75, metalness: 0.08 })
      );
      pedestal.position.y = -2.15;
      sculpture.add(pedestal);

      const pedestalTop = new THREE.Mesh(
        new THREE.CylinderGeometry(0.9, 1.02, 0.08, 64),
        new THREE.MeshStandardMaterial({ color: 0x8f9db5, roughness: 0.45, metalness: 0.15 })
      );
      pedestalTop.position.y = -1.97;
      sculpture.add(pedestalTop);

      // Architectural line work in the distance.
      const lineMat = new THREE.LineBasicMaterial({ color: 0x7f9fff, transparent: true, opacity: 0.16 });
      const linePoints = [];
      for (let i = 0; i < 90; i++) {
        const a = (i / 89) * Math.PI * 2;
        linePoints.push(new THREE.Vector3(Math.cos(a) * 4.6, Math.sin(a * 2.0) * 0.6, Math.sin(a) * 2.4 - 2));
      }
      const lineGeom = new THREE.BufferGeometry().setFromPoints(linePoints);
      const architecturalLine = new THREE.Line(lineGeom, lineMat);
      world.add(architecturalLine);

      // Large image planes reference the editorial image/3D interplay of the inspiration site.
      const makePlane = (url, x, y, z, rotY) => {
        const group = new THREE.Group();
        const geom = new THREE.PlaneGeometry(2.85, 1.9, 1, 1);
        const mat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false });
        const mesh = new THREE.Mesh(geom, mat);
        textureLoader.load(url, (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          mat.map = tex;
          mat.needsUpdate = true;
        });
        mesh.position.set(x, y, z);
        mesh.rotation.y = rotY;
        group.add(mesh);
        world.add(group);
        return { group, mesh, geom, mat };
      };
      const galleryA = makePlane(project1, -3.6, 0.15, -0.8, 0.18);
      const galleryB = makePlane(project2, 3.6, -0.1, -1.6, -0.2);
      const galleryC = makePlane(project3, -3.2, -0.2, -2.4, 0.12);

      const pointer = new THREE.Vector2();
      const pointerTarget = new THREE.Vector2();
      const onPointer = (e) => {
        pointerTarget.set((e.clientX / innerWidth - 0.5) * 2, (e.clientY / innerHeight - 0.5) * 2);
      };
      addEventListener("pointermove", onPointer, { passive: true });

      let targetProgress = 0;
      let progress = 0;
      const onScroll = () => {
        const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
        targetProgress = scrollY / max;
      };
      addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      const onResize = () => {
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(innerWidth, innerHeight);
        renderer.setPixelRatio(Math.min(devicePixelRatio, innerWidth <= 768 ? 1.25 : 1.7));
      };
      addEventListener("resize", onResize, { passive: true });

      const clamp01 = (v) => Math.max(0, Math.min(1, v));
      const smoothstep = (a, b, x) => {
        const t = clamp01((x - a) / Math.max(0.0001, b - a));
        return t * t * (3 - 2 * t);
      };
      const pulse = (start, peak, end, x) => {
        return x <= peak ? smoothstep(start, peak, x) : 1 - smoothstep(peak, end, x);
      };

      const clock = new THREE.Clock();
      let raf = 0;
      const render = () => {
        const t = clock.getElapsedTime();
        progress += (targetProgress - progress) * 0.055;
        pointer.lerp(pointerTarget, 0.045);

        // Scroll choreography: object does not just spin; it travels through a composed scene.
        sculpture.rotation.y = progress * Math.PI * 2.35 + pointer.x * 0.1;
        sculpture.rotation.x = -0.1 + Math.sin(progress * Math.PI * 2) * 0.18 - pointer.y * 0.055;
        sculpture.position.x = Math.sin(progress * Math.PI * 2.2) * (isMobile ? 0.22 : 0.85);
        sculpture.position.y = Math.sin(progress * Math.PI * 3.2) * 0.25;
        sculpture.scale.setScalar((isMobile ? 0.72 : 1) * (1 - smoothstep(0.70, 0.98, progress) * 0.18));
        halo.rotation.z = -progress * Math.PI * 1.6 + t * 0.025;
        halo.scale.setScalar(1 + Math.sin(t * 0.6) * 0.025);

        architecturalLine.rotation.y = progress * 0.9 + t * 0.012;
        architecturalLine.rotation.z = Math.sin(progress * Math.PI) * 0.12;

        const a = pulse(0.17, 0.28, 0.40, progress);
        const b = pulse(0.36, 0.50, 0.64, progress);
        const c = pulse(0.58, 0.70, 0.84, progress);
        galleryA.mat.opacity = a * 0.72;
        galleryB.mat.opacity = b * 0.72;
        galleryC.mat.opacity = c * 0.72;
        galleryA.mesh.position.x = -3.6 + (1 - a) * -0.8;
        galleryB.mesh.position.x = 3.6 + (1 - b) * 0.8;
        galleryC.mesh.position.x = -3.2 + (1 - c) * -0.8;
        galleryA.mesh.rotation.z = (1 - a) * -0.06;
        galleryB.mesh.rotation.z = (1 - b) * 0.06;
        galleryC.mesh.rotation.z = (1 - c) * -0.05;

        // Camera follows a slow S-curve through the experience.
        const targetCamX = Math.sin(progress * Math.PI * 2) * (isMobile ? 0.08 : 0.45) + pointer.x * 0.12;
        const targetCamY = 0.15 + Math.sin(progress * Math.PI * 1.5) * 0.35 - pointer.y * 0.08;
        const targetCamZ = 8.8 - smoothstep(0.0, 0.45, progress) * 0.75 + smoothstep(0.65, 1, progress) * 0.5;
        camera.position.x += (targetCamX - camera.position.x) * 0.04;
        camera.position.y += (targetCamY - camera.position.y) * 0.04;
        camera.position.z += (targetCamZ - camera.position.z) * 0.04;
        camera.lookAt(sculpture.position.x * 0.18, sculpture.position.y * 0.12, 0);

        renderer.render(scene, camera);
        raf = requestAnimationFrame(render);
      };
      raf = requestAnimationFrame(render);

      cleanupThree = () => {
        cancelAnimationFrame(raf);
        removeEventListener("pointermove", onPointer);
        removeEventListener("scroll", onScroll);
        removeEventListener("resize", onResize);
        [body.geometry, logoDepth.geometry, halo.geometry, pedestal.geometry, pedestalTop.geometry, lineGeom, galleryA.geom, galleryB.geom, galleryC.geom].forEach((g) => g.dispose());
        [sculptureMaterial, logoDepthMaterial, haloMat, pedestal.material, pedestalTop.material, lineMat, galleryA.mat, galleryB.mat, galleryC.mat].forEach((m) => {
          if (m.map) m.map.dispose();
          m.dispose();
        });
        renderer.dispose();
        renderer.domElement.remove();
      };
    }).catch(() => {
      // Site remains fully functional if CDN/WebGL is unavailable.
    });

    return () => {
      destroyed = true;
      document.removeEventListener("click", anchorHandler);
      observer.disconnect();
      if (lenisRaf) cancelAnimationFrame(lenisRaf);
      lenis?.destroy?.();
      cleanupThree();
    };
  }, []);

  return <div ref={mountRef} className="three-site-experience museum-experience" aria-hidden="true" />;
}
