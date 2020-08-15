# Массив алхимии

## Пакет

`mods.bloodmagic.AlchemyArray`

## Сложение

```zenscript
//mods.bloodmagic.AlchemyArray.addRecipe(IItemStack output, IItemStack input, IItemStack catalyst, @Optional string textureLocation);
mods.bloodmagic.AlchemyArray. ddRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:grass>, "bloodmagic:textures/models/AlchemyArrays/LightSigil.png");
mods.bloodmagic. lchemyArray.addRecipe(<minecraft:diamond>, <minecraft:stick>, <minecraft:grass>);
// создает рецепт алхимии массива с выходом алмаза. первым пунктом, помещенным в массив, является палка (входная), за которой следует трава (катализатор)
```

## Удаление

```zenscript
//mods.bloodmagic.AlchemyArray.removeRecipe(IItemStack, катализатор IItemStack);
mods.bloodmagic.AlchemyArray.removeRecipe(<minecraft:redstone>, <bloodmagic:slate:3>);
```