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
<recipetype:stone_age:flint_workbench>.addRecipe(String name, IItemStack output, IIngredient[][] inputMatrix, IIngredient tool, @OptionalString String group)

<recipetype:stone_age:flint_workbench>.addRecipe("cobblestone", <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
FlintWorkbenchManager.INSTANCE.addRecipe("cobblestone", <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
```
