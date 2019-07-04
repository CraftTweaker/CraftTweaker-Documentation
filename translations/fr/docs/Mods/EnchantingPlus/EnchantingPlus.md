# Enchanting Plus

The [Enchanting Plus](https://minecraft.curseforge.com/projects/enchanting-plus) allows players to have more control over the enchanting experience. CraftTweaker can be used to apply certain restrictions to this mod.

# Blacklisting Items

Prevents a specific item from entering the advanced enchanting table.

```java
// mods.eplus.Eplus.blacklistItem(IItemStack item);
mods.eplus.Eplus.blacklistItem(<minecraft:chainmail_helmet>);
```

# Blacklisting Enchantments

Prevents a specific enchantment from being applied at the advanced enchanting table.

```java
// mods.eplus.Eplus.blacklistEnchantment(IEnchantmentDefinition enchantment);
mods.eplus.Eplus.blacklistEnchantment(<enchantment:minecraft:protection>);
```