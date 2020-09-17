# Thermopneumatische Verarbeitungsanlage

Die Thermopneumatische Verarbeitungsanlage (TPP) setzt Druck und Wärme ein, um eine Flüssigkeit und/oder einen festen Bestandteil in eine andere Flüssigkeit umzuwandeln. In Kelvin: 273 K = 0°C (32°F), 373 K = 100°C (212°F).

*Technisch gesehen ist 273,16 K = 0°C, aber für diese Mod ist es für einen Integer-Offset vereinfacht.*

## Anruf

Sie können das TPP-Paket mit `mods.pneumaticcraft.thermopneumaticprocessingplant` aufrufen.

## Entfernen

Diese Funktion entfernt das erste gefundene Rezept mit der angegebenen [IIngredient](/Vanilla/Variable_Types/IIngredient/) `Ausgabe`:

```zenscript
mods.pneumaticcraft.thermopneumaticprocessingplant.removeRecipe(IIngrediente Ausgabe);
// Beispiel
mods.pneumaticcraft.thermopneumaticprocessingplant.removeRecipe(<liquid:lpg>);
```

Diese Funktion entfernt *alle* TPP-Rezepte:

```zenscript
mods.pneumaticcraft.thermopneumaticprocessingplant.removeAllRecipes();
```

## Hinzufügen

Die folgenden Funktionen können verwendet werden, um Rezepte zum TPP hinzuzufügen:

```zenscript
// Fügen Sie ein Rezept hinzu, das ein Eingabeelement in eine Ausgabeflüssigkeit konvertiert
mods.pneumaticcraft.thermopneumaticprocessingplant umwandelt. ddRecipe(IItemStack itemInput, doppelter Druck, Doppeltemperatur, ILiquidStack-Ausgabe);

// Fügen Sie ein Rezept hinzu, das eine Eingangsflüssigkeit und ein Element in eine Ausgangsflüssigkeit konvertiert (Element kann null sein)
Mods. neumaticcraft.thermopneumaticprocessingplant.addRecipe(ILiquidStack liquidInput, IItemStack itemInput, doppelter Druck, doppelter Temperatur, ILiquidStack Output);

// Beispiel: Konvertieren von Wasser und Rotstein in einen Rotsteinfluss bei 3. bar und 473K (200C)
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<liquid:water>, <item:redstone>, 3. , 473, <liquid:redstone> * 250);
// Beispiel: 10mB Öl in 5mB Lava bei 3.0 bar und 473K
mods.pneumaticcraft.thermopneumaticprocessingplant umwandeln. ddRecipe(<liquid:oil> * 10, null, 3.0, 473, <liquid:lava> * 5);
// Beispiel: 1 Netherrack in 50mB Lava bei 1. bar und 573K
mods.pneumaticcraft.thermopneumaticprocessingplant.addRecipe(<minecraft:netherrack>, 1,5, 573, <liquid:lava> * 50);
```