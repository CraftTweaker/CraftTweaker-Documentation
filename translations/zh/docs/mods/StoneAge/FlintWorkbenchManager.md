::requiredMod[Yanny's Stone Age]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/stone-age-by-yanny}

# Flint Workbench

## 所属包名
`导入 mods.stone_age.FlintWorkfeer；`

## 方法
- **String name** Recipe name
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] inputMatrix**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) tool** Crafting tool
- **String group** Recipe group

## 加

```zenscript
<recipetype:stone_age:flint_workbench>.addRecipe(String name, IItemStack output, IIngredient[][] inputMatrix, IIngredient tool, @OptionalString String group)

<recipetype:stone_age:flint_workbench>.addRecipe("cobblestone", <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
FlintWorkbenchManager.INSTANCE.addRecipe("cobblestone", <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
```
