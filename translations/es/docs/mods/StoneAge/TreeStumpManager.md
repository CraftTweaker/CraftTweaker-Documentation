# Tree Stump

## Paquete
`import mods.stone_age.TreeStumpManager;`

## Metodos
- **String name** Recipe name
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) tool**
- **[entrada IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **int chopTimes** Chop times
- **String group** Recipe group

## Adicional

```zenscript
<recipetype:stone_age:tree_stump>.addRecipe(String name, IItemStack output, IIngredient tool, IIngredient input, int chopTimes, @OptionalString String group)

<recipetype:stone_age:tree_stump>.addRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
TreeStumpManager.INSTANCE.addRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
```
