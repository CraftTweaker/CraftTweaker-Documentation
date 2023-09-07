# FreezerFuelManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.aether.FreezerFuelManager;
```

## Methods

:::group{name=addFuel}

Adds this item as fuel for the Freezer with the given burn time.

```zenscript
// FreezerFuelManager.addFuel(ingredient as IIngredient, burnTime as int)
mods.aether.FreezerFuelManager.addFuel(<item:minecraft:coal>, 250);
mods.aether.FreezerFuelManager.addFuel(<tag:items:minecraft:planks>, 250);
```

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| item | [IIngredient](/vanilla/api/ingredient/IIngredient) | fuel [IIngredient](/vanilla/api/ingredient/IIngredient) | false |
| burnTime | int | the fuel's burn time | false |

:::group{name=removeFuel}

Removes this fuel item from the Freezer.

```zenscript
// FreezerFuelManager.removeFuel(ingredient as IIngredient)
mods.aether.FreezerFuelManager.removeFuel(<item:minecraft:coal>);
mods.aether.FreezerFuelManager.removeFuel(<tag:items:minecraft:planks>);
```

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| item | [IIngredient](/vanilla/api/ingredient/IIngredient) | fuel [IIngredient](/vanilla/api/ingredient/IIngredient) | false |


:::
