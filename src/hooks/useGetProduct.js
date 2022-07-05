import { useEffect,  useState} from "react";
import axios from "axios";

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

	useEffect(async () => {
		const response = await axios(API);
		setProducts(response.data);
	}, [])

    return products;
}

export default useGetProducts;

// import { useEffect, useState } from "react";

// const useGetProduct = (API) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(API)
//       const data = await response.json()
//       setProducts(data)
//     }
//     fetchData()
//   }, [])
//   return products
// }

// export { useGetProducts }