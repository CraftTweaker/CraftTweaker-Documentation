# Tartaric Forge

## パッケージ

`mods.bloodmagic.TartaricForge`

## 加算

```zenscript
inputs has a max size of 4
//mods.bloodmagic.TartaricForge.addRecipe(IItemStack output, IItemStack[] inputs, double minSouls, double soulDrain);
mods.bloodmagic.TartaricForge.addRecipe(<minecraft:diamond>,[<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 10,10);
```

## 削除

```zenscript
inputs has a max size of 4
//mods.bloodmagic.TartaricForge.removeRecipe(IItemStack[] inputs);
mods.bloodmagic.TartartaricForge.removeRecipe([<minecraft:ghast_tear>,<minecraft:feather>, <minecraft:feather>]);
```