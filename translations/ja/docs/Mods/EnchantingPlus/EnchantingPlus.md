# エンチャントプラス

[エンチャントプラス](https://minecraft.curseforge.com/projects/enchanting-plus) を使用すると、プレイヤーはエンチャント体験をより詳細にコントロールできます。 CraftTweakerは、このMODに特定の制限を適用するために使用できます。

# アイテムをブラックリストにする

特定のアイテムが高度なエンチャントテーブルに入るのを防ぎます。

```zenscript
// mods.eplus.Eplus.blacklistItem(IItemStack item);
mods.eplus.Eplus.blacklistItem(<minecraft:chainmail_helmet>);
```

# エンチャントをブラックリストに登録

高度なエンチャントテーブルに特定のエンチャントが適用されないようにします。

```zenscript
// mods.Eplus.blacklistEnchantment(IEnchantmentDefinition enchantment);
mods.eplus.Eplus.blacklistEnchantment(<enchantment:minecraft:protection>);
```