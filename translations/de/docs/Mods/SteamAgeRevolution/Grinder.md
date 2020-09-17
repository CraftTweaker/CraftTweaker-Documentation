# Schleifer

Der Schleifer ist eine Maschine, die einen Eingangsgegenstand mit Dampf in ein Ausgangselement umwandelt.

## Paket
`mods.steamagerevolution.Schleifer`

## Methoden

- **[IItemStack](/Vanilla/Items/IItemStack/) Ausgabe** Das Ergebnis des Rezeptes.
- **[IItemStack](/Vanilla/Items/IItemStack/) Eingabe** Die Eingabe des Rezeptes.
- **int CraftTime** Herstellungszeit für Maschine zum Verarbeiten
- **Int Dampfkosten** Dampfkosten für Maschine zum Verarbeiten

## Addition

```zenscript
mods.steamagerevolution.Grinder.addRecipe(IIngredient Input, IItemStack Output, int craftTime, int steamCost);
mods.steamagerevolution.Grinder.addRecipe(<ore:cobblestone>, <minecraft:gravel>, 200, 200);
```

## Entfernen

```zenscript
mods.steamagerevolution.Grinder.removeRecipe(IItemStack Ausgabe);
mods.steamagerevolution.Grinder.removeRecipe(<minecraft:sand>);

mods.steamagerevolution.Grinder.removeAll();
```
