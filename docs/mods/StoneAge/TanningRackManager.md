# Tanning Rack

## Package
`import mods.stone_age.TanningRackManager;`

## Methods
- **String name** Recipe name
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) tool**
- **String group** Recipe group

## Addition

```zenscript
mods.stone_age.TanningRackManager.addRecipe(String name, IItemStack output, IIngredient input, IIngredient tool, @OptionalString String group)

mods.stone_age.TanningRackManager.addRecipe("leather", <minecraft:leather>, <minecraft:rotten_flesh>, <minecraft:iron_sword>, "leather");
```
