# Tanning Rack

## Пакет
`import mods.stone_age.TanningRackManager;`

## Методы
- **String name** Recipe name
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) ввод**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) tool**
- **String group** Recipe group

## Сложение

```zenscript
<recipetype:stone_age:tanning_rack>.addRecipe(String name, IItemStack output, IIngredient input, IIngredient tool, @OptionalString String group)

<recipetype:stone_age:tanning_rack>.addRecipe("leather", <item:minecraft:leather>, <item:minecraft:rotten_flesh>, <item:minecraft:iron_sword>, "leather");
TanningRackManager.INSTANCE.addRecipe("leather", <item:minecraft:leather>, <item:minecraft:rotten_flesh>, <item:minecraft:iron_sword>, "leather");
```
