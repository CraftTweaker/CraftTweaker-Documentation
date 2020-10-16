# Freezer

## Package

```zenscript
importieren mods.aether_legacy.Freezer;
```
## Usage

```zenscript
Freezer.registerFreezable(IItemStack-Eingabe, IItemStack-Ausgabe, Int Zeiterforder); // Gefrierrezept hinzufügen, Zeitbedarf ist in Ticks

Freezer. egisterFreezerFuel(IItemStack Input, int timeGiven); // Element als Gefrierkraftstoff hinzufügen, timeGiven ist in Ticks

// Neu in 1. .2
Freezer.removeFreezable(IItemStack-Eingang); // Gefrierrezepte mit der angegebenen Eingabe entfernen
```
