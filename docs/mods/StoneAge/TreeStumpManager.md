# Drying Rack

## Package
`import mods.stone_age.TreeStumpManager;`

## Methods
- **String name** Recipe name
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) tool**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**
- **int chopTimes** Chop times
- **String group** Recipe group

## Addition

```zenscript
mods.stone_age.TreeStumpManager.addRecipe(String name, IItemStack output, IIngredient tool, IIngredient input, int chopTimes, @OptionalString String group)

mods.stone_age.TreeStumpManager.addRecipe("oak_planks", <minecraft:oak_planks>, <minecraft:iron_axe>, <minecraft:oak_log>, 2);
```
