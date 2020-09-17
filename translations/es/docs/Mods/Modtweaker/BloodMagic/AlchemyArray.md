# Arreglo de Alquimia

## Paquete

`mods.bloodmagic.AlchemyArray`

## Adicional

```zenscript
//mods.bloodmagic.AlchemyArray.addRecipe(ItemStack de salida, ItemStack de entrada, ItemStack catalyst, @Optional string textureLocation);
mods.bloodmagic.AlchemyArray. ddRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:grass>, "bloodmagic:textures/models/AlchemyArrays/LightSigil.png");
mods.bloodmagic. lchemyArray.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:grass>);
// crea una receta de matriz de alquimia con la salida de diamante. el primer elemento colocado en la matriz es el palo (la entrada), seguido por el césped (el catalizador)
```

## Eliminar

```zenscript
//mods.bloodmagic.AlchemyArray.removeRecipe(Entrada ItemStack, ItemStack catalyst);
mods.bloodmagic.AlchemyArray.removeRecipe(<minecraft:redstone>, <bloodmagic:slate:3>);
```