export default function CharacterList({ characters, onSelect }) {
  if (characters.length === 0) return <p>Aucun personnage</p>
  return (
    <ul className="list mt-2 grid grid-cols-2 gap-2">
      {characters.map((c) => (
        <li
          className="rounded bg-gray-700 p-2 text-center hover:bg-gray-600"
          key={c.id}
          onClick={() => onSelect(c.id)}
        >
          {c.name}
        </li>
      ))}
    </ul>
  )
}
