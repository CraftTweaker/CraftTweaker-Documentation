# Liquiditäts-Interaktion

Das flüssige Interaktionspaket wird verwendet, um flüssige Wechselwirkungen (wie Lava und Flüssiges Startlicht) zu AS Chalices hinzuzufügen.

## Dieses Paket importieren

Wenn Sie das Paket importieren möchten, gehen Sie hier:

```zenscript
importieren mods.astralsorcery.LiquidInteraction;
```

## Interaktion entfernen

Diese Funktion entfernt das erste Rezept das die angegebenen [Flüssigkeiten verwendet](/Vanilla/Liquids/ILiquidStack/) und gibt die angegebene Ausgabe [Stack](/Vanilla/Items/IItemStack/)zurück.  
Wenn Sie die Ausgabe auslassen, wird das erste Rezept entfernt, das die beiden gegebenen Flüssigkeiten unabhängig von ihrer Ausgabe verwendet.

```zenscript
//LiquidInteraction.removeInteraction(ILiquidStack liquid1, ILiquidStack liquid2, @Optional IItemStack output);
LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>);
LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>, <minecraft:obsidian>);
```

## Rezeptzusatz

Fügt eine flüssige Interaktion zu den Kalice-Interaktionen hinzu

[FluidStack](/Vanilla/Liquids/ILiquidStack/) Beträge zählen als die Menge an Flüssigkeit, die im Falle einer Interaktion verbraucht wird.  
chance1 und chance2 definieren die Chancen, die Eingangsflüssigkeiten input1 bzw. input2 verbraucht werden.  
Gewicht legt fest, wie wahrscheinlich dies im Vergleich zu den anderen flüssigen Interaktionen ausgewählt werden soll, die für ein bestimmtes Paar von Flüssigkeitseingaben registriert wurden

```zenscript
//LiquidInteraction.addInteraction(ILiquidStack liquidIn1, float chanceConsumption1, ILiquidStack liquidIn2, float chanceConsumption2, int weight, IItemStack output);
LiquidInteraction.addInteraction(<liquid:lava> * 10, 0.1, <liquid:water> * 90, 0.2, 400, <minecraft:diamond>);
```