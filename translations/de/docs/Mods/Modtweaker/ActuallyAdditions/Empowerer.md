# Ermächtiger

## Paket

`mods.actuallyadditions.Empowerer`

## Addition

```zenscript
mods.actuallyadditions.Empowerer.addRecipe(IItemStack Output, IItemStack Input, IItemStack modifier1, IItemStack modifier2, IItemStack modifier3, IItemStack modifier4, int energyPerStand, int time);
mods.actuallyadditions. mpowerer.addRecipe(IItemStack Output, IItemStack Input, IItemStack modifier1, IItemStack modifier2, IItemStack modifier3, IItemStack modifier4, int energyPerStand, int time, float[] particleColourArray);

mods. ctuallyadditions.Empowerer.addRecipe(<minecraft:iron_ingot>, <minecraft:leaves>, <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, 500, 100);
Mods. ctuallyadditions.Empowerer.addRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, 500, 100, [0.5, 0.3, 0.2]);
```

## Entfernen

```zenscript
//mods.actuallyadditions.Empowerer.removeRecipe(IItemStack output);
mods.actuallyadditions.Empowerer.removeRecipe(<actuallyadditions:item_crystal_empowered:5>);
```