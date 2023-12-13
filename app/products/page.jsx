import axios from "axios";
import Image from "next/image";
import React from "react";

const products = async () => {
  const { data: allProducts } = await axios.get(
    "http://localhost:3000/api/products"
  );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {allProducts.map((p) => (
        <div className="flex flex-col gap-3 items-center" key={p.id}>
          <Image
            src={p.images[0] ? p.images[0].src : "/No-Image-Placeholder.png"}
            width={200}
            height={200}
            alt={p.name}
            className="rounded-xl"
          />
          <h4 className="font-bold text-lg">{p.name}</h4>
          <div dangerouslySetInnerHTML={{ __html: p.price_html || "" }}></div>
        </div>
      ))}
    </div>
  );
};

export default products;
