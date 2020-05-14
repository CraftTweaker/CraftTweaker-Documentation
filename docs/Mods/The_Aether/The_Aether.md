# The Aether

# Accessory

## Package

```zenscript
import mods.aether_legacy.Accessory;
```
## Usage

```zenscript
Accessory.registerAccessory(IItemStack input, String accessory);
```

# Freezer

## Package

```zenscript
import mods.aether_legacy.Freezer;
```
## Usage

```zenscript
Freezer.registerFreezable(IItemStack input, IItemStack output, int timeRequired);
Freezer.registerFreezerFuel(IItemStack input, int timeGiven);
```

# Enchanter

## Package

```zenscript
import mods.aether_legacy.Enchanter;
```
## Usage

```zenscript
Enchanter.registerEnchantment(IItemStack input, IItemStack output, int timeRequired);
// repairing tools and stuff
Enchanter.registerEnchantment(IItemStack repair, int timeRequired);
Enchanter.registerEnchanterFuel(IItemStack input, int timeGiven);
```