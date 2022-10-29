import React from "react";

import { Main } from "../layout/Main";
import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { NextPage } from "next";
import { TableInfoList } from "../components/index";




const Index: NextPage = () => {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
  
   <TableInfoList></TableInfoList>

    </Main>
  );
};

export default Index;
