/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import {
  ChevronDownIcon,
  FunnelIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllProducts,
  selectBrands,
  fetchBrands,
  selectCategories,
  fetchCategories,
  fetchProductsByFilter,
  selectTotalProducts,
} from "../../slice/productSlice";
import MobileFilter from "../filter/MobileFilter";
import DesktopFilter from "../filter/DesktopFilter";
import Paginator from "../paginator/Paginator";
import ProductGrid from "./ProductGrid";
import { PAGE_LIMIT } from "../../constants/constants";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const brands = useSelector(selectBrands);
  const categories = useSelector(selectCategories);
  const totalProducts = useSelector(selectTotalProducts);
  const sortOptions = [
    { name: "Best Rating", sort: "rating", order: "desc", current: false },
    { name: "Price: Low to High", sort: "price", order: "asc", current: false },
    {
      name: "Price: High to Low",
      sort: "price",
      order: "desc",
      current: false,
    },
  ];
  const filters = [
    {
      id: "category",
      name: "Category",
      options: categories,
    },
    {
      id: "brand",
      name: "Brand",
      options: brands,
    },
  ];

  // State
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState({});
  const [page, setPage] = useState(1);

  // On mount
  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    const pagination = { _page: page, _limit: PAGE_LIMIT };
    dispatch(fetchProductsByFilter({ filter, sort, pagination }));
  }, [dispatch, filter, sort, page]);

  useEffect(() => {
    setPage(1);
  }, [totalProducts, filter, sort]);

  // Functions
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const handleFilter = (e, section, option) => {
    const isFilterChecked = e.target.checked;
    const newFilter = { ...filter };
    if (isFilterChecked) {
      if (newFilter[section.id]) {
        newFilter[section.id].push(option.value);
      } else {
        newFilter[section.id] = [option.value];
      }
    } else {
      const index = newFilter[section.id].findIndex(
        (el) => el === option.value
      );
      newFilter[section.id].splice(index, 1);
    }
    setFilter(newFilter);
  };

  const handleSort = (e, option) => {
    const sort = { _sort: option.sort, _order: option.order };
    setSort(sort);
  };

  const handlePage = (page) => {
    setPage(page);
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          <div>
            {/* Mobile filter dialog */}
            <MobileFilter
              filters={filters}
              handleFilter={handleFilter}
              mobileFiltersOpen={mobileFiltersOpen}
              setMobileFiltersOpen={setMobileFiltersOpen}
            />

            <main className="mx-auto w-full px-4 sm:px-6 lg:px-8">
              <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                <h1 className="md:text-4xl text-2xl font-bold tracking-tight text-gray-900">
                  All Products
                </h1>

                <div className="flex items-center">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        Sort
                        <ChevronDownIcon
                          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {sortOptions.map((option) => (
                            <Menu.Item key={option.name}>
                              {({ active }) => (
                                <p
                                  onClick={(e) => handleSort(e, option)}
                                  className={classNames(
                                    option.current
                                      ? "font-medium text-gray-900"
                                      : "text-gray-500",
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  {option.name}
                                </p>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  <button
                    type="button"
                    className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                  >
                    <span className="sr-only">View grid</span>
                    <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                    onClick={() => setMobileFiltersOpen(true)}
                  >
                    <span className="sr-only">Filters</span>
                    <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <section
                aria-labelledby="products-heading"
                className="pb-24 pt-6"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  {/* Desktop Filters */}
                  <DesktopFilter
                    filters={filters}
                    handleFilter={handleFilter}
                  />

                  {/* Product grid */}
                  <ProductGrid products={products} />
                </div>
              </section>

              {/* Pagination */}
              <Paginator
                page={page}
                setPage={setPage}
                handlePage={handlePage}
                pageLimit={PAGE_LIMIT}
                totalProducts={totalProducts}
              />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
