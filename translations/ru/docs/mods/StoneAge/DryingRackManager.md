# Стойка для сушки

## Пакет
`import mods.stone_age.DryingRackManager;`

## Методы
- **Имя строки** Имя Рецепта
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) ввод**
- **int время сушки** Время сушки в тактах
- **Группа строк** группа рецептов

## Сложение

```zenscript
<recipetype:stone_age:drying_rack>.addRecipe(String name, IItemStack, IIngredient input, int dryingTime, @OptionalString String)

<recipetype:stone_age:drying_rack>ddRecipe("dried_meat", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "food");

DryingRackManager.INSTANCE.addRecipe("сухое мясо", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "food");
```
