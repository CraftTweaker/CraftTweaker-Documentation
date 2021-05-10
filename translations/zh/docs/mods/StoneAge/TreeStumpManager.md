::requiredMod[Yanny's Stone Age]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/stone-age-by-yanny}

# Tree Stump

## 所属包名
`导入 mods.stone_age.TreeStumpManager;`

## 方法
- **String name** Recipe name
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) tool**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**
- **int chopTimes** Chop times
- **String group** Recipe group

## 加

```zenscript
<recipetype:stone_age:tree_stump>.addRecipe(String name, IItemStack output, IIngredient tool, IIngredient input, int chopTimes, @OptionalString String group)

<recipetype:stone_age:tree_stump>.addRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
TreeStumpManager.INSTANCE.addRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
```
