# Компостинг

## Пакет
```zenscript
mods.exnihilocreatio.Compost
```

## Методы

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **Шанс плавающего** Шанс должен быть от 0 до 1.
- **Цвет строки** Цвет шестнадцатеричный.
- **[IItemStack](/Vanilla/Items/IItemStack/) output** Результат рецепта.

## Сложение

Не принимает массивы для IIngredient.

```zenscript
mods.exnihilocreatio.Compost.addRecipe(IIngredient, Float chance, String color, IItemStack);

mods.exnihilocreatio.Compost.addRecipe(<ore:woodPlank>, 0.25, "63452D", <minecraft:log>);
```

## Удаление

```zenscript
Compost.removeAll();
```