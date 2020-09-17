# Сжатие

Этот пакет позволяет модифицировать рецепты для Squeezer.

## Импорт пакета

Если вы хотите импортировать этот пакет, перейдите здесь:

```zenscript
import mods.integrateddynamics.Squeezer;
```

## Добавление рецептов

```zenscript
//Squeezer.addRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
Squeezer.addRecipe(<minecraft:melon>, <minecraft:stick>, <liquid:water> * 100);



//Squeezer. ddRecipe(IItemStack inputStack, 
// @Optional IItemStack outputStack1, @Optional float outputStackChance1,
// @Optional IItemStack outputStack2, @Optional float outputStackChance2,
// @Optional IItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid);


Ужасающий. ddRecipe(<minecraft:pumpkin>, 
    <minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100);
```

## Удаление рецептов

```zenscript
//Squeezer.removeRecipe(IItemStack inputStack, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid);
//TODO

//Squeezer. emoveRecipe(IItemStack inputStack,
// @Optional IItemStack outputStack1, @Optional float outputStackChance1,
// @Optional IItemStack outputStack2, @Optional float outputStackChance2,
// @Optional IItemStack outputStack3, @Optional float outputStackChance3,
// Optional ILiquidStack outputFluid);

Ужасающий. emoveRecipe(<minecraft:pumpkin>, 
    <minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100);



//Сжатие. emoveRecipesWithOutput(@Optional IItemStack, @Optional ILiquidStack outputFluid);
Squeezer.removeRecipesWithOutput(<minecraft:pumpkin_seeds>, <liquid:water>);

//Squeezer. emoveRecipesWithOutput(@Optional IItemStack outputStack1, @Optional float outputStackChance1,
// @Optional IItemStack outputStack2, @Optional float outputStackChance2,
// @Optional IItemStack outputStack3, @Optional float outputStackChance3,
// @Optional ILiquidStack outputFluid);

Ужасающий. emoveRecipesWithOutput(<minecraft:pumpkin_seeds>, 0.2,
    <minecraft:iron_nugget>, 0. 1,
    <minecraft:cactus>, 0.5,
    <liquid:water> * 100);
```