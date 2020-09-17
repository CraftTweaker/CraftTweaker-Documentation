# Dampföfen

Der Dampföfen ist eine Maschine, die einen Eingangsgegenstand mit Dampf in einen Ausgangsgegenstand umwandelt.

## Paket
`mods.steamagerevolution.Dampföfen`

## Methoden

- **[IItemStack](/Vanilla/Items/IItemStack/) Ausgabe** Das Ergebnis des Rezeptes.
- **[IItemStack](/Vanilla/Items/IItemStack/) Eingabe** Die Eingabe des Rezeptes.
- **int CraftTime** Herstellungszeit für Maschine zum Verarbeiten
- **Int Dampfkosten** Dampfkosten für Maschine zum Verarbeiten

## Addition

```zenscript
mods.steamagerevolution.SteamFurnace.addRecipe(IIngredient Input, IItemStack Output, int craftTime, int steamCost);
mods.steamagerevolution.SteamFurnace.addRecipe(<ore:cobblestone>, <minecraft:stone>, 200, 200);
```


## Entfernen

```zenscript mods.steamagerevolution.SteamFurnace.removeRecipe(IItemStack output); mods.steamagerevolution.SteamFurnace.removeRecipe(<minecraft:glass>);

mods.steamagerevolution.SteamFurnace.removeAll(); ``
