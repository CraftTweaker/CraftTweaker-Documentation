# Empoderador

## Paquete

`mods.actuallyadditions.Empowerer`

## Adicional

```zenscript
mods.actuallyadditions.Empowerer.addRecipe(Salida ItemStack, entrada ItemStack, ItemStack modifier1, ItemStack modifier2, ItemStack modifier3, ItemStack modifier4, ItemStack modifier4, int energyPerStand, int time);
mods.actuallyadditions. mpowerer.addRecipe(IItemStack de salida, ItemStack de entrada, IIItemStack modifier1, ItemStack modifier2, ItemStack modifier3, IIItemStack modifier4, int energyPerStand, int time, float[] particleColourArray);

mods. ctuallyadditions.Empowerer.addRecipe(<minecraft:iron_ingot>, <minecraft:leaves>, <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, 500, 100);
mods. ctuallyadditions.Empowerer.addRecipe(<minecraft:gold_ingot>, <minecraft:iron_ingot>, <minecraft:redstone>, <minecraft:redstone> , <minecraft:redstone>, <minecraft:redstone>, <minecraft:redstone>, 500, 100, [0.5, 0.3, 0.2]);
```

## Eliminar

```zenscript
//mods.actuallyadditions.Empowerer.removeRecipe(IItemStack output);
mods.actuallyadditions.Empowerer.removeRecipe(<actuallyadditions:item_crystal_empowered:5>);
```