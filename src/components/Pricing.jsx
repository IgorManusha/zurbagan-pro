export default function Pricing() {
  return (
    <section className="container">
      <h2>Тарифи</h2>

      <div className="cards">
        <div className="card">
          <h3>100 Mbps</h3>
          <p>150 грн</p>
        </div>

        <div className="card popular">
          <h3>300 Mbps</h3>
          <p>220 грн</p>
        </div>

        <div className="card">
          <h3>1 Gbps</h3>
          <p>350 грн</p>
        </div>
      </div>
    </section>
  );
}
