import React from "react";
import { useEffect, useRef } from "react";
import axios from "axios";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Products from "../components/Products";
import { useState } from "react";

const Home = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const inputRef = useRef({
    keyword: "",
    min_price: "",
    max_price: "",
    taxonomy_id: "",
  });

  const getProducts = (e) => { 

   if(e) e.preventDefault()
    //bunu karsiya gonderrirri azrica filter gondeririy altta
    const payload = {
      keyword: inputRef.current.keyword,
      min_price: inputRef.current.min_price,
      max_price: inputRef.current.max_price,
      taxonomy_id: inputRef.current.taxonomy_id,
      page: page,
    };

    //burada dikkat edilecek sy karsi ratadafta post onmeli yoks ahata aliriy
    axios
      .post("http://localhost:8006/products", payload)
      // .then(res=>console.log(res.data))
      .then((res) => setData(res.data.data));
  };

  useEffect(() => {
    getProducts();
  }, [page]);


  const increas =()=>{
   setPage( page +1)
  }
 const decreas = ()=>{
  page > 1 && setPage (page -1)
 }



  return (
    <div>
      <div>
      <Header
      payload={inputRef.current}
      getProducts={getProducts}
      />
      <div>
      <div className="grid">
        <Filter 
        //burada dikkat et yukarda pay;oad icindeki guncel druurmu gonderiyoruz
        payload={inputRef.current}
        getProducts={getProducts}
        
        />
        <Products 
        
        payload={inputRef.current}
        data={data}
        //get products gonderririy cunku degisklikleri kontrol etmek icin
        getProducts={getProducts}
        page={page}
        decreas={decreas}
        increas={increas}
        />
        
      </div>
      </div>
      </div>
      
     
    
 
    </div>
  );
};

export default Home;
