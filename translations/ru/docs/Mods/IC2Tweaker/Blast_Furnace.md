# Доменная печь

## Пакет

`import mods.ic2.BlastFurnace;`

## Методы

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) ввод**
- **int totalFluidCost** per tick IC2 сжиженный воздух, измеряемый в mB/tick
- **int time** Общая стоимость времени, измеренная в тактах

## Сложение

```zenscript
mods.ic2.BlastFurnace.addRecipe(IItemStack[] Выход, IIngredient input, int totalFluidCost, int time);

mods.ic2.BlastFurnace.addRecipe([<minecraft:diamond>, <minecraft:emerald>], <minecraft:dirt> * 64, 1, 1000);
```

## Удаление

Теперь просто удалите соответствующую строку в `config/ic2/blast_furnace.ini`.