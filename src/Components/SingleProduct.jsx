import { Card, Button } from "react-bootstrap";
import { CartState } from '../Reducers/Context';


const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.slug} alt={prod.title} />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>$ {prod.price}</span>
            
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
            >
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
