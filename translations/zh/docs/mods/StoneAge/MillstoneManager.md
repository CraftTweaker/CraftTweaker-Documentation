# Millstone

## 所属包名
`import mods.stone_age.MillstoneManager;`

## 使用方式
- **String name** Recipe name
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**
- **int activateCount** Activate millstone count
- **String group** Recipe group

## 添加配方

```zenscript
<recipetype:stone_age:millstone>.addRecipe(String name, IItemStack output, IIngredient input, int activateCount, @OptionalString String group)

<recipetype:stone_age:millstone>.addRecipe("sugar", <item:minecraft:sugar>, <item:minecraft:sugar_cane>, 2, "foods");
MillstoneManager.INSTANCE.addRecipe("sugar", <item:minecraft:sugar>, <item:minecraft:sugar_cane>, 2, "foods");
```
