import "./CartaoC.css" 

const Card = () => {
    const cardData = [
      {
        title: "Lorem ipsum",
        text: "Quisque sagittis est neque, eu dignissim dui gravida et. Mauris id nisl sed purus semper elementum eu a turpis. Curabitur et sollicitudin risus, in lacinia risus. Aliquam finibus purus felis, quis cursus justo hendrerit interdum."
      },
      {
        title: "Lorem ipsum",
        text: "Quisque sagittis est neque, eu dignissim dui gravida et. Mauris id nisl sed purus semper elementum eu a turpis. Curabitur et sollicitudin risus, in lacinia risus. Aliquam finibus purus felis, quis cursus justo hendrerit interdum."
      }
    ];
  
    return (
      <div className="card-container">
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <h2 className="card-title">{card.title}</h2>
          <p className="card-text">{card.text}</p>
        </div>
      ))}
    </div>
    );
}
  
  export default Card;