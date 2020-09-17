# Verzauberung Plus

Das [Verzaubern Plus](https://minecraft.curseforge.com/projects/enchanting-plus) erlaubt es Spielern, mehr Kontrolle über das verzaubernde Erlebnis zu haben. CraftTweaker kann verwendet werden, um bestimmte Einschränkungen auf diesen Mod anzuwenden.

# Blacklisting Elemente

Verhindert die Eingabe eines bestimmten Gegenstands in den erweiterten Verzauberungstisch.

```zenscript
// mods.eplus.Eplus.blacklistItem(IItemStack item);
mods.eplus.Eplus.blacklistItem(<minecraft:chainmail_helmet>);
```

# Blacklisting Verzauberungen

Verhindert die Anwendung einer bestimmten Verzauberung am fortgeschrittenen Verzauberungstisch.

```zenscript
// mods.eplus.Eplus.blacklistEnchantment(IEnchantmentDefinition);
mods.eplus.Eplus.blacklistEnchantment(<enchantment:minecraft:protection>);
```