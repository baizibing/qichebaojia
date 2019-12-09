import {getzuoa} from '../../api/index'
export default {
  namespace: "food",
  state: {
    getzuos:[],
    tou:[]
  },
  reducers: {
    shuzu(store:any,payload:any){
      store.getzuos=payload.data
      let tou:any=[]
      payload.data.map((item:any,index:any)=>{
           tou.push(item.Spelling.slice(0,1))
      })
      tou=Array.from(new Set(tou))
      store.tou=tou
      return {
        ...store
      }
    },
  },
  effects: {
    *getzuo(action: any, payload: any) {
     let {call,put}=payload
     let zuobian=yield call(getzuoa)
     yield put({ type: "shuzu", data:zuobian});
    },
   
  }
};
