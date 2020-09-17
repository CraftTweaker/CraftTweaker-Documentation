# Millstone

## Pacchetto
`import mods.stone_age.MillstoneManager;`

## Metodi
- **Nome stringa** Nome ricetta
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingresso IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **int activateCount** Activate millstone count
- **Gruppo di stringhe** Gruppo di ricette

## Addizione

```zenscript
<recipetype:stone_age:millstone>.addRecipe(nome stringa, output IItemStack, input IIngrediente, int activateCount, @OptionalString String group)

<recipetype:stone_age:millstone>. ddRecipe("sugar", <item:minecraft:sugar>, <item:minecraft:sugar_cane>, 2, "foods");
MillstoneManager.INSTANCE.addRecipe("sugar", <item:minecraft:sugar>, <item:minecraft:sugar_cane>, 2, "foods");
```
