# Ритуал Леса

## Пакет
```zenscript
mods.naturesaura.TreeRitual
```

## Методы
- **Название строки**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) саженца** Представление саженца, которое необходимо разместить и выросло в дерево
- **[IItemStack](/Vanilla/Items/IItemStack) вывод** Результат ритуалов
- **init время** Время, которое занимает процесс в тактах
- **[IIngredient[]](/Vanilla/Variable_Types/IIngredient) элементов** Необходимые предметы для ритуала

## Сложение

```zenscript
mods.naturesaura.TreeRitual.addRecipe(String name, IIngredient saplingType, IItemStack output, int time, IIngredient[] items)
```

## Удаление

```zenscript
mods.naturesaura.TreeRitual.removeRecipe(IItemStack output)
```