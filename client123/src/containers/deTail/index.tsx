import React, { Component } from 'react'
import './index.css'
 class Chou extends Component<any> {
    state={
   
    list:[]
}
    render() {
    
      let {query} = this.props.location;
     
      console.log(query)
        return (
            <div className='qwe'>
                  <img src={query.qq.CoverPhoto} />

<div className='daa'>
<div className='tuu'>
{query.item.DealerPrice}

<div className='xunwen'>
<button>询问低价</button>
</div>



</div>
<span className='ss'>指导价{query.item.DealerPrice}</span>
<div className='zhong'>
<span>全部</span>   <span>2019</span>
</div>
<div className='xia'>
{
    query.qq.list.map((item:any,index:any)=>{
        return <div className='xia_xi'>
        <p className='xia_xi_p'>{item.max_power_str}{item.inhale_type}</p>
            <p>2019款{item.car_name}</p>
            <p>{item.max_power}{item.trans_type}</p>
            <p className='xia_you'>指导价{item.market_attribute.official_refer_price}</p>
            <div  className='dibu' onClick={this.tiao.bind(this,item)}>询问低价</div>
        </div>
    })
}
</div>
</div>
<div className='dibua'>
{query.qq.BottomEntranceTitle}

</div>
<span className='chaojidibu'>本地经销商为你报价</span>
         </div>
        )
    }
    tiao(item:any){
        let {query} = this.props.location;
        this.props.push({
            pathname:'/three',
            query:{
                 query,item 
            }
        })
    }
}
export default Chou;