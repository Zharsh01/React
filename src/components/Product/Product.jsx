import React from 'react'
import IMG1 from "../../assets/women/img1.png"
import IMG2 from "../../assets/women/img2.jpg"
import IMG3 from "../../assets/women/img3.jpg"
import IMG4 from "../../assets/women/img4.jpg"

import { FaStar } from "react-icons/fa6"


const ProductsData = [
    {
      id: 1,
      img: IMG1,
      title: "Women Ethnic",
      rating: 5.0,
      color: "white",
      aosDelay: "0",
    },
    {
      id: 2,
      img: IMG2,
      title: "Women western",
      rating: 4.5,
      color: "Red",
      aosDelay: "200",
    },
    {
      id: 3,
      img: IMG3,
      title: "Goggles",
      rating: 4.7,
      color: "brown",
      aosDelay: "400",
    },
    {
      id: 4,
      img: IMG4,
      title: "Printed T-Shirt",
      rating: 4.4,
      color: "Yellow",
      aosDelay: "600",
    },
    {
      id: 5,
      img: IMG2,
      title: "Fashin T-Shirt",
      rating: 4.5,
      color: "Pink",
      aosDelay: "800",
    },
  ];

  
const Product = () => {
  return (
    <div className="mt-14 mb-12">
        <div className="container">
            {/* Header section */}
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <p data-aos="fade-up" className="text-sm text-primary">
                    Top Selling Products for you
                </p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">
                    Products
                </h1>
                <p data-aos="fade-up" className="text-xs text-gray-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                    asperiores modi Sit asperiores modi
                </p>
            </div>
            {/* Body section */}
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                    {/* card section */}
                    {ProductsData.map((data) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        key={data.id}
                        className="space-y-3"
                    >
                        <img
                        src={data.img}
                        alt=""
                        className="h-[220px] w-[150px] object-cover rounded-md"
                        />
                        <div>
                        <h3 className="font-semibold">{data.title}</h3>
                        <p className="text-sm text-gray-600">{data.color}</p>
                        <div className="flex items-center gap-1">
                            <FaStar className="text-yellow-400" />
                            <span>{data.rating}</span>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                {/* view all button */}
                <div className="flex justify-center">
                    <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
                    View All Button
                    </button>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default Product