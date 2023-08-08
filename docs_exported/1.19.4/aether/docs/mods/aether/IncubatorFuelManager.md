# IncubatorFuelManager

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.aether.IncubatorFuelManager;
```

## Methods

:::group{name=addFuel}

Adds this item as fuel for the Incubator with the given burn time.

```zenscript
// IncubatorFuelManager.addFuel(item as IItemStack, burnTime as int)
mods.aether.IncubatorFuelManager.addFuel(<item:minecraft:coal>, 250);
```

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| item | [IItemStack](/vanilla/api/item/IItemStack) | fuel [IItemStack](/vanilla/api/item/IItemStack) | false |
| burnTime | int | the fuel's burn time | false |


:::

:::group{name=addFuelTag}

Adds the items from this tag as fuel for the Incubator with the given burn time.

```zenscript
// IncubatorFuelManager.addFuelTag(tag as MCTag, burnTime as int)
mods.aether.IncubatorFuelManager.addFuelTag(<tag:items:minecraft:planks>, 250);
```

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| item | [MCTag](/vanilla/api/tag/MCTag) | fuel [MCTag](/vanilla/api/tag/MCTag) | false |
| burnTime | int | the fuel's burn time | false |


:::

:::group{name=removeFuel}

Removes this fuel item with the given burn time from the Incubator.

```zenscript
// IncubatorFuelManager.removeFuel(item as IItemStack, burnTime as int)
mods.aether.IncubatorFuelManager.removeFuel(<item:minecraft:coal>, 250);
```

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| item | [IItemStack](/vanilla/api/item/IItemStack) | fuel [IItemStack](/vanilla/api/item/IItemStack) | false |
| burnTime | int | the fuel's burn time | false |


:::

:::group{name=removeFuelTag}

Removes the fuel items in this tag with the given burn time from the Incubator.

```zenscript
// IncubatorFuelManager.removeFuelTag(tag as MCTag, burnTime as int)
mods.aether.IncubatorFuelManager.removeFuelTag(<tag:items:minecraft:planks>, 250);
```

| Parameter | Type | Description | Optional |
|-----------|------|-------------|----------|
| item | [MCTag](/vanilla/api/tag/MCTag) | fuel [MCTag](/vanilla/api/tag/MCTag) | false |
| burnTime | int | the fuel's burn time | false |


:::
