export default function Footer() {
  return (
    <div className="pb-6 pt-16 text-center font-medium text-gray-400">
      <p>
        Created from my
        <span className="text-rose-400"> Hearth</span> &
        <span className="text-cyan-400"> Curiosity</span>
      </p>
      <p>
        <meta itemProp="copyrightYear" content="2024" />
        Copyright © 2024 Design, Inspired, Developed by
        <span itemProp="creator" className="text-amber-400">
          Jhon Queñano
        </span>
        .
      </p>
    </div>
  );
}
