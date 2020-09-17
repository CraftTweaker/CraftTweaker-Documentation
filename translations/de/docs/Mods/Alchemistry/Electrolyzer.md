# Elektrolyzer

# Paket
```zenscript
`mods.alchemistry.Elektrolyzer
```

## Methoden
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) Eingabe** - Der flüssige Eingang des Rezeptes.
- **[IItemStack](/Vanilla/Items/IItemStack/) Eingabe** - Der Elektrolyt Eingang des Rezeptes.
- **int ElektrolyteConsumptionChance** - Chance auf Elektrolye zu verbrauchen
- **[IItemStack](/Vanilla/Items/IItemStack/) Ausgabe** - Ausgabe für das Rezept

## Addition
```zenscript
mods.alchemistry.Electrolyzer.addRecipe(ILiquidStack Input, IItemStack Input, int electrolyteConsumptionChance, IItemStack output, IItemStack output2, @Nullable IItemStack output3, @Nullable int output3Chance, @Nullable IItemStack output4, @Nullable int output4Chance);
mods.alchemistry.Electrolyzer.addRecipe(<liquid:water>*400,<minecraft:stone>,10,<minecraft:ender_pearl>*2,<minecraft:sand>,null,0,null,0);
```

## Entfernen
```zenscript
mods.alchemistry.Electrolyzer.removeRecipe(ILiquidStack-Eingang, IItemStack-Eingang);
mods.alchemistry.Electrolyzer.removeRecipe(<liquid:water>*125,<alchemistry:compound:13>);

mods.alchemistry.Electrolyzer.removeAllRezept();
```
