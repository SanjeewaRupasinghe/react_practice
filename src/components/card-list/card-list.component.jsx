import Card from "../card/card.component";

const CardList = ({ monsters }) => (
  <div>
    <div className="card-list grid grid-cols-2">
      {monsters.map((monster) => (
        <Card monster={monster} key={monster.id}/>
      ))}
    </div>
  </div>
);

export default CardList;
