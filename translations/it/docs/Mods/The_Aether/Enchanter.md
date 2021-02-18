# Enchanter

## Package

```zenscript
import mods.aether_legacy.Enchanter;
```
## Usage

```zenscript
Enchanter.registerEnchantment(IItemStack input, IItemStack output, int timeRequired); // Add an enchanter recipe, timeRequired is in ticks

Enchanter.registerEnchantment(IItemStack repair, int timeRequired); // Add an item to be repaired, timeRequired is in ticks

Enchanter.registerEnchanterFuel(IItemStack input, int timeGiven); // Add an item as a fuel for repairing, timeGiven is in ticks

// New in 1.5.2
Enchanter.removeEnchantment(IItemStack input); // Removes enchanter recipes with the given input
```
