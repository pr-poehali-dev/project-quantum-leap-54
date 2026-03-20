export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">Химия · 9 класс</div>
        <nav className="flex gap-8">
          <a
            href="#"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Состав
          </a>
          <a
            href="#"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Процесс
          </a>
        </nav>
      </div>
    </header>
  )
}