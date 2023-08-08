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
// FreezerFuelManager.addFuel(item as IItemStack, burnTime as int)
mods.aether.FreezerFuelManager.addFuel(<item:minecraft:coal>, 250);
```

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| item | [IItemStack](/vanilla/api/item/IItemStack) | fuel [IItemStack](/vanilla/api/item/IItemStack) | false |
| burnTime | int | the fuel's burn time | false |


:::

:::group{name=addFuelTag}

Adds the items from this tag as fuel for the Freezer with the given burn time.

```zenscript
// FreezerFuelManager.addFuelTag(tag as MCTag, burnTime as int)
mods.aether.FreezerFuelManager.addFuelTag(<tag:items:minecraft:planks>, 250);
```

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| item | [MCTag](/vanilla/api/tag/MCTag) | fuel [MCTag](/vanilla/api/tag/MCTag) | false |
| burnTime | int | the fuel's burn time | false |


:::

:::group{name=removeFuel}

Removes this fuel item with the given burn time from the Freezer.

```zenscript
// FreezerFuelManager.removeFuel(item as IItemStack, burnTime as int)
mods.aether.FreezerFuelManager.removeFuel(<item:minecraft:coal>, 250);
```

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| item | [IItemStack](/vanilla/api/item/IItemStack) | fuel [IItemStack](/vanilla/api/item/IItemStack) | false |
| burnTime | int | the fuel's burn time | false |


:::

:::group{name=removeFuelTag}

Removes the fuel items in this tag with the given burn time from the Freezer.

```zenscript
// FreezerFuelManager.removeFuelTag(tag as MCTag, burnTime as int)
mods.aether.FreezerFuelManager.removeFuelTag(<tag:items:minecraft:planks>, 250);
```

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| item | [MCTag](/vanilla/api/tag/MCTag) | fuel [MCTag](/vanilla/api/tag/MCTag) | false |
| burnTime | int | the fuel's burn time | false |


:::
