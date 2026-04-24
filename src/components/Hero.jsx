export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <h1>Інтернет у Конотопі до 1 Гбіт/с</h1>

          <p>
            Швидке підключення інтернету в Конотопі. Стабільна робота навіть під
            час відключень.
          </p>

          <div className="buttons">
            <button className="btn">Підключити</button>
            <button className="btn-outline">Тарифи</button>
          </div>
        </div>

        <div className="hero-card">
          <h3>Акція</h3>
          <h2>300 Mbps</h2>
          <p>Найпопулярніший тариф</p>
        </div>
      </div>
    </section>
  );
}
