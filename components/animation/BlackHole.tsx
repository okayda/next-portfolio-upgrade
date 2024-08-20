export default function BlackHole() {
  return (
    <video
      preload="none"
      autoPlay
      playsInline
      loop
      muted
      className="absolute left-0 top-[-455px] -z-20 h-[650px] w-full rotate-180 object-cover"
    >
      <source src="/video/blackHole.webm" type="video/webm" />
    </video>
  );
}
