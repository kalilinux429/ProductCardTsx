import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { Product } from "../types/product";

describe("ProductCard Component", () => {

  const mockProduct: Product = {
    id: 1,
    title: "iPhone 15",
    price: 999,
    discountPercentage: 10,
    rating: 4.5,
    thumbnail: "iphone.jpg",
  };

  test("renders product title", () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
  });

  test("renders product price", () => {
    render(<ProductCard product={mockProduct} />);
    expect(
      screen.getByText(`Price: $${mockProduct.price}`)
    ).toBeInTheDocument();
  });

  test("renders product discount", () => {
    render(<ProductCard product={mockProduct} />);
    expect(
      screen.getByText(`Discount: ${mockProduct.discountPercentage}%`)
    ).toBeInTheDocument();
  });

  test("renders product rating value", () => {
    render(<ProductCard product={mockProduct} />);
    expect(
      screen.getByText(`(${mockProduct.rating})`)
    ).toBeInTheDocument();
  });

  test("renders product image with correct alt text", () => {
    render(<ProductCard product={mockProduct} />);
    const image = screen.getByAltText(mockProduct.title);
    expect(image).toBeInTheDocument();
  });

});
