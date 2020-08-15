# Casting Block

Der Casting Block ist eine Maschine, die eine Eingangsflüssigkeit in ein Ausgangselement umwandelt.

## Paket
`mods.steamagerevolution.CastingBlock`

## Methoden

- **[IItemStack](/Vanilla/Items/IItemStack/) Ausgabe** Das Ergebnis des Rezeptes.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Eingabe** Die Eingabe des Rezeptes.
- **int CraftTime** Herstellungszeit für Maschine zum Verarbeiten

## Addition

```zenscript
mods.steamagerevolution.CastingBlock.addRecipe(ILiquidStack-Eingabe, IItemStack-Ausgabe, int craftTime);
mods.steamagerevolution.CastingBlock.addRecipe(<liquid:lava>*1000, <minecraft:obsidian>, 200);
```

## Entfernen

```zenscript
mods.steamagerevolution.CastingBlock.removeRecipe(IItemStack Ausgabe);
mods.steamagerevolution.CastingBlock.removeRecipe(<minecraft:iron_block>);

mods.steamagerevolution.CastingBlock.removeAll();
```
