# Пень дерева

## Пакет
`import mods.stone_age.TreeStumpManager;`

## Методы
- **Имя строки** Имя Рецепта
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ингредиент](/Vanilla/Variable_Types/IIngredient/) инструмент**
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) ввод**
- **int chopTimes** Chop раз
- **Группа строк** группа рецептов

## Сложение

```zenscript
<recipetype:stone_age:tree_stump>.addRecipe(String name, IItemStack, IIngredient tool, IIngredient input, int chopTimes, @OptionalString String group)

<recipetype:stone_age:tree_stump>ddRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
TreeStumpManager.INSTANCE.addRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
```
