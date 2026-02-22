import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";
import { Product } from "../types/product";

describe("ProductList Component", () => {

  const mockProducts: Product[] = [
    {
      id: 1,
      title: "Product A",
      price: 100,
      discountPercentage: 10,
      rating: 4.5,
      thumbnail: "image1.jpg",
    },
    {
      id: 2,
      title: "Product B",
      price: 200,
      discountPercentage: 15,
      rating: 4.2,
      thumbnail: "image2.jpg",
    },
    {
      id: 3,
      title: "Product C",
      price: 300,
      discountPercentage: 20,
      rating: 4.8,
      thumbnail: "image3.jpg",
    },
  ];

  test("renders all products dynamically using forEach", () => {
    render(<ProductList products={mockProducts} />);

    mockProducts.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });

    const renderedItems = screen.getAllByText(/Product/i);
    expect(renderedItems.length).toBe(mockProducts.length);
  });

  test("renders nothing when products array is empty", () => {
    render(<ProductList products={[]} />);
    expect(screen.queryByText(/Product/i)).not.toBeInTheDocument();
  });

});