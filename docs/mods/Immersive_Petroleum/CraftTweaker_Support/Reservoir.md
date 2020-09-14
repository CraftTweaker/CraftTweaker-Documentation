# Reservoir

#### remove

| Name        | Type        |
|-------------|-------------|
| Recipe Name | String      |

Example:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.remove(String recipeName);

mods.immersivepetroleum.ReservoirRegistry.remove("aquifer");
```

#### removeAll

| Name        | Type        |
|-------------|-------------|

Example:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.removeAll();

mods.immersivepetroleum.ReservoirRegistry.removeAll();
```

### Builder

#### constructor

| Name                   | Type                                       |
|------------------------|--------------------------------------------|
| Fluid                  | [Fluidstack](/Vanilla/Liquids/IFluidStack/)|
| Minimum Fluid          | int                                        |
| Capacity/Maximum Fluid | int                                        |
| Trace Amount of Fluid  | int                                        |
| Weight                 | int                                        |

### Weight

Weight is the Weighted Chance of a chunk containing that specific fluid reservoir.
The weight is counted as in X in Total.

So if you have 5 Reservoir values at:
5, 5, 6, 8, 10

Then each respective entry will have a weighted chance of:
```
5  in 34
5  in 34
6  in 34
8  in 34
10 in 34
```

Example:
```zenscript
// new mods.immersivepetroleum.ReservoirBuilder(IFluidStack fluid, int minSize, int maxSize, int traceAmount, int weight);

new mods.immersivepetroleum.ReservoirBuilder(<fluid:minecraft:lava>, 1000, 5000, 0, 20);
```

#### addDimensions

| Name            | Type               |
|-----------------|--------------------|
| Blacklist       | Boolean            |
| Dimension Names | String[] array     |

Example:
```zenscript
// mods.immersivepetroleum.ReservoirBuilder.addDimensions(boolean isBlacklist, String[] dimensionNames);

mods.immersivepetroleum.ReservoirBuilder.addDimensions(false, ["minecraft:overworld"]);
```

#### addBiomes

| Name        | Type               |
|-------------|--------------------|
| Blacklist   | Boolean            |
| Biome Names | String[] array     |

Example:
```zenscript
// mods.immersivepetroleum.ReservoirBuilder.addBiomes(boolean isBlacklist, String[] biomeNames);

mods.immersivepetroleum.ReservoirBuilder.addBiomes(false, ["minecraft:plains"]);
```

#### build

| Name        | Type               |
|-------------|--------------------|

Example:
```zenscript
// mods.immersivepetroleum.ReservoirBuilder.build();

mods.immersivepetroleum.ReservoirBuilder.build();
```

---

Copy/Paste example:
```ZenScript
new ReservoirBuilder(<fluid:minecraft:lava>, 1000, 5000, 0, 20)
	.addDimensions(false, ["nether", "test", "fakemod:fakedimension", "fakedimension2"])
	.addBiomes(true, ["minecraft:plains", "forest", "fakemod:fakebiome", "fakebiome2"])
	.build("creafttweaker_test");
```
