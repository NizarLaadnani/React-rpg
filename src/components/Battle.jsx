import { useState } from 'react'
import { calcStats } from '../utils/stats.js'

function damageFor(character) {
  const stats = calcStats(character)
  switch (character.class) {
    case 'guerrier':
      return Math.round(stats.strength * 2)
    case 'mage':
      return Math.round(stats.magic * 2)
    case 'archer':
      return Math.round(stats.agility * 1.5)
    case 'voleur':
      return Math.round(stats.agility * 1.2 + stats.strength)
    default:
      return stats.strength
  }
}

export default function Battle({ characters }) {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [log, setLog] = useState([])

  function startBattle() {
    const first = characters.find((c) => c.id === Number(a))
    const second = characters.find((c) => c.id === Number(b))
    if (!first || !second || first === second) return
    let lifeA = calcStats(first).life
    let lifeB = calcStats(second).life
    const actions = []
    let attacker = first
    while (lifeA > 0 && lifeB > 0) {
      const dmg = damageFor(attacker)
      if (attacker === first) {
        lifeB -= dmg
        actions.push(`${first.name} attaque ${second.name} et inflige ${dmg}`)
        if (lifeB <= 0) {
          actions.push(`${first.name} gagne !`)
          break
        }
        attacker = second
      } else {
        lifeA -= dmg
        actions.push(`${second.name} attaque ${first.name} et inflige ${dmg}`)
        if (lifeA <= 0) {
          actions.push(`${second.name} gagne !`)
          break
        }
        attacker = first
      }
    }
    setLog(actions)
  }

  return (
    <div className="battle mt-4 rounded-lg bg-gray-800 p-4">
      <h2 className="mb-2 text-lg font-semibold">Combat</h2>
      <select
        className="mr-2 rounded border border-gray-300 p-2 text-black"
        value={a}
        onChange={(e) => setA(e.target.value)}
      >
        <option value="">Personnage 1</option>
        {characters.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      <select
        className="mr-2 rounded border border-gray-300 p-2 text-black"
        value={b}
        onChange={(e) => setB(e.target.value)}
      >
        <option value="">Personnage 2</option>
        {characters.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      <button
        className="rounded bg-red-600 px-4 py-2 font-medium text-white"
        onClick={startBattle}
      >
        Lancer
      </button>
      {log.length > 0 && (
        <ul className="log mt-4 list-disc pl-4 text-left">
          {log.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
