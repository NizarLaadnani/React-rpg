import { calcStats } from '../utils/stats.js'

export default function CharacterDetails({ character }) {
  if (!character) return null
  const stats = calcStats(character)
  return (
    <div className="details mt-4 rounded-lg bg-gray-700 p-4">
      <h3 className="mb-2 text-lg font-semibold">{character.name}</h3>
      <p>Classe: {character.class}</p>
      <p>Force: {stats.strength}</p>
      <p>Agilité: {stats.agility}</p>
      <p>Vie: {stats.life}</p>
      <p>Magie: {stats.magic}</p>
    </div>
  )
}
