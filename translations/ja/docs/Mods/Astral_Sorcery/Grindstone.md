# Grindstone

CrTを使用して、AS研削石からレシピを追加または削除できます。

## 発信中

`mods.astalsorcery.Grindstone` を使って InfusionRecipe パッケージを呼び出すことができます。

## 削除中

This will remove the first grinding recipe it finds that creates the provided [IItemStack](/Vanilla/Items/IItemStack/) `output`.  
If there are multiple recipes that return the provided output, you need to call this method multiple times!

```zenscript
//mods.astralsorcery.Grindstone.removeRecipe(IItemStack output);
mods.astralsorcery.Grindstone.removeRecipe(<minecraft:redstone>);
```

## 加算

```zenscript
//mods.astralsorcery.Grindstone.addRecipe(IItemStack input, IItemStack output);
mods.astralsorcery.Grindstone.addRecipe(<minecraft:stone>, <minecraft:gravel>);

//mods.astralsorcery.Grindstone.addRecipe(IItemStack input, IItemStack output, float doubleChance);
mods.astralsorcery.Grindstone.addRecipe(<minecraft:cobblestone>, <minecraft:gravel>, 0.5f);
```