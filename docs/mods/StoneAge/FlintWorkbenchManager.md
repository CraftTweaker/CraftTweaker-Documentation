# Flint Workbench

## Package
`import mods.stone_age.FlintWorkbenchManager;`

## Methods
- **String name** Recipe name
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] inputMatrix**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) tool** Crafting tool
- **String group** Recipe group

## Addition

```zenscript
mods.stone_age.FlintWorkbenchManager.addRecipe(String name, IItemStack output, IIngredient[][] inputMatrix, IIngredient tool, @OptionalString String group)

mods.stone_age.FlintWorkbenchManager.addRecipe("cobblestone", <minecraft:cobblestone>, [[<minecraft:dirt>, <minecraft:dirt]], <minecraft:emerald>);
```
