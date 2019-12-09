import React from "react";
import Routes from "./routes";
import RouterMap from "./map";

function RootRouter(props: any) {
  const routes = props.routes ? props.routes : Routes; //首先给个变量   如果有这个props.routes 这个的话 就走props.routes 没有就走  引过来的Routes
  return <RouterMap routes={routes} {...props}></RouterMap>; //出口组件  RouterMap
}
export default RootRouter;
