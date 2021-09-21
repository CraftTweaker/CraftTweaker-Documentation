# Freezer

## Package

```zenscript
import mods.aether_legacy.Freezer;
```
## Usage

```zenscript
Freezer.registerFreezable(IItemStack input, IItemStack output, int timeRequired); // Add a freezer recipe, timeRequired is in ticks

Freezer.registerFreezerFuel(IItemStack input, int timeGiven); // Add an item as freezer fuel, timeGiven is in ticks

// New in 1.5.2
Freezer.removeFreezable(IItemStack input); // Removes freezer recipes with the given input
```
