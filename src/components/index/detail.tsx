import { useEffect, useState } from "react";
import * as request from "../../api/infomation/InfomationServices";
import { useRouter } from "next/router";
import { ICountry, IInfos, IProduct } from "./data-access/model/model";
import { equal } from "assert";

type Request = {
 
  
  catorogy:string
};

const InfomationGetDetail = (props: Request) => {
  const router = useRouter();
  const [contries, setContries] = useState([] as ICountry[]);
  const [isLoading, setIsLoading] = useState(false);

  const getInfomation = async () => {
    setIsLoading(true);
    const { data } = (await request.getInfomations(`services/1/products`, {
      params: {
        limit: 5,
      },
    })) as any;
    console.log("cdshbhcjsd",data)
    const result = data as IInfos;
    if (result) {
      if (result.topProducts) {
        const product = result.topProducts.find(
          (item) => item.areaId == Number(props.catorogy || 0)
        );
        setContries(product?.countries || []);
      }
    }
  };

  useEffect(() => {
    getInfomation();
  }, []);
  return (
    <div className={"tb-infomation"}>
    
      <div id="info-list-dt" className="detail-infomation">
        {contries.map((item, key) => (

          <div key={key}>
            <p>{item.code}</p>
            <p>{item.currency}</p>
            <p>{item.description}</p>
            <p>{item.itemCategory}</p>
<img src={item.imageJuris} alt="" />
            </div>
        ))}
      </div>
    </div>
  );
};

export { InfomationGetDetail };
