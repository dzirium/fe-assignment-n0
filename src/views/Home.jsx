import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios, * as others from "axios";

export default function Home() {
  const perfumeAPI = "https://dummyjson.com/products/category/fragrances";
  const [isLoading, setLoading] = useState(true);
  const [perfumeList, setPerfumeList] = useState({});
  useEffect(() => {
    axios
      .get(perfumeAPI)
      .then((res) => {
        setPerfumeList(Object.values(res.data.products));
        setLoading(false);
        console.log(perfumeList[0].title)
      })
      .catch((err) => console.log(err));
  }, []);
  // useEffect(() => {
  //   console.log(perfumeList);
  //   console.log("Break");
  // }, [perfumeList]);
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <>
      <div className="grid ml-16 lg:grid-cols-3 md:grid-cols-2 gap-3 ">
        {perfumeList.map((item,i) => {return <Card key={item.id} perfumeId={item.id} perfumeBrand= {item.brand} perfumeTitle={item.title} perfumeDiscount={item.discountPercentage} perfumeRating={item.rating} perfumePrice={item.price} perfumeImg={item.images[0]} />})}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </>
  );
}
