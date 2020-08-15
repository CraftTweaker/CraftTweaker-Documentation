# Ceppo Albero

## Pacchetto
`import mods.stone_age.TreeStumpManager;`

## Metodi
- **Nome stringa** Nome ricetta
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Strumento IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **int chopTimes** Chop times
- **Gruppo di stringhe** Gruppo di ricette

## Addizione

```zenscript
<recipetype:stone_age:tree_stump>.addRecipe(nome stringa, uscita IItemStack, strumento IIngrediente, input IIngrediente, int chopTimes, @OptionalString String group)

<recipetype:stone_age:tree_stump>. ddRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
TreeStumpManager.INSTANCE.addRecipe("oak_planks", <item:minecraft:oak_planks>, <item:minecraft:iron_axe>, <item:minecraft:oak_log>, 2);
```
