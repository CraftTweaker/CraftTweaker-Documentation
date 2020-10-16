# Freezer

## Package

```zenscript
import mods.aether_legacy.Freerzer;
```
## Usage

```zenscript
Freezer.registerFreezable(IItemStack input, IItemStack output, int timeRequired); // Aggiungi una ricetta freezer, timeRequired is in ticks

Freezer. egisterFreezerFuel(IItemStack input, int timeGiven); // Aggiungi un elemento come combustibile congelatore, tempoDato è in zecche

// Nuovo in 1. .2
Freezer.removeFreezable(IItemStack input); // Rimuove le ricette del congelatore con l'input dato
```
