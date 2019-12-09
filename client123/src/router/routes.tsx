import Home from "../containers/home/index";
import deTail from '../containers/deTail'
import Three from '../containers/three'
export default [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/deTail",
    name: "deTail",
    component: deTail
  },
  {
    path: "/three",
    name: "three",
    component: Three
  }
];
