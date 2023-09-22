function PrintPerson({ person }) {
  return (
    <div className="card">
      {person.name}
      <img
        className="avatar-img"
        src={person.avatar}
        alt={`image of ${person.name}`}
      />
    </div>
  );
}

export { PrintPerson };
