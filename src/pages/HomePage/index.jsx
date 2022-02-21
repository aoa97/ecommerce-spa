import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../redux/actions/productActions";
import { Product, Loader } from "../../components";
import "./styles.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector(state => state.productList);

  useEffect(() => dispatch(getProducts()), [dispatch]);

  return (
    <>
      {!loading ? (
        <div className="products">
          {products.map((product) => (
            <Product key={product.id} product={{...product.data(), id: product.id}} />
          ))}
        </div>
      ) : <Loader />}
    </>
  );
};

export default HomePage;

// const todo = useSelector((state) => state.todos[props.id])
