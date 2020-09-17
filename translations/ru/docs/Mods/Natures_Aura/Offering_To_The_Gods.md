# Оказание богам

## Пакет
```zenscript
mods.naturesaura.Предложение
```

## Методы
- **Название строки**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) входной** Предложение
- **int inputAmount** Количество элементов, необходимых для ввода. Обратите внимание, что это означает, что значение входной переменной игнорируется
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) startItem** предмет, необходимый для начала предложения
- **[IItemStack](/Vanilla/Items/IItemStack) выход** Подарок Предложения

## Сложение

```zenscript
mods.naturesaura.Offering.addRecipe(String name, Igredient input, int inputAmount, IIngredient startItem, IItemStack output)
```

## Удаление

```zenscript
mods.naturesaura.Предложение .removeRecipe(Выходной IItemStack)
```