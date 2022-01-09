# Millstone

## Package
`import mods.stone_age.MillstoneManager;`

## Methods
- **String name** Recipe name
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) secondOutput**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**
- **double secondChance** Chance for second output 0.0 - 1.0 (0-100%)
- **int activateCount** Activate millstone count
- **String group** Recipe group

## Addition

```zenscript
<recipetype:stone_age:millstone>.addRecipe(String name, IItemStack output, IItemStack secondOutput, IIngredient input, double secondChance, int activateCount, @OptionalString String group)

<recipetype:stone_age:millstone>.addRecipe("sugar", <item:minecraft:sugar>, <item:minecraft:sugar>, <item:minecraft:sugar_cane>, 0.2, 2, "foods");
MillstoneManager.INSTANCE.addRecipe("sugar", <item:minecraft:sugar>, <item:minecraft:sugar>, <item:minecraft:sugar_cane>, 0.2, 2, "foods");
```
