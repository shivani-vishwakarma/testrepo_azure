//-->   -----------------------------Function Component-------------------------------<---
import './card-list.styles.css';
import './card.styles.css';
import Card from "../card/card.component";
const CardList = ({ monsters }) => ( //implicit return
    <div className="card-list">
      {monsters.map((monster) => {
        //console.log(monster);
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
export default CardList;


//-->   -----------------------------Class Component-------------------------------<---

// import { Component } from "react";
// import './card-list.styles.css';
// import './card.styles.css';
// import Card from "../card/card.component";

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//             return (
//                 <Card monster={monster}/>
//             )
//         })}
//       </div>
//     );
//   }
// }
// export default CardList;
