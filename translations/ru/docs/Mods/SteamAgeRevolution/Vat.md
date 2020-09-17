# Vat

Vat это машина, которая преобразует входные элементы и жидкости в выходную жидкость.

## Пакет
`mods.steamagerevolution.Vat`

## Методы

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) output** Результат рецепта.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) ввод** жидкости ввода рецепта.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) inputItems** Элементы для ввода рецепта.
- **int Time** время создания машины для обработки

## Добавление

```zenscript
mods.steamagerevolution.Vat.addRecipe(ILiquidStack[] input, IIngredient[] inputItems, ILiquidStack, int craftTime);
mods.steamagerevolution.Vat.addRecipe([<liquid:tin>*144, <liquid:copper>*144], [<ore:coal>, <ore:cobblestone>], <liquid:steel>*288, 200, 200);
```

## Удаление

```zenscript
mods.steamagerevolution.Vat.removeRecipe(ILiquidStack);
mods.steamagerevolution.Vat.removeRecipe(<liquid:lava>);

mods.steamagerevolution.Vat.removeAll();
```
