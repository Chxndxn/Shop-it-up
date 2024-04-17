/* eslint-disable react/prop-types */
import { StarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  if (products.length > 0) {
    return (
      <>
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product-overview/${product.id}`}
                    className="group relative border-2 border-gray-200 p-2 border-solid rounded-lg shadow-sm"
                  >
                    <div className="min-h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <div href={product.thumbnail}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.title}
                          </div>
                        </h3>
                        <p className="flex gap-1 mt-1 text-sm text-gray-500">
                          <StarIcon className="h-4 w-4 self-center" />
                          {product.rating}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          $
                          {Math.round(
                            product.price *
                              (1 - product.discountPercentage / 100)
                          )}
                        </p>
                        <p className="text-sm line-through font-medium text-gray-400">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex justify-center items-center">
          <h2 className="text-2xl font-medium">No products found</h2>
        </div>
      </>
    );
  }
};

export default ProductGrid;
