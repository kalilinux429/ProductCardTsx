import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from "../types/product";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card sx={{ width: 260, m: 2, boxShadow: 3, borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="150"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography>Price: ${product.price}</Typography>
        <Typography>Discount: {product.discountPercentage}%</Typography>
        <Typography>Rating: ⭐ {product.rating}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
