export function calcStats(char) {
  const base = char.base
  const items = Object.values(char.items || {})
  const bonus = items.reduce(
    (acc, it) => {
      if (!it) return acc
      acc.strength += it.strength || 0
      acc.agility += it.agility || 0
      acc.life += it.life || 0
      acc.magic += it.magic || 0
      return acc
    },
    { strength: 0, agility: 0, life: 0, magic: 0 },
  )
  return {
    strength: base.strength + bonus.strength,
    agility: base.agility + bonus.agility,
    life: base.life + bonus.life,
    magic: base.magic + bonus.magic,
  }
}
