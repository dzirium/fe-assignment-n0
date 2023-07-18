import React, { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Home() {
  const [perfumeList, usePerfumeList] = useState("");

  return (
    <>
      <div className="grid ml-16 lg:grid-cols-3 md:grid-cols-2 gap-3 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
