# Brenner

Der Distiller ist eine Maschine, die eine Eingangsflüssigkeit mit Dampf in eine Ausgangsflüssigkeit und Gegenstand umwandelt.

## Paket
`mods.steamagerevolution.Distiller`

## Methoden

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Ausgabe** Das Ergebnis des Rezeptes.
- **[IItemStack](/Vanilla/Items/IItemStack/) Ausgabe** Das Ergebnis des Rezeptes.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Eingabe** Die Eingabe des Rezeptes.
- **int CraftTime** Herstellungszeit für Maschine zum Verarbeiten
- **Int Dampfkosten** Dampfkosten für Maschine zum Verarbeiten

## Addition

```zenscript
mods.steamagerevolution.Distiller.addRecipe(ILiquidStack Input, IItemStack outputStack, ILiquidStack Output, int craftTime, int steamCost);
mods.steamagerevolution.Distiller.addRecipe(<liquid:bio_fuel>*1000, <minecraft:dirt>, <liquid:ethanol>*1000, 200, 200);
```

## Entfernen

```zenscript mods.steamagerevolution.Distiller.removeRecipe(IItemStack outputStack, ILiquidStack output); mods.steamagerevolution.Distiller.removeRecipe(<minecraft:cobblestone>, <liquid:lava>);

mods.steamagerevolution.Distiller.removeAll(); ``
