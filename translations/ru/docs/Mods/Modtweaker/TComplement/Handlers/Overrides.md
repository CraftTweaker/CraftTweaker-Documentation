# Переопределения

Пакет "Переопределить" используется для добавления/удаления рецептов из/в "Переопределение дымов".

## Звонок

Вы можете вызвать пакет переопределения с помощью `mods.tcomplement.Overrides`

## Переопределяет добавление записи

```zenscript
//mods.tcomplement.Overrides.addRecipe(ILiquidStack output, IItemStack input, @Optional int temp);
mods.tcomplement.Overrides.addRecipe(<liquid:gold> * 100, <minecraft:gold_ingot>);
mods.tcomplement.Overrides.addRecipe(<liquid:gold> * 100, <minecraft:gold_ingot>, 1000);
```

## Переопределяет удаление записи

```zenscript
//mods.tcomplement.Overrides.removeRecipe(ILiquidStack), @Optional IItemStack input);
mods.tcomplement.Overrides.removeRecipe(<liquid:gold>);
mods.tcomplement.Overrides.removeRecipe(<liquid:gold>, <minecraft:gold_ore>
```