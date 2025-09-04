import { Component } from "react";
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div>
        <div className="card-list grid grid-cols-2">
          {monsters.map((monster) => (
            <Card monster={monster} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardList;
