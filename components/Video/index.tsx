import { useEffect, useRef } from 'react';

export default function Video({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(videoRef.current);

    return () => {
      videoRef.current && observer.unobserve(videoRef.current);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      muted
      autoPlay
      playsInline
      loop
      controls
      className="mt-6 rounded-xl border dark:border-zinc-800"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
