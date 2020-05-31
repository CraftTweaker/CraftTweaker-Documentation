# Drying Rack

## Package
`import mods.stone_age.DryingRackManager;`

## Methods
- **String name** Recipe name
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**
- **int dryingTime** Drying time in ticks
- **String group** Recipe group

## Addition

```zenscript
mods.stone_age.DryingRackManager.addRecipe(String name, IItemStack output, IIngredient input, int dryingTime, @OptionalString String group)

mods.stone_age.DryingRackManager.addRecipe("dried_meat", <minecraft:cooked_mutton>, <minecraft:mutton>, 1200, "foods");
```
