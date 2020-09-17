# Танкерка

## Пакет
`import mods.stone_age.TanningRackManager;`

## Методы
- **Имя строки** Имя Рецепта
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) ввод**
- **[Ингредиент](/Vanilla/Variable_Types/IIngredient/) инструмент**
- **Группа строк** группа рецептов

## Сложение

```zenscript
<recipetype:stone_age:tanning_rack>.addRecipe(String name, IItemStack, Ingredient input, IIngredient tool, @OptionalString String)

<recipetype:stone_age:tanning_rack>ddRecipe("кожа", <item:minecraft:leather>, <item:minecraft:rotten_flesh>, <item:minecraft:iron_sword>, "кожа");
TanningRackManager.INSTANCE.addRecipe("кожа"), <item:minecraft:leather>, <item:minecraft:rotten_flesh>, <item:minecraft:iron_sword>, "кожа");
```
