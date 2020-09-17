# Tartarikschmiede

## Paket

`mods.bloodmagic.TartaricForge`

## Addition

```zenscript
inputs hat eine maximale Größe von 4
//mods.bloodmagic.TartaricForge.addRecipe(IItemStack Output, IItemStack[] Inputs, double minSouls, double soulDrain);
mods. loodmagic.TartaricForge.addRecipe(<minecraft:diamond>,[<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 10,10);
```

## Entfernen

```zenscript
inputs hat eine maximale Größe von 4
//mods.bloodmagic.TartaricForge.removeRecipe(IItemStack[] Eingabe);
mods.bloodmagic.TartaricForge.removeRecipe([<minecraft:ghast_tear>,<minecraft:feather>, <minecraft:feather>]);
```