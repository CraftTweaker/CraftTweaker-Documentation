# Empowerer

## Pacchetto

`mods.actuallyadditions.Empowerer`

## Addizione

```zenscript
mods.actuallyadditions.Empowerer.addRecipe(IItemStack output, IItemStack input, IItemStack modificier1, IItemStack modificier2, IItemStack modificier3, IItemStack modificier4, int energyPerStand, int time);
mods.actuallyadditions. mpowerer.addRecipe(IItemStack output, IItemStack input, IItemStack modificier1, IItemStack modificier2, IItemStack modificier3, IItemStack modificier4, int energyPerStand, int tempo, float[] particleColourArray);

mods. ctuallyadditions.Empowerer.addRecipe(<minecraft:iron_ingot>, <minecraft:leaves>, <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, 500, 100);
mods. ctuallyadditions.Empowerer.addRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, 500, 100, [0.5, 0.3, 0.2]);
```

## Rimozione

```zenscript
//mods.actuallyadditions.Empowerer.removeRecipe(IItemStack output);
mods.actuallyadditions.Empowerer.removeRecipe(<actuallyadditions:item_crystal_empowered:5>);
```