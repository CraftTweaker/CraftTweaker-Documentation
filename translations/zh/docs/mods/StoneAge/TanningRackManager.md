# Tanning Rack

## 所属包名
`import mods.stone_age.TanningRackManager;`

## 使用方式
- **String name** Recipe name
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) tool**
- **String group** Recipe group

## 添加配方

```zenscript
<recipetype:stone_age:tanning_rack>.addRecipe(String name, IItemStack output, IIngredient input, IIngredient tool, @OptionalString String group)

<recipetype:stone_age:tanning_rack>.addRecipe("leather", <item:minecraft:leather>, <item:minecraft:rotten_flesh>, <item:minecraft:iron_sword>, "leather");
TanningRackManager.INSTANCE.addRecipe("leather", <item:minecraft:leather>, <item:minecraft:rotten_flesh>, <item:minecraft:iron_sword>, "leather");
```
