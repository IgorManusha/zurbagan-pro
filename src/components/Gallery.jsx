export default function Gallery() {
  return (
    <section className="container">
      <h2>Наша команда</h2>

      <div className="gallery">
        <img
          src="https://images.unsplash.com/photo-1522071820081"
          loading="lazy"
        />
        <img
          src="https://images.unsplash.com/photo-1556745757"
          loading="lazy"
        />
        <img
          src="https://images.unsplash.com/photo-1521737604893"
          loading="lazy"
        />
      </div>
    </section>
  );
}
