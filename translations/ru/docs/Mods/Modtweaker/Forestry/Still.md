# Ещё

ModTweaker позволяет добавлять или удалять лесные рецепты

## Звонок

Вы можете позвонить пакету, используя `mods.forestry.Still`

## Удаление рецепта

```zenscript
//mods.forestry.Still.removeRecipe(ILiquidStack), @Optional ILiquidStack fluidInput;
mods.forestry.Still.removeRecipe(<liquid:bio.ethanol>);
mods.forestry.Still.removeRecipe(<liquid:refinedcanolaoil>,<liquid:canolaoil>
```

## Добавление рецепта

```zenscript
//mods.forestry.Still.addRecipe(ILiquidStack fluidOutput, ILiquidStack fluidInput, int timePerUnit);
mods.forestry.Still.addRecipe(<liquid:lava>, <liquid:water>, 200);
```