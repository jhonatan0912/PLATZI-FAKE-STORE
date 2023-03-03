export interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: Category
}

type Category = {
  id: string;
  name: string
  image: string;
  creationAt: Date;
  updatedAt: Date;
}