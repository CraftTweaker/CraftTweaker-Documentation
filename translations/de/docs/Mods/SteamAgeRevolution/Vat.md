# Vat

Die Vat ist eine Maschine, die Eingangsgegenstände und Flüssigkeiten in eine Ausgangsflüssigkeit umwandelt.

## Paket
`mods.steamagerevolution.Vat`

## Methoden

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Ausgabe** Das Ergebnis des Rezeptes.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Eingabe** Fluideingabe des Rezeptes.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Eingabeelemente** Einträge zur Eingabe des Rezeptes.
- **int CraftTime** Herstellungszeit für Maschine zum Verarbeiten

## Hinzufügen

```zenscript
mods.steamagerevolution.Vat.addRecipe(ILiquidStack[] Eingabe, IIngredient[] InputItems, ILiquidStack Output, int craftTime);
mods.steamagerevolution.Vat.addRecipe([<liquid:tin>*144, <liquid:copper>*144], [<ore:coal>, <ore:cobblestone>], <liquid:steel>*288, 200, 200);
```

## Entfernen

```zenscript
mods.steamagerevolution.Vat.removeRecipe(ILiquidStack Ausgabe);
mods.steamagerevolution.Vat.removeRecipe(<liquid:lava>);

mods.steamagerevolution.Vat.removeAll();
```
