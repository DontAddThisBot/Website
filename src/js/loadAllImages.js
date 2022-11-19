export const loadAllImages = (...image) => {
  const images = [...image];
  return (
    <div
      style={{
        display: "none",
      }}
    >
      {images.map(
        (image, key) => <img src={image} alt={key} key={key} /> ?? null
      )}
    </div>
  );
};
