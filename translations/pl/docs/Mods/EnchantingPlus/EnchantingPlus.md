# Zaklinanie Plus

[Zaklęcie Plus](https://minecraft.curseforge.com/projects/enchanting-plus) pozwala graczom na większą kontrolę nad doświadczeniem zaklęcia. CraftTweaker może być używany do stosowania pewnych ograniczeń dla tego modu.

# Elementy na czarnej liście

Zapobiega wchodzeniu określonego elementu do zaawansowanej tablicy zaklęć.

```zenscript
// mods.eplus.Eplus.blacklistItem(element IItemStack);
mods.eplus.Eplus.blacklistItem(<minecraft:chainmail_helmet>);
```

# Zaklęcia na czarnej liście

Zapobiega stosowaniu określonego zaklęcia w zaawansowanej tabeli zaklęć.

```zenscript
// mods.eplus.Eplus.blacklistEnchantment(IEnchantmentDefinition enchantment);
mods.eplus.Eplus.blacklistEnchantment(<enchantment:minecraft:protection>);
```