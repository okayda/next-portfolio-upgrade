export default function BlackHole() {
  return (
    <video
      preload="none"
      autoPlay
      playsInline
      loop
      muted
      className="absolute left-0 top-[-340px] z-10 h-full w-full rotate-180 object-cover"
    >
      <source src="/video/blackHole.webm" type="video/webm" />
    </video>
  );
}
