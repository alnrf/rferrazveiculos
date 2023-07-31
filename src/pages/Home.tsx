import React from "react";
import { banner } from "../shared/mocks/homeBanner";

export const Home = () => {
  return (
    <div>
      {banner.map((item: any, index) => (
        <>
          <h5 key={index}>{item.description}</h5>
          <img src={item.image_url} title={item.description} />
        </>
      ))}
    </div>
  );
};
