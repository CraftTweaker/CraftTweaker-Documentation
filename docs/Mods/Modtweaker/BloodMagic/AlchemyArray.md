# Alchemy Array

## Package
`mods.bloodmagic.AlchemyArray`

## Addition

```
//mods.bloodmagic.AlchemyArray.addRecipe(IItemStack input, IItemStack catalyst, IItemStack output, @Optional string textureLocation);
mods.bloodmagic.AlchemyArray.addRecipe(<minecraft:stick>, <minecraft:grass>, <minecraft:diamond>, "bloodmagic:textures/models/AlchemyArrays/LightSigil.png");
mods.bloodmagic.AlchemyArray.addRecipe(<minecraft:stick>, <minecraft:grass>, <minecraft:diamond>);
```

## Removal

```
//mods.bloodmagic.AlchemyArray.removeRecipe(IItemStack input, IItemStack catalyst);
mods.bloodmagic.AlchemyArray.removeRecipe(<minecraft:redstone>, <bloodmagic:slate:3>);
```