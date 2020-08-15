# Flint Workbench

## Pacchetto
`import mods.stone_age.FlintWorkbenchManager;`

## Metodi
- **Nome stringa** Nome ricetta
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient/)[] inputMatrix**
- **[Strumento IIngrediente](/Vanilla/Variable_Types/IIngredient/)** Strumento artigianale
- **Gruppo di stringhe** Gruppo di ricette

## Addizione

```zenscript
<recipetype:stone_age:flint_workbench>.addRecipe(nome stringa, output IItemStack, IIngredient[][] inputMatrix, strumento IIngrediente, @OptionalString String group)

<recipetype:stone_age:flint_workbench>. ddRecipe("cobblestone", <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
FlintWorkbenchManager.INSTANCE.addRecipe("cobblestone", <item:minecraft:cobblestone>, [[<item:minecraft:dirt>, <item:minecraft:dirt]], <item:minecraft:emerald>);
```
