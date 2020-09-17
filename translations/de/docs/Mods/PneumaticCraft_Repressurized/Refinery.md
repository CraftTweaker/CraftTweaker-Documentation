# Raffinerie

Die Raffinerie ist eine Multiblock-Struktur, die Wärme verwendet, um eine Eingangsflüssigkeit in zwei oder mehr Ausgangsflüssigkeiten umzuwandeln. Der Multiblock besteht aus zwei bis vier (inklusive) Raffinerieblöcken und die Anzahl möglicher Ausgabeflüssigkeiten wird durch die Anzahl der Raffinerieblöcke in der Struktur begrenzt.

Vor PneumaticCraft: Repressurized v0.9.0, die minimale Temperatur für jedes Raffinerie-Rezept (d.h. die Temperatur, bei der die Verarbeitung beginnt) war immer 373K oder 100°C. In der Version 0.9.0 und später ist es jedoch möglich, eine Mindesttemperatur anzugeben, wenn ein Refinerie-Rezept hinzugefügt wird.

Die Raffinerie wird mit der Verarbeitung von Flüssigkeiten bei minimaler Temperatur des Rezepts beginnen und wird schneller funktionieren, wenn die Temperatur steigt.

Beachten Sie, dass es möglich ist, zwei oder mehr Rezepte mit der gleichen Eingabe zu haben, solange die Anzahl der Ausgaben unterschiedlich ist. In diesem Fall wird das Rezept verwendet, das die bestmöglichen Ausgänge erzeugt (angesichts der Anzahl der Raffinerieblöcke im Multiblock).

## Anruf

Sie können das Refinery Paket mit `mods.pneumaticcraft.refinery` aufrufen.

## Entfernen

Diese Funktion entfernt das erste Rezept, das zu allen angegebenen [IIngredient](/Vanilla/Variable_Types/IIngredient/) `Ausgaben passt`:

```zenscript
mods.pneumaticcraft.refinery.removeRecipe(Igredient[] Ausgaben);
```

Diese Funktion entfernt das erste Rezept, das zu dem angegebenen [IIngredient](/Vanilla/Variable_Types/IIngredient/) `Eingabe` passt:

```zenscript
mods.pneumaticcraft.refinery.removeRecipes(IIngredient Eingabe);
```

Diese Funktion wird *alle* Refinery Rezepte entfernen:

```zenscript
mods.pneumaticcraft.refinery.removeAllRecipes();
```

## Hinzufügen

Diese Funktionen fügen der Raffinerie ein neues Rezept hinzu:

```zenscript
// Fügen Sie ein Rezept mit der Standardtemperatur von 373K (100°C)
mods.pneumaticcraft.refinery. ddRecipe(ILiquidStack-Eingabe, ILiquidStack[] Ausgabe);

// (v0.9.0+ erforderlich) Fügen Sie ein Rezept mit einer angegebenen Mindesttemperatur
Mods hinzu. neumaticcraft.refinery. ddRecipe(int minimumtemperatur, ILiquidStack-Eingang, ILiquidStack[] Ausgaben);


// Beispiel: beide Rezepte verwenden Wasser als Input
// Das erste Rezept wird in einer 2-Block-Raffinerie verwendet
Mods. neumaticcraft.refinery. ddRecipe(<liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5]);
// Zweiter Rezept wird in einer 3- oder 4-Block-Raffinerie verwendet
// und benötigt zusätzlich eine Mindesttemperatur von 473K, oder 200°C
Mods. neumaticcraft.refinery.addRecipe(473, <liquid:water> * 10, [<liquid:lava> * 2, <liquid:oil> * 5, <liquid:lpg> * 2]);
```