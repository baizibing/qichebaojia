import React, { Component } from 'react'
import {connect} from 'dva'
import bScroll from 'better-scroll'
import {getroua,getdetail} from '../../api/index'
import './index.css'
import { string } from 'prop-types';

var BScroll: any = ""

class Home extends Component<any> {
   state={
       title:[],
       mmm:false,
       www:[],
       
        
   }
    render() {
   let {food:{getzuos,tou}}=this.props;
   let{ www} :any=this.state;
   console.log(www,111)
        return (
            <div className='chaoda'>
            <div className='da'>
                {
                   tou&&tou.map((it:any,ind:number)=>{
                        return <div className='lie'>
                             <h3 ref={it} key={ind}>{it}</h3>
                            {
                                getzuos&&getzuos.map((item:any,index:number)=>{
                                  if(it==item.Spelling.slice(0,1)){
                                    return <div key={index} className='da_dier'>
                                    <img src={item.CoverPhoto}  
                                    onClick={()=>this.handleMask(item.MasterID)}
     />
                                    <span>{item.Name}</span>
                                </div>
                                  }
                                 })
                            }
                        </div>
                    })
                }
                    
                   
            </div>
            <div className='right'>
                      {
                          tou&&tou.map((item:any,index:number)=>{
                              return <div key={index} onClick={() => this.Setscroll(item,tou,index)} className='tt' >{item}</div>
                          })
                      }
                </div>
            {
                this.state.mmm ? <div className='mm' > 
                {
                        www&&www.map((item:any,index:number)=>{
                         return <div className='mt' >
                                <dd>{item.GroupName}
                                    <dt>{item.GroupList.map((itt:any,inq:number)=>{
                                        return <div className='mmmq' key={inq} onClick={this.detaila.bind(this,itt)}>
                                            <img src={itt.CoverPhoto}  />
                                            <span>{itt.AliasName}</span>
                                            <span>{itt.DealerPrice}</span>
                                        </div>
                                    })}</dt>
                                    </dd>    
                         </div>    
                         })
                     }
                 </div> : ''
            }
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props)
     this.props.dispatch({type:"food/getzuo"})
     BScroll = new bScroll(".chaoda", {
        //  probeType:3,
        mouseWheel: true,
        tap: true,
        click: true
    })
    }
    Setscroll(ele: string,tou:any,index:any) {
        BScroll.scrollToElement(this.refs[ele],100)
    }
    handleMask=(MasterID:any)=>{
     getroua(MasterID).then((res)=>{
         console.log(res.data.data)
         let www=res.data.data
         this.setState({
            mmm:!this.state.mmm,
            www:res.data.data
        })
       
     })
        }
        detaila(item:any){
               console.log(item)
              let id:any= item.SerialID
               getdetail(id).then((res:any)=>{
                let qq=res
                 this.props.push({
                   pathname:'/deTail',
                   query:{
                       qq,item
                   }
               })
               })  
              
        }
       
}
      export default connect ((store:any)=>{
        return store;
})(Home);