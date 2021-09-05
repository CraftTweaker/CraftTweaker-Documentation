::requiredMod[Yanny's Stone Age]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/stone-age-by-yanny}

# Drying Rack

## 所属包名
`导入 mods.stone_age.DryingRackManager;`

## 方法
- **String name** Recipe name
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**
- **int dryingTime** Drying time in ticks
- **String group** Recipe group

## 加

```zenscript
<recipetype:stone_age:drying_rack>.addRecipe(String name, IItemStack output, IIngredient input, int dryingTime, @OptionalString String group)

<recipetype:stone_age:drying_rack>.addRecipe("dried_meat", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "foods");

DryingRackManager.INSTANCE.addRecipe("dried_meat", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "foods");
```
