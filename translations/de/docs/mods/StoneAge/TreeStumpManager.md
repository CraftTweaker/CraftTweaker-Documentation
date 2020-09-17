# Baumstumpf

## Paket
`import mods.stone_age.TreeStumpManager;`

## Methoden
- **Zeichenkettenname** Rezeptname
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Werkzeug**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Eingabe**
- **int chopTimes** Chop Zeiten
- **Zeichenkettengruppe** Rezeptgruppe

## Addition

```zenscript
<recipetype:stone_age:tree_stump>.addRecipe(String name, IItemStack output, IIngredient tool, Ingredient Input, int chopTimes, @OptionalString String group)

<recipetype:stone_age:tree_stump>. ddRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
TreeStumpManager.INSTANCE.addRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
```
