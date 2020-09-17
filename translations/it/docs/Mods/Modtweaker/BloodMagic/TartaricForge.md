# Forgia Tartarica

## Pacchetto

`mods.bloodmagic.TartaricForge`

## Addizione

```zenscript
gli input hanno una dimensione massima di 4
//mods.bloodmagic.TartaricForge.addRecipe(IItemStack output, IItemStack[] inputs, double minSouls, double soulDrain);
mods. loodmagic.TartaricForge.addRecipe(<minecraft:diamond>,[<minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>, <minecraft:dirt>], 10,10);
```

## Rimozione

```zenscript
gli input hanno una dimensione massima di 4
//mods.bloodmagic.TartaricForge.removeRecipe(IItemStack[] inputs);
mods.bloodmagic.TartaricForge.removeRecipe([<minecraft:ghast_tear>,<minecraft:feather>, <minecraft:feather>]);
```