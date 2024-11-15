import React, { useEffect, useState } from "react";
import coat from "../assets/coat.png";
import Card from "../components/Card";
import { Select, Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { fetchCategories } from "../store/CategoriesSlice";
import { useParams } from "react-router-dom";
const Shop = () => {
  window.scrollTo(0, 0);
  const { products, loading, error } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);
  const [viewList, setProductsList] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    setProductsList(products);
  }, []);

  const handleChangeListProducts = (category) => {
    if (category === "") {
      setProductsList(products);
    } else {
      const list = products.filter((el) => {
        return el.category === category;
      });
      setProductsList(list);
    }
  };

  const sortingMethods = {
    plth: (a, b) => b.price - a.price,
    phtl: (a, b) => a.price - b.price,
    aatz: (a, b) => a.title.localeCompare(b.title),
    azta: (a, b) => b.title.localeCompare(a.title),
    rev: (a, b) => a.rating.count - b.rating.count,
  };

  const handleChangeSorting = (ev) => {
    const s = ev.target.value;
    const sortFunction = sortingMethods[s];

    setProductsList((prev) => {
      return sortFunction ? [...prev].sort(sortFunction) : products;
    });
  };

  useEffect(() => {
    if (params.category) {
      handleChangeListProducts(params.category);
    } else if (params.q) {
      const list = products.filter((el) => {
        return (
          el.title.toLowerCase().includes(params.q.toLowerCase()) ||
          el.description.toLowerCase().includes(params.q.toLowerCase())
        );
      });
      setProductsList(list);
    } else {
      setProductsList(products);
    }
  }, [params]);

  return (
    <div className="text-start md:w-[90%] m-auto p-2 md:p-0 my-[2rem]">
      <p className="md:ps-2 font-bold text-2xl">Shop</p>
      <div className="flex my-5 md:ps-2 justify-between md:flex-row flex-col gap-3">
        <div className="flex items-center gap-3">
          <p>Filter:</p>{" "}
          <Select placeholder="Sort By" onChange={handleChangeSorting}>
            <option value="plth">price high to low</option>
            <option value="phtl">price low to high</option>
            <option value="aatz">alphapeticaly a to z</option>
            <option value="azta">alphapeticaly z to a</option>
            <option value="rev">reviews</option>
          </Select>
        </div>
        <div>
          <Select
            placeholder="All Category"
            onChange={(ev) => {
              handleChangeListProducts(ev.target.value);
            }}
          >
            {categories.map((el, idx) => {
              return (
                <option key={idx} value={el} onClick={() => {}}>
                  {el}
                </option>
              );
            })}
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3">
        {!error &&
          !loading &&
          viewList.map((el, idx) => {
            let stars = [];
            const rating = el.rating?.rate ?? 0;
            for (let index = 0; index < 5; index++) {
              index < Math.round(Number(rating))
                ? stars.push(1)
                : stars.push(0);
            }
            return (
              <Card
                key={idx}
                item={el}
                id={el.id}
                image={el.image}
                title={el.title}
                price={`$${el.price}`}
                oldPrice={`${el.price - el.price * 0.1}`}
                stars={stars}
                reviews={el.rating?.count ?? 0}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Shop;
