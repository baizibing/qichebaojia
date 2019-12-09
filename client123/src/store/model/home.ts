import {getroua} from '../../api/index'
export default {
  namespace: "home",
  state: {
    data: 123
  },
  
  reducers: {
    shuzu(store:any,payload:any){
      store.getzuos=payload.data
      return {
        ...store
      }
  },
},
  effects: {
    *getrou(action: any, payload: any) {
      let {call,put}=payload
      let roubian=yield call(getroua)
      yield put({ type: "shuzu", data:roubian});
     },
  }
};
