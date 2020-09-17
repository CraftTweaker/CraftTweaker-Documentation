# Crucible

Die Crucible ist eine Maschine, die ein Eingabeelement mit Dampf in eine Ausgabeflüssigkeit umwandelt.

## Paket
`mods.steamagerevolution.Crucible`

## Methoden

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Ausgabe** Das Ergebnis des Rezeptes.
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) Input** Die Eingabe des Rezeptes.
- **int CraftTime** Herstellungszeit für Maschine zum Verarbeiten
- **Int Dampfkosten** Dampfkosten für Maschine zum Verarbeiten

## Addition

```zenscript
mods.steamagerevolution.Crucible.addRecipe(IIngredient Eingabe, ILiquidStack Ausgabe, int craftTime, int steamCost);
mods.steamagerevolution.Crucible.addRecipe(<minecraft:obsidian>, <liquid:lava>*1000, 200, 200);
```

## Entfernen

```zenscript
mods.steamagerevolution.Crucible.removeRecipe(ILiquidStack);
mods.steamagerevolution.Crucible.removeRecipe(<liquid:lava>);

mods.steamagerevolution.Crucible.removeAll();
```
