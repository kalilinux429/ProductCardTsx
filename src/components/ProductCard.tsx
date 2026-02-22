import React from "react";
import { Card, CardContent, CardMedia, Typography, Rating, Box } from "@mui/material";
import { Product } from "../types/product";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card sx={{ width: 260, boxShadow: 3, borderRadius: 3 }}>
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

        {/* Star Rating */}
        <Box display="flex" alignItems="center" gap={1}>
          <Rating
            value={product.rating}
            precision={0.5}
            readOnly
          />
          <Typography variant="body2">
            ({product.rating})
          </Typography>
        </Box>

      </CardContent>
    </Card>
  );
};

export default ProductCard;


