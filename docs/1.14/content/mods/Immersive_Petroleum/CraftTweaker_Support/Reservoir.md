# Reservoir

## remove

| Name        | Type        |
|-------------|-------------|
| Recipe Name | String      |

Example:
```zenscript
// mods.immersivepetroleum.ReservoirRegistry.remove(String recipeName);

mods.immersivepetroleum.ReservoirRegistry.remove("aquifer");
```

## removeAll

| Name        | Type        |
|-------------|-------------|

Example:
```zenscript
// mods.immersivepetroleum.ReservoirRegistry.removeAll();

mods.immersivepetroleum.ReservoirRegistry.removeAll();
```

# Reservoir Builder

## constructor

| Name                   | Type                                       |
|------------------------|--------------------------------------------|
| Fluid                  | Fluidstack|
| Minimum Size           | int                                        |
| Maximum Size           | int                                        |
| Replenish Rate         | int                                        |
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

## addDimensions

| Name            | Type               |
|-----------------|--------------------|
| Blacklist       | Boolean            |
| Dimension Names | String[] array     |

Example:
```zenscript
// builderInstance.addDimensions(boolean isBlacklist, String[] dimensionNames);

builderInstance.addDimensions(false, ["minecraft:overworld"]);
```

## addBiomes

| Name        | Type               |
|-------------|--------------------|
| Blacklist   | Boolean            |
| Biome Names | String[] array     |

Example:
```zenscript
// builderInstance.addBiomes(boolean isBlacklist, String[] biomeNames);

builderInstance.addBiomes(false, ["minecraft:plains"]);
```

## build

| Name | Type        |
|------|-------------|
| Name | String      |

### Preface
The base reservoirs are lowercase as they are translated - custom ones should be properly capitalized (ex. "Deep Ocean Oil Reservoir").

Example:
```zenscript
// builderInstance.build(String name);

builderInstance.build("Example Name");
```

---

Copy/Paste example:
```zenscript
new ReservoirBuilder(<fluid:minecraft:lava>, 25000, 100000, 0, 20)
	.addDimensions(false, ["overworld"])
	.addBiomes(false, ["minecraft:desert"])
	.build("Desert Lava");
```
