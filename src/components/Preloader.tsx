'use client';

interface PreloaderProps {
  className?: string;
}

export default function Preloader({ className }: PreloaderProps) {
  return (
    <div id="preloader" className={className}>
      <div className="loader_line"></div>
    </div>
  );
}