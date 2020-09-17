# Механический Бассейн

Этот пакет позволяет модифицировать рецепты для Механического Сушильного бассейна.

## Импорт пакета

Если вы хотите импортировать этот пакет, перейдите здесь:

```zenscript
import mods.integrateddynamics.MechanicalDryingBasin;
```

## Добавление рецептов

```zenscript
//MechanicalDryingBasin.addRecipe(@Optional IItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);

MechanicalDryingBasin. ddRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10);
```

## Удаление рецептов

```zenscript
//MechanicalDryingBasin.removeRecipe(@Optional IItemStack inputStack, @Optional ILiquidStack inputFluid, @Optional IItemStack outputStack, @Optional ILiquidStack outputFluid, @Optional(10) int duration);
MechanicalDryingBasin. emoveRecipe(<minecraft:melon>, <liquid:lava> * 100, <minecraft:stick>, <liquid:water> * 100, 10);


//MechanicalDryingBasin. emoveRecipesWithOutput(@Optional IItemStack, @Optional ILiquidStack outputFluid);
MechanicalDryingBasin.removeRecipesWithOutput(<minecraft:leather>, null);
```