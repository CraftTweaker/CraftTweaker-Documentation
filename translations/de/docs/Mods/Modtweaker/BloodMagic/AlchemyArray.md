# Alchemy Array

## Package

`mods.bloodmagic.AlchemyArray`

## Addition

    //mods.bloodmagic.AlchemyArray.addRecipe(IItemStack output, IItemStack catalyst, IItemStack input, @Optional string textureLocation);
    mods.bloodmagic.AlchemyArray.addRecipe(<minecraft:diamond>, <minecraft:grass>, <minecraft:stick>, "bloodmagic:textures/models/AlchemyArrays/LightSigil.png");
    mods.bloodmagic.AlchemyArray.addRecipe(<minecraft:diamond>, <minecraft:grass>, <minecraft:stick>);
    

## Removal

    //mods.bloodmagic.AlchemyArray.removeRecipe(IItemStack input, IItemStack catalyst);
    mods.bloodmagic.AlchemyArray.removeRecipe(<minecraft:redstone>, <bloodmagic:slate:3>);