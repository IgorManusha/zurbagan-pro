import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(null);

  return (
    <header className="header">
      <div className="topbar">
        <span>067 300 22 00</span>
        <span>info@zurbagan.tv</span>
      </div>

      <div className="container nav">
        <div className="logo">ZURBAGAN</div>

        <nav className="nav-links">
          <div
            className="dropdown"
            onMouseEnter={() => setOpen("net")}
            onMouseLeave={() => setOpen(null)}
          >
            Інтернет
            {open === "net" && (
              <div className="menu">
                <a>Домашній</a>
                <a>Бізнес</a>
              </div>
            )}
          </div>

          <div
            className="dropdown"
            onMouseEnter={() => setOpen("tv")}
            onMouseLeave={() => setOpen(null)}
          >
            ТБ
            {open === "tv" && (
              <div className="menu">
                <a>Кабельне</a>
                <a>IPTV</a>
              </div>
            )}
          </div>

          <a>Тарифи</a>
          <a>Контакти</a>
        </nav>

        <button className="btn">Підключитись</button>
      </div>
    </header>
  );
}
