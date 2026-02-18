import React from "react";
import { Box } from "@mui/material";
import { Product } from "../types/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <Box display="flex" flexWrap="wrap">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );
};

export default ProductList;
