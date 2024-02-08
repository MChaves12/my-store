"use client"

import { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper"
import ProductCard from "./ProductCard"
import { mockProducts } from "@/assets/mockProducts";
import api from "@/app/api/routes";
import CustomButton from "./CustomButton";

const Shop = () => {

const [products, setProducts] = useState(mockProducts);

  const getAll = () => {
    api.getAllProducts()
    .then((res) => {
      setProducts(res)
    })
  }

  const getPrata = () => {
    api.getAllProductsByCategory("prata")
    .then((res) => {
        setProducts(res)
    })
  }

  const getOuro = () => {
    api.getAllProductsByCategory("ouro")
    .then((res) => {
        setProducts(res)
    })
  }

  return (
    <MaxWidthWrapper className="py-10">
          <h3 className="text-3xl text-center uppercase font-bold md:text-4xl md:mt-11">
            Apenas o <span className="text-green-600"> essencial </span>
          </h3>
          <div className="flex justify-center sm:flex-row gap-4 mt-6">
            <CustomButton handleClick={getAll} btnName="Todos" /> 
            <CustomButton handleClick={getPrata} btnName="Prata" /> 
            <CustomButton handleClick={getOuro} btnName="Ouro" />
            <CustomButton handleClick={getAll} btnName="Mais Vendidos" /> 
          </div>
          <div className="container grid grid-cols-2 mt-8 gap-1 px-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                _id={product._id}
                key={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </MaxWidthWrapper>
  )
}

export default Shop