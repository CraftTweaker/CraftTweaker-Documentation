# 附魔加成

[附魔加插](https://minecraft.curseforge.com/projects/enchanting-plus) 允许玩家更多地控制附魔体验。 CraftTinventer 可以用来对此mot 施加某些限制。

# 黑名单项目

阻止特定项目进入高级附魔台。

```zenscript
// mods.eplus.Eplus.blacklistItem(ItemStack item);
mods.epplus.Eplus.blacklistItem(<minecraft:chainmail_helmet>);
```

# 黑名单附件

阻止特定的附魔在高级附魔桌上应用。

```zenscript
// mods.eplus.Eplus.blacklistEnchantment(IEnchantmentDefinition enchantment);
mods.eplus.Eplus.blacklistEnchantment(<enchantment:minecraft:protection>);
```