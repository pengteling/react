import React from 'react';
import ReactDOM from 'react-dom';

// export default class ItemList extends React.Component{
//   constructor(props){
//     super(props)
//   }
//   render(){
//
//     return(
//       <div>
//         {
//           this.props.items.map((v,i)=>{
//               return <div key={i}>{i}-{v}</div>
//           })
//         }
//       </div>
//     )
//   }
// }


export default function ItemList(props) {
  return(
    <div>
    {
      props.items.map((v,i)=>{
        return <div key={i} className="item">{i}-{v}</div>
      })
    }
    </div>
  )

}
