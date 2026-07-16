function Card({ title, description, color }) {
  return (
    <div style={{ borderLeft: `4px solid ${color}`, padding: "10px", margin: "10px 0" }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;