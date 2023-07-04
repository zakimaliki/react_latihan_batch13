import { Fragment, useState } from "react";
import ProductList from "../components/ProductList";

function List() {
  let [product, setProduct] = useState("");
  let [products, setProducts] = useState([]);

  let handleChangeName =(e)=>{
    setProduct(e.target.value);
  }

  let handleSimpan =()=>{
    setProducts([...products, product])
    setProduct("")
  }

  return (
    <Fragment>
        <label htmlFor="product">Product Name :</label>
        <input type="text" name="product" placeholder="Name" id="product" onChange={handleChangeName} value={product}/>
        <br/>
        <button onClick={handleSimpan}>submit</button>
        <hr />
        <ProductList products={products}></ProductList>
    </Fragment>
  );
}

export default List;
