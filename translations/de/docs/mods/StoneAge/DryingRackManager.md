# Trockenrausch

## Paket
`mods.stone_age importieren.DryingRackManager`

## Methoden
- **Zeichenkettenname** Rezeptname
- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Eingabe**
- **Int Trocknungszeit** Trocknungszeit in Zecken
- **Zeichenkettengruppe** Rezeptgruppe

## Addition

```zenscript
<recipetype:stone_age:drying_rack>.addRecipe(String name, IItemStack output, IIngredient input, int dryingTime, @OptionalString String group)

<recipetype:stone_age:drying_rack>. ddRecipe("dried_meat", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "Foods");

DryingRackManager.INSTANCE.addRecipe("dried_meat", <item:minecraft:cooked_mutton>, <item:minecraft:mutton>, 1200, "Foods");
```
