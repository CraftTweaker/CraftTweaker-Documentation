# Преобразование элемента в газ

По данным Меканизма 9.7.5, в различных машинах теперь можно использовать индивидуальный предмет для преобразования газа.

Если вы хотите изменить любое из значений встроенных в конверсии, рекомендуется сначала удалить конверсию и затем добавить ее обратно, а не перезаписывать ее. Это обеспечивает правильное удаление всех данных как в 9.7. не имеет указанного выхода/обработки того, что происходит, когда элемент перечисляется дважды.

## Сложение

```zenscript
mods.mekanism.GasConversion.register(IIngredient ingredient, IGasStack gas);

mods.mekanism.GasConversion.register(<ore:sand>, <gas:liquidosmium> * 100);
```

## Удаление

```zenscript
mods.mekanism.GasConversion.unregister(IIngredient ingredient, IGasStack gas);

mods.mekanism.GasConversion.unregister(<ore:ingotOsmium>, <gas:liquidosmium>);
```

## Удаление всех преобразований

```zenscript
mods.mekanism.GasConversion.unregisterAll();
```