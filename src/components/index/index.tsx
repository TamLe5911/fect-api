/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */

import router from "next/router";
import { useEffect, useState } from "react";
import * as request from "../../api/infomation/InfomationServices";
import { IInfos } from "./data-access/model/model";

const TableInfoList = () => {
  const [infos, setInfos] = useState({} as IInfos);
  const [isLoading, setIsLoading] = useState(false);
  const getInfomations = async () => {
    setIsLoading(true);
    const result = await request.getInfomations(`services/1/products`, {
      params: {
        limit: 5,
      },
    });
    setInfos((result?.data || []) as IInfos);
  };
  useEffect(() => {
    getInfomations();
    console.log(infos);
  }, []);
  return (
    <div className="tb-infomation margin-negative-5rem">
      <div>
        <h1>Đây là MinPrice</h1>
        {/* {Object.keys(infos.minPrice || []).map((item,a,b) => {
        return(
          <p key={a}>
      
           
      {item} item: {b}
          </p>
        )
        })} */}
        {infos.minPrice?.currency}
        {infos.minPrice?.price}
        {infos.minPrice?.priceContent}
      </div>
      <h1>Đây là TopProduct</h1>
      {Array.from(infos.topProducts || []).map((item) => {
        return (
          <div key={item.areaId}>
            <a  onClick={() => { router.push('/' + item.areaId); }}>{item.title}</a>
            <img src={item.image} alt="" />
            <img src={item.imageFill} alt="" />
            {Array.from(item.countries || []).map((country, index) => (
              <div key={index}>
                Day la country <br></br>
                {country.name}
                <img src={country.imageJuris} alt="" />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export { TableInfoList };
