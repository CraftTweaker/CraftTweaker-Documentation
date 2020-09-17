# スターライト注入レシピ

クラフト中の輸液を追加・削除できます。

## 発信中

`mods.astalsorcery.StarlightInfusion` を使ってInfusionRecipeパッケージを呼び出すことができます。

## 削除中

This will remove the first infusion it finds that creates the provided [IItemStack](/Vanilla/Items/IItemStack/) `output`.  
If there are multiple recipes that return the provided output, you need to call this method multiple times!

```zenscript
//mods.astralsorcery.StarlightInfusion.removeInfusion(IItemStack output);
mods.astralsorcery.StarlightInfusion.removeInfusion(<minecraft:ice>);
```

## 加算

```zenscript
//mods.astralsorcery.StarlightInfusion.addInfusion(IItemStack input, IItemStack output, boolean consumeMultiple, float consumptionChance, int craftingTickTime);
mods.astralsorcery.StarlightInfusion.addInfusion(<astralsorcery:itemjournal>, <minecraft:bow>, false, 0.7, 200);
```