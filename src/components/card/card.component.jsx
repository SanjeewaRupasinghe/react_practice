const Card = ({monster}) => {
  const { id, name, email } = monster;

  return (
    <div className="card-container m-2 max-w-xs rounded-lg overflow-hidden shadow-lg">
      <img
        src={`https://robohash.org/${id}?set=set1&size=300x300`}
        alt={`monster ${name}`}
      />
      <h3>{name}</h3>
      <h5>{email}</h5>
    </div>
  );
};

export default Card;
