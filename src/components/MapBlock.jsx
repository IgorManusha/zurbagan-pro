export default function MapBlock() {
  return (
    <section className="container">
      <h2>Ми на карті</h2>

      <iframe
        title="map"
        src="https://www.google.com/maps?q=Konotop&output=embed"
        width="100%"
        height="300"
        loading="lazy"
      />
    </section>
  );
}
