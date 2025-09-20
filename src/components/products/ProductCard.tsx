import { IProduct } from "@/type";



const ProductCard = ({product}:{product:IProduct}) => {
    console.log(product)
    return (
    <div className="max-w-sm  bg-gray-400  rounded-lg shadow-md overflow-hidden  ">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover object-center rounded-md"
      />

      {/* Product Info */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 ">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>

        <div className="mt-2 text-gray-700">
          <p>Category: {product.category}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Stock: {product.stock}</p>
          <p>Rating: {product.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;