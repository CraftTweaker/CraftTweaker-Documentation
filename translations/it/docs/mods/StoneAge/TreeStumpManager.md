# Tree Stump

## Pacchetto
`import mods.stone_age.TreeStumpManager;`

## Metodi
- **String name** Recipe name
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) tool**
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **int chopTimes** Chop times
- **String group** Recipe group

## Addizione

```zenscript
<recipetype:stone_age:tree_stump>.addRecipe(String name, IItemStack output, IIngredient tool, IIngredient input, int chopTimes, @OptionalString String group)

<recipetype:stone_age:tree_stump>.addRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
TreeStumpManager.INSTANCE.addRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
```
