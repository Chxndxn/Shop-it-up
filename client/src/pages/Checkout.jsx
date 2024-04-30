import { Link } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/24/solid";
import Navbar from "../features/navbar/Navbar";
const Checkout = () => {
  const products = [
    {
      id: 1,
      name: "Throwback Hip Bag",
      href: "#",
      color: "Salmon",
      price: "$90.00",
      quantity: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
      imageAlt:
        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
    {
      id: 2,
      name: "Medium Stuff Satchel",
      href: "#",
      color: "Blue",
      price: "$32.00",
      quantity: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
      imageAlt:
        "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
    // More products...
  ];

  const addresses = [
    {
      name: "Test Address 1",
      email: "test@gamil.com",
      address: "709, 10th cross AECS layout A block, kudlu",
      country: "India",
      state: "Karnataka",
      city: "Bengaluru",
      phone: "1828281918",
      pincode: "560068",
    },
    {
      name: "Test Address 2",
      email: "demo@gmail.com",
      address: "505, 19th main road, HSR layout 2nd sector",
      country: "India",
      state: "Karnataka",
      city: "Bengaluru",
      phone: "8912979772",
      pincode: "560102",
    },
  ];
  return (
    <Navbar>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-4">
            <form>
              <div className="space-y-5">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h1 className="text-lg font-semibold leading-7 text-gray-900">
                    Contact Information
                  </h1>

                  <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-full">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h1 className="text-base font-semibold leading-7 text-gray-900">
                    Shipping Information
                  </h1>

                  <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pb-8 border-b border-gray-300">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Address Line 1
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Address Line 2
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Country
                      </label>
                      <div className="mt-2">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="block w-full rounded-md border-0 py-2.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        State / Province
                      </label>
                      <div className="mt-2">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="block w-full rounded-md border-0 py-2.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>Karnataka</option>
                          <option>Mumbai</option>
                          <option>Tamil Nadu</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-3 sm:col-start-1">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="city"
                          className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        ZIP / Postal code
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-1">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Addresses
                    </h2>

                    <ul role="list" className="space-y-2 mt-3">
                      {addresses.map((address, index) => (
                        <li
                          key={address.name}
                          className="flex justify-between gap-x-6 border-2 border-gray-200 rounded-lg p-4 shadow-sm"
                        >
                          <label
                            htmlFor={`existing-address-${index}`}
                            className="flex justify-between gap-x-6 w-full cursor-pointer"
                          >
                            <div className="flex min-w-0 gap-x-4">
                              <input
                                id={`existing-address-${index}`}
                                name="existing-address"
                                type="radio"
                                className="flex self-center mr-2 h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                              <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                  {address.name}
                                </p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                  {address.email}
                                </p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                  {address.phone}
                                </p>
                              </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                              <p className="text-sm leading-6 text-gray-900">
                                {address.address}
                              </p>
                              <p className="text-sm leading-6 text-gray-900">
                                {address.city} {", "} {address.pincode}
                              </p>
                              <p className="text-sm leading-6 text-gray-900">
                                {address.state} {", "} {address.country}
                              </p>
                            </div>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="space-y-10">
                    <fieldset>
                      <legend className="text-sm font-semibold leading-6 text-gray-900">
                        Payment
                      </legend>
                      <div className="flex space-x-6 mt-5">
                        <div className="flex items-center gap-x-3">
                          <input
                            id="cash-payment"
                            name="payment-method"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="cash-payment"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Cash
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="card-payment"
                            name="payment-method"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="card-payment"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Card
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="upi-payment"
                            name="payment-method"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="upi-payment"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            UPI
                          </label>
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="md:col-span-full col-span-4">
                          <label
                            htmlFor="card-number"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Card Number
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="card-number"
                              id="card-number"
                              autoComplete="card-number"
                              className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="md:col-span-full col-span-4">
                          <label
                            htmlFor="name-on-card"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Name on card
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="name-on-card"
                              id="name-on-card"
                              autoComplete="name-on-card"
                              className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="col-span-4">
                          <label
                            htmlFor="name-on-card"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Expiration Date (MM/YY)
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="name-on-card"
                              id="name-on-card"
                              autoComplete="name-on-card"
                              className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="md:col-span-2 col-span-4">
                          <label
                            htmlFor="name-on-card"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            CVV / CVC
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="name-on-card"
                              id="name-on-card"
                              autoComplete="name-on-card"
                              className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="lg:col-span-2 pb-10">
            <div className="bg-white max-w-7xl rounded-lg shadow mx-auto p-6">
              <h1 className="text-lg font-semibold leading-7 text-gray-900">
                Order Summary
              </h1>
              <div className="mx-auto w-full px-4 space-y-6 sm:px-6 lg:px-8">
                <div className="mt-8">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {products.map((product) => (
                        <li key={product.id} className="flex py-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-sm font-medium text-gray-900">
                                <h3>
                                  <a href={product.to}>{product.name}</a>
                                </h3>
                                <div className="flex">
                                  <button type="button">
                                    <TrashIcon
                                      className="h-5 w-5 text-gray-500"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </div>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">
                                {product.color}
                              </p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <p>{product.price}</p>

                              <select
                                name="quantity"
                                id="quantity"
                                className="block rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-xs sm:text-sm sm:leading-6"
                              >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                              {/* <p className="text-gray-500">{product.quantity}</p> */}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Total</p>
                    <p>$262.00</p>
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/checkout"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow hover:bg-indigo-700"
                    >
                      Confirm Order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Checkout;
