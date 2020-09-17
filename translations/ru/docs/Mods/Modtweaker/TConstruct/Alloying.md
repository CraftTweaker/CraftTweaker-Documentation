# Сплав

Пакет `сплава` позволяет добавлять или удалять рецепты сплава.

## Звонок

Вы можете вызвать пакет Alloy, используя `mods.tconstruct.Alloy`

## Добавить рецепты сплава

```zenscript
//mods.tconstruct.Alloy.addRecipe(ILiquidStack, вывод ILiquidStack[]);
mods.tconstruct.Alloy.addRecipe(<liquid:water> * 10, [<liquid:lava> * 10, <liquid:molten_iron> * 5]);
```

## Удаление рецептов сплава

```zenscript
//mods.tconstruct.Alloy.removeRecipe(ILiquidStack);
mods.tconstruct.Alloy.removeRecipe(<liquid:water>);

//mods.tconstruct.Alloy.removeRecipe(ILiquidStack output, ILiquidStack[] inputs);
mods.tconstruct.Alloy.removeRecipe(<liquid:water>, [<liquid:lava>, <liquid:molten_iron>]);
```