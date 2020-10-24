# Tartaric Forge

## Package

`mods.bloodmagic.TartaricForge`

## Addition

```zenscript
inputs has a max size of 4
//mods.bloodmagic.TartaricForge.addRecipe(IItemStack output, IItemStack[] inputs, double minSouls, double soulDrain);
mods.bloodmagic.TartaricForge.addRecipe(<minecraft:diamond>,[<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 10,10);
```

## Removal

```zenscript
inputs has a max size of 4
//mods.bloodmagic.TartaricForge.removeRecipe(IItemStack[] inputs);
mods.bloodmagic.TartaricForge.removeRecipe([<minecraft:ghast_tear>,<minecraft:feather>, <minecraft:feather>]);
```