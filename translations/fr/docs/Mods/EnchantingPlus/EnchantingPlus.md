# Enchantement Plus

Le [Enchanting Plus](https://minecraft.curseforge.com/projects/enchanting-plus) permet aux joueurs d'avoir plus de contrôle sur l'expérience d'enchantement. CraftTweaker peut être utilisé pour appliquer certaines restrictions à ce mod.

# Objets sur la liste noire

Empêche un objet spécifique d'entrer dans la table d'enchantement avancée.

```zenscript
// mods.eplus.Eplus.blacklistItem(IItemStack item);
mods.eplus.Eplus.blacklistItem(<minecraft:chainmail_helmet>);
```

# Enchantements sur liste noire

Empêche un enchantement spécifique d'être appliqué à la table d'enchantement avancée.

```zenscript
// mods.eplus.Eplus.blacklistEnchantment(IEnchantmentDefinition enchantment);
mods.eplus.blacklistEnchantment(<enchantment:minecraft:protection>);
```