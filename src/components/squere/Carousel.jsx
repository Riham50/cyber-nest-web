import React from "react";
import Carousel3d from "./Carousel3d";
import { Card } from "antd";

const imgWrapper = [
  "https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png",
  "https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png",
  "https://zos.alipayobjects.com/rmsportal/QJmGZYJBRLkxFSy.png",
  "https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png",
  "https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png",
  "https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png",
];

const Carousel = () => {
  const children = imgWrapper.map((src, i) => (
    <Card key={i.toString()} cover={<img src={src} />}>
      <p>Hello</p>
    </Card>
  ));
  return (
    <div className="carousel-demo-wrapper">
      <Carousel3d className="carousel-demo" childMaxLength={6}>
        {children}
      </Carousel3d>
    </div>
  );
};

export default Carousel;
