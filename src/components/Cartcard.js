import "./Cartcard.css";

export const Cartcard = ({ product }) => {
  const { name, price, image } = product;
  return (
    <section className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button>Remove</button>
    </section>
  );
};
