# Druckkammer

Die Druckkammer ist eine Multiblock-Struktur, die mit Druckluft ein oder mehrere Eingangselemente in ein oder mehrere Ausgangselemente umwandelt. Rezepte der Druckkammer haben einen zugehörigen Druckwert, was der Luftdruck in der Leiste erforderlich ist, um die Umwandlung durchzuführen.

## Anruf

Sie können das Paket der Druckkammer mit `mods.pneumaticcraft.pressurechamber` aufrufen.

## Entfernen

Diese Funktion entfernt das erste Rezept, das sie mit dem angegebenen [IItemStack findet:](/Vanilla/Items/IItemStack/) `Ausgabe` Array:

```zenscript
mods.pneumaticcraft.pressurechamber.removeRecipe(IItemStack[] Ausgabe);
// Beispiel
mods.pneumaticcraft.pressurechamber.removeRecipe([<pneumaticcraft:ingot_iron_compressed>]);
```

Diese Funktion entfernt *alle* Rezepte der Druckkammer:

```zenscript
mods.pneumaticcraft.pressurechamber.removeAllRecipes();
```

## Hinzufügen

Diese Funktion wird verwendet, um neue Rezepte zur Druckkammer hinzuzufügen:

```zenscript
mods.pneumaticcraft.pressurechamber.addRecipe(IIngredient[] Eingänge, Doppeldruck, IItemStack[] Ausgaben);

// Beispiel
mods.pneumaticcraft.pressurechamber.addRecipe([<minecraft:gold_ingot> * 2,<minecraft:apple>], 2.0, [<minecraft:golden_apple>]);
```