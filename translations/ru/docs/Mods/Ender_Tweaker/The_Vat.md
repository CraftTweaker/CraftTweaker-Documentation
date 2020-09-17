# Ват

## Пакет

`импорт mods.enderio.Vat;`

## Метод

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) output** - выходная жидкость (правый резерв).

**[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) input** - входная жидкость (левая резервуара).

**[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] slot1Solids** - Предметы, которые могут пойти в слот 1.

**float[] slot1Mults** - Множители для предметов в ячейке 1. Должно быть той же длины, что и в случае с твердыми веществами.

**[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] slot2Solids** - Предметы, которые могут быть в ячейке 2.

**float[] slot2Mults** - Множители для предметов в ячейке 2. Должно быть той же длины, что и слоты.

**@Optional int energyCost** - Сколько ПЭ рецепта используется. По умолчанию 5000.

## Сложение

```zenscript
mods.enderio.Vat.addRecipe(ILiquidStack output, ILiquidStack input, IIngredient[] slot1Solids, float[] slot1Mults, IIngredient[] slot2Solids, float[] slot2Mults, @Optional int energyCost);

mods. nderio.Vat.addRecipe(<liquid:lava>, <liquid:water>, [<minecraft:glowstone_dust>], [5], [<minecraft:fire_charge>], [10], 500);
```

## Удаление

```zenscript
mods.enderio.Vat.removeRecipe(ILiquidStack);

mods.enderio.Vat.removeRecipe(<liquid:ender_distillation>);
```