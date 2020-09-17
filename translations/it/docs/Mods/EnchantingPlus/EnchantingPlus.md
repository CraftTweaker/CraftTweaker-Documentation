# Incantesimi Plus

L' [Enchanting Plus](https://minecraft.curseforge.com/projects/enchanting-plus) permette ai giocatori di avere più controllo sull'esperienza incantevole. CraftTweaker può essere utilizzato per applicare alcune restrizioni a questo mod.

# Oggetti Blacklist

Impedisce a un oggetto specifico di entrare nella tabella incantevole avanzata.

```zenscript
// mods.eplus.Eplus.blacklistItem(IItemStack item);
mods.eplus.Eplus.blacklistItem(<minecraft:chainmail_helmet>);
```

# Incantesimi Della Blacklist

Impedisce che un incantesimo specifico venga applicato al tavolo incantevole avanzato.

```zenscript
// mods.eplus.Eplus.blacklistEnchantment(IEnchantmentDefinition enchantment);
mods.eplus.Eplus.blacklistEnchantment(<enchantment:minecraft:protection>);
```