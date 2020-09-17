# Lichtquelle

Du kannst Lightwell Liquefications hinzufügen und entfernen

## Anruf

Sie können das WellRecipe Paket mit `mods.astralsorcery.Lightwell` anrufen.

## Entfernen

Diese Funktion entfernt das erste Rezept, das die angegebene [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `Ausgabe` mit dem angegebenen [IItemStack](/Vanilla/Items/IItemStack/) `Eingabe` zurückgibt. Wenn es mehrere Rezepte gibt, die die angegebene Ausgabe zurückgeben, müssen Sie diese Methode mehrmals aufrufen!

Sie können die Ausgabe auf `null` setzen, um nur über den Eingabestack zu suchen

```zenscript
//mods.astralsorcery.Lightwell.removeLiquefaction(IItemStack Input, ILiquidStack Output);
mods.astralsorcery.Lightwell.removeLiquefaction(<astralsorcery:itemcraftingcomponent:0>, null);
```

## Addition

```zenscript
//mods.astralsorcery.Lightwell.addLiquefaction(IItemStack Input, ILiquidStack Output, float productionMultiplier, float shatterMultiplier, int colorhex);
mods.astralsorcery.Lightwell.addLiquefaction(<minecraft:dirt>, <liquid:water>, 1, 0.2, 0);
```

| Parameter                | Parametertyp                                   | Beschreibung                                                                                                                                                                                                                |
| ------------------------ | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| input                    | [IItemStack](/Vanilla/Items/IItemStack/)       | Das Eingabeelement                                                                                                                                                                                                          |
| ausgeben                 | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) | Die zurückgegebene Flüssigkeit. Nur der Typ der Flüssigkeit zählt, die Menge wird (wie die Standard-Lightwell) von Dingen wie Tag/Nacht und so weiter abhängen…                                                             |
| outputMultiplier         | float                                          | Multiplikator, der zusammen mit dem gesammelten Sternlicht zur Berechnung der Ausgabeflüssigkeitsmenge eingesetzt wird. Normalerweise 0.3 - 1.2 (aka: hier nicht wie 200 schreiben, wenn du vernünftig bleiben möchtest :P) |
| zerschatterMultiplikator | float                                          | Je höher dieser Multiplikator, desto niedriger ist die Wahrscheinlichkeit, dass der Katalysatorgegenstand zerfällt.                                                                                                         |
| colorHEX                 | int                                            | Der Farbcode, der für die Partikel um das schwebende Element verwendet wird.                                                                                                                                                |