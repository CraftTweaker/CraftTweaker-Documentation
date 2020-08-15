# Миллстоун

## Пакет
`import mods.stone_age.MillstoneManager;`

## Методы
- **Имя строки** Имя Рецепта
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) ввод**
- **int activateCount** Активировать количество миллиметров
- **Группа строк** группа рецептов

## Сложение

```zenscript
<recipetype:stone_age:millstone>.addRecipe(String name, IItemStack, IIngredient input, int activateCount, @OptionalString String)

<recipetype:stone_age:millstone>ddRecipe("сахар", <item:minecraft:sugar>, <item:minecraft:sugar_cane>, 2, "еда");
MillstoneManager.INSTANCE.addRecipe("сахар", <item:minecraft:sugar>, <item:minecraft:sugar_cane>, 2, "еда");
```
