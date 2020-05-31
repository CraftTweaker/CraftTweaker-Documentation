# Millstone

## Package
`import mods.stone_age.MillstoneManager;`

## Methods
- **String name** Recipe name
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**
- **int activateCount** Activate millstone count
- **String group** Recipe group

## Addition

```zenscript
mods.stone_age.MillstoneManager.addRecipe(String name, IItemStack output, IIngredient input, int activateCount, @OptionalString String group)

mods.stone_age.MillstoneManager.addRecipe("sugar", <minecraft:sugar>, <minecraft:sugar_cane>, 2, "foods");
```
