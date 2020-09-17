# Millstein

## Paket
`importieren mods.stone_age.MillstoneManager;`

## Methoden
- **Zeichenkettenname** Rezeptname
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Eingabe**
- **int activateCount** Millstone-Anzahl aktivieren
- **Zeichenkettengruppe** Rezeptgruppe

## Addition

```zenscript
<recipetype:stone_age:millstone>.addRecipe(String name, IItemStack output, IIngredient input, int activateCount, @OptionalString String group)

<recipetype:stone_age:millstone>. ddRecipe("Zucker", <item:minecraft:sugar>, <item:minecraft:sugar_cane>, 2, "Lebensmittel");
MillstoneManager.INSTANCE.addRecipe("Zucker", <item:minecraft:sugar>, <item:minecraft:sugar_cane>, 2, "Lebensmittel");
```
