# Летний верстак

## Пакет
`import mods.stone_age.Менеджер FlintWorkbencher;`

## Методы
- **Имя строки** Имя Рецепта
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] inputMatrix**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) инструмент** Создания
- **Группа строк** группа рецептов

## Сложение

```zenscript
<recipetype:stone_age:flint_workbench>.addRecipe(String name, IItemStack, IIngredient[][] inputMatrix, инструмент IIngredient, @OptionalString String Group)

<recipetype:stone_age:flint_workbench>ddRecipe(«Коблесток», <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
FlintWorkbenchManager.INSTANCE.addRecipe(«Коблесток»), <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
```
