# Encantador Plus

El [Encantador Plus](https://minecraft.curseforge.com/projects/enchanting-plus) permite a los jugadores tener más control sobre la experiencia de encantamiento. CraftTweaker puede ser usado para aplicar ciertas restricciones a este mod.

# Lista negra de objetos

Evita que un objeto específico entre en la mesa de encantamiento avanzada.

```zenscript
// mods.eplus.Eplus.blacklistItem(IItemStack item);
mods.eplus.Eplus.blacklistItem(<minecraft:chainmail_helmet>);
```

# Encantamientos de lista negra

Evita que se aplique un encantamiento específico en la mesa de encantamiento avanzada.

```zenscript
// mods.eplus.Eplus.blacklistEnchantment(EnchantmentDefinition enchantment);
mods.eplus.Eplus.blacklistEnchantment(<enchantment:minecraft:protection>);
```