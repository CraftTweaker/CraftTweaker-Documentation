# Schmiede Legierungen

Die Legierung Schmiede ist eine Maschine, die zwei Eingangsflüssigkeiten in eine Ausgangsflüssigkeit umwandelt.

## Paket
`mods.steamagerevolution.AlloyForge`

## Methoden

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Ausgabe** Das Ergebnis des Rezeptes.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Eingabe** Die Eingabe des Rezeptes.
- **int CraftTime** Herstellungszeit für Maschine zum Verarbeiten

## Addition

```zenscript
mods.steamagerevolution.AlloyForge.addRecipe(ILiquidStack-Eingabe, ILiquidStack-Eingabe, ILiquidStack-Ausgabe, int craftTime);
mods.steamagerevolution.AlloyForge.addRecipe(<liquid:water>*100, <liquid:lava>*100, <liquid:obsidian>*200, 200);
```


## Entfernen

```zenscript
mods.steamagerevolution.AlloyForge.removeRecipe(ILiquidStack Ausgabe);
mods.steamagerevolution.AlloyForge.removeRecipe(<liquid:bronze>);

mods.steamagerevolution.AlloyForge.removeAll();
```
