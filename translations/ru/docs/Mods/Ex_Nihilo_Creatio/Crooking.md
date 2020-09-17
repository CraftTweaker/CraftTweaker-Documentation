# Крюинг

## Пакет
```zenscirpt
mods.exnihilocreatio.Крук
```
## Методы

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IItemStack](/Vanilla/Items/IItemStack/) награда** предмет, который может выпасть.
- **Ледяной шанс** в диапазоне от 0 до 1.
- **Ледяной шанс** в промежутке от 0 до 1.

## Сложение

```zenscript
mods.exnihilocreatio.Crook.addRecipe(IIngredient, IItemStack, Float, Float);

mods.exnihilocreatio.Crook.addRecipe(<minecraft:log>, <minecraft:plank>, 0.25, 0.5);
```

## Удаление

```zenscript
mods.exnihilocreatio.Crook.removeAll();
```