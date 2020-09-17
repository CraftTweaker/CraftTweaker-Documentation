# Alchemie-Array

## Paket

`mods.bloodmagic.AlchemyArray`

## Addition

```zenscript
//mods.bloodmagic.AlchemyArray.addRecipe(IItemStack Output, IItemStack Input, IItemStack catalyst, @Optional string textureLocation);
mods.bloodmagic.AlchemyArray. ddRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:grass>, "bloodmagic:textures/models/AlchemyArrays/LightSigil.png");
mods.bloodmagic. lchemyArray.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:grass>);
// erzeugt ein Alchemie-Array-Rezept mit der Ausgabe von Diamanten. das erste Element im Array ist der Stock (der Eingang), gefolgt von dem Gras (der Katalysator)
```

## Entfernen

```zenscript
//mods.bloodmagic.AlchemyArray.removeRecipe(IItemStack Input, IItemStack catalyst);
mods.bloodmagic.AlchemyArray.removeRecipe(<minecraft:redstone>, <bloodmagic:slate:3>);
```