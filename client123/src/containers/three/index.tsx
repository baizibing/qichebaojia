import React, { Component } from 'react'
import './index.css'
import { getCity,getCitycar ,getCitycard} from '../../api/index';
 class Three extends Component<any> {
     state={
         mmmm:false,
         qqq:[],
         CityName:'',
         www:[],
         rrr:[],
         qwe:''
     }
    render() {
        let {query} = this.props.location;
        console.log(query)
        let {qqq,www,rrr} :any=this.state
        return (
            <div className='qwert'>
     {
         this.state.mmmm ? <div className='mmq' > 
         {
             qqq&&qqq.map((item:any,index:any)=>{
             return <div>
                 <span onClick={this.chengshi.bind(this,item.CityID,item.carId,item.cityId)}>{item.CityName}
                 </span>      
             </div>      
             })
         }
          {
                this.state.mmmm ? <div className='mme' >
                {
                 rrr.map((item:any,index:any)=>{
                     return <div onClick={()=>this.ooo(item.CityName)}>
                         {item.CityName}
                     </div>
                 })     
                }
                 </div> :''
             }
         </div>: ''
     }
      <div className='diyige' >可向多个商家咨询最低价，商家及时回复 </div>
      <div className='zhong'>
     <img src={query.query.qq.CoverPhoto} />
     <div className='rightright'>
     {query.query.item.AliasName}
     <span>{query.query.qq.list[0].car_name}</span>
     </div>
      </div>
      <div className='xiadexia'>
<div className='xiadexia_shang'>
<span>姓名</span> <input  />
</div>
     
<div className='xiadexia_xia'>
<span>手机</span> <input    />
</div>
    <div className='xiadexia_xia_xia'>
   <input value={this.state.qwe}  onClick={()=>this.dianji()} />

    </div>
      </div>
      {
          www&&www.map((item:any,index:number)=>{
              return <div className='niubi'>
                  {item.address}
                  <p className='discount_left'>{item.dealerShortName}</p>
                  <p className='discount_right'>{item.discount_info}</p>
              </div>
          })
      }

            </div>
        )
    }
    ooo(nnn:any){
        this.setState({
            qwe:nnn
        }) 
    }
    dianji(){
this.setState({
     mmmm:!this.state.mmmm
})
    }
    componentDidMount(){
        getCity().then((res)=>{
            console.log(res)
          this.setState({
              qqq:res
          })
        })
    }
    chengshi(name:any,carId:any,cityId:any){     
        let {query} = this.props.location;
         console.log(name)
       this.setState({CityName:name})
       getCitycar(name,query.item.car_id).then((res)=>{
        console.log(res.list)
        this.setState({
   www:res.list
        })
    })
    getCitycard(name).then((res)=>{
        console.log(res)
        this.setState({
            rrr:res
        })
    })
   
    }
    
}
export default Three;