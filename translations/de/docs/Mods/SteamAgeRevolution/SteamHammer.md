# Dampfhammer

Der Dampfhammer ist eine Maschine, die zwei Eingangsgegenstände mit Dampf in einen Ausgangsgegenstand umwandelt.

## Paket
`mods.steamagerevolution.SteamHammer`.

## Methoden

- **[IItemStack](/Vanilla/Items/IItemStack/) Ausgabe** Das Ergebnis des Rezeptes.
- **[IItemStack](/Vanilla/Items/IItemStack/) Eingabe** Die Eingabe des Rezeptes.
- **int CraftTime** Herstellungszeit für Maschine zum Verarbeiten
- **Int Dampfkosten** Dampfkosten für Maschine zum Verarbeiten

## Addition

```zenscript
mods.steamagerevolution.SteamHammer.addRecipe(IIngredient Eingabe, IIngredient Eingabe, IItemStack Ausgabe, int craftTime, int steamCost);
mods.steamagerevolution.SteamHammer.addRecipe(<ore:ingotIron>, <ore:ingotIron>, <ore:plateIron>.firstItem, 200, 200);
```


## Entfernen

```zenscript
mods.steamagerevolution.SteamHammer.removeRecipe(IItemStack Ausgabe);
mods.steamagerevolution.SteamHammer.removeRecipe(<ore:plateIron>.firstItem);

mods.steamagerevolution.SteamHammer.removeAll();
```
