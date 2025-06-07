import { useState } from 'react'
import {
  weapons,
  hats,
  boots,
  armors,
  rings,
  amulets,
} from '../data/items.js'

export default function CharacterForm({ onAdd }) {
  const [name, setName] = useState('')
  const [charClass, setCharClass] = useState('guerrier')
  const [strength, setStrength] = useState(5)
  const [agility, setAgility] = useState(5)
  const [life, setLife] = useState(20)
  const [magic, setMagic] = useState(5)

  const [weapon, setWeapon] = useState(0)
  const [hat, setHat] = useState(0)
  const [boot, setBoot] = useState(0)
  const [armor, setArmor] = useState(0)
  const [ring1, setRing1] = useState(0)
  const [ring2, setRing2] = useState(0)
  const [amulet, setAmulet] = useState(0)

  function handleSubmit(e) {
    e.preventDefault()
    onAdd({
      id: Date.now(),
      name,
      class: charClass,
      base: { strength: +strength, agility: +agility, life: +life, magic: +magic },
      items: {
        weapon: weapons[weapon],
        hat: hats[hat],
        boots: boots[boot],
        armor: armors[armor],
        ring1: rings[ring1],
        ring2: rings[ring2],
        amulet: amulets[amulet],
      },
    })
    setName('')
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Créer un personnage</h2>
      <input
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label>
        Classe
        <select value={charClass} onChange={(e) => setCharClass(e.target.value)}>
          <option value="archer">Archer</option>
          <option value="guerrier">Guerrier</option>
          <option value="mage">Mage</option>
          <option value="voleur">Voleur</option>
        </select>
      </label>
      <label>
        Force
        <input
          type="number"
          value={strength}
          onChange={(e) => setStrength(e.target.value)}
        />
      </label>
      <label>
        Agilité
        <input
          type="number"
          value={agility}
          onChange={(e) => setAgility(e.target.value)}
        />
      </label>
      <label>
        Vie
        <input type="number" value={life} onChange={(e) => setLife(e.target.value)} />
      </label>
      <label>
        Magie
        <input type="number" value={magic} onChange={(e) => setMagic(e.target.value)} />
      </label>
      <label>
        Arme
        <select value={weapon} onChange={(e) => setWeapon(e.target.value)}>
          {weapons.map((w, i) => (
            <option key={w.name} value={i}>
              {w.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Chapeau
        <select value={hat} onChange={(e) => setHat(e.target.value)}>
          {hats.map((w, i) => (
            <option key={w.name} value={i}>
              {w.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Bottes
        <select value={boot} onChange={(e) => setBoot(e.target.value)}>
          {boots.map((w, i) => (
            <option key={w.name} value={i}>
              {w.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Armure
        <select value={armor} onChange={(e) => setArmor(e.target.value)}>
          {armors.map((w, i) => (
            <option key={w.name} value={i}>
              {w.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Anneau 1
        <select value={ring1} onChange={(e) => setRing1(e.target.value)}>
          {rings.map((w, i) => (
            <option key={w.name + 1} value={i}>
              {w.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Anneau 2
        <select value={ring2} onChange={(e) => setRing2(e.target.value)}>
          {rings.map((w, i) => (
            <option key={w.name + 2} value={i}>
              {w.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Amulette
        <select value={amulet} onChange={(e) => setAmulet(e.target.value)}>
          {amulets.map((w, i) => (
            <option key={w.name} value={i}>
              {w.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Ajouter</button>
    </form>
  )
}
