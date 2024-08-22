export default function Footer() {
  return (
    <div className="pt-16 text-center text-sm font-medium text-gray-400 xs:pb-6">
      <p>
        Created from my
        <span className="text-rose-400"> Hearth</span> &
        <span className="text-cyan-400"> Curiosity</span>
      </p>
      <p className="h-full">
        <meta itemProp="copyrightYear" content="2024" />
        Copyright © 2024 Design, Inspired, Developed by{" "}
        <span itemProp="creator" className="block text-amber-400 xs:inline">
          Jhon Queñano
        </span>
        .
      </p>
    </div>
  );
}
