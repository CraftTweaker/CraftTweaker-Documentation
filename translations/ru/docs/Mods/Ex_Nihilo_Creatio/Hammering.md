# Hammering

## Пакет
```zenscirpt
`mods.exnihilocreatio.Hammer`
```

## Методы

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) входной код** Блок должен быть нарушен.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** Блок падает при разрушении.
- **Уровень инструмента Int** уровня для разбиения блока.
- **Ледяной шанс** в диапазоне от 0 до 1.
- **Ледяной шанс** в промежутке от 0 до 1.

## Сложение

```zenscript
mods.exnihilocreatio.Hammer.addRecipe(IIngredient, IItemStack, Int, Float, Float);

mods.exnihilocreatio.Hammer.addRecipe(<minecraft:log>, <minecraft:plank>, 0, 0.25, 0.5);
```

## Удаление

```zenscript
mods.exnihilocreatio.Hammer.removeAll();
```
