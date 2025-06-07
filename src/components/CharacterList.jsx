export default function CharacterList({ characters, onSelect }) {
  if (characters.length === 0) return <p>Aucun personnage</p>
  return (
    <ul className="list">
      {characters.map((c) => (
        <li key={c.id} onClick={() => onSelect(c.id)}>
          {c.name}
        </li>
      ))}
    </ul>
  )
}
