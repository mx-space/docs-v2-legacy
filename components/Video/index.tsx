import { useEffect, useRef } from 'react';

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

export default function Video({ src }) {
  const videoRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, observerOptions);
    if (videoRef.current) {
      observerRef.current.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current && observerRef.current) {
        observerRef.current.unobserve(videoRef.current);
      }
    };
  }, [src]);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        if (!videoRef.current.src) {
          videoRef.current.src = src;
        }
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    });
  };

  return (
    <video
      ref={videoRef}
      muted
      autoPlay
      playsInline
      loop
      controls
      className="mt-6 rounded-xl border dark:border-zinc-800"
    />
  );
}
