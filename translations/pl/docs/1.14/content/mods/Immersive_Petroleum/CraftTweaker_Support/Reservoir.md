# Reservoir

## remove

| Name           | Type   |
| -------------- | ------ |
| Nazwa przepisu | String |

Example:
```ZenScript
// mods.immersiveoilum.ReservoirRegistry.remove(String recipeName);

mods.immersivepetroleum um.ReservoirRegistry.remove("aquifer");
```

## removeAll

| Name | Type |
| ---- | ---- |
|      |      |

Example:
```ZenScript
// mods.immersiveoilum.ReservoirRegistry.removeAll();

mods.immersivepetroleum um.ReservoirRegistry.removeAll();
```

# Konstruktor zbiorników

## konstruktor

| Name           | Type       |
| -------------- | ---------- |
| Fluid          | Fluidstack |
| Minimum Size   | int        |
| Maximum Size   | int        |
| Replenish Rate | int        |
| Weight         | int        |

### Weight

Weight is the Weighted Chance of a chunk containing that specific fluid reservoir. The weight is counted as in X in Total.

So if you have 5 Reservoir values at: 5, 5, 6, 8, 10

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
// new mods.immersivePetum.ReservoirBuilder(płyn IFluidStack minSize, int maxSize, int traceAmount, int weight);

new mods.immersivepetroleum um.ReservoirBuilder(<fluid:minecraft:lava>, 1000, 5000, 0, 20);
```

## Wymiary dodatków

| Name          | Type             |
| ------------- | ---------------- |
| Blacklist     | Boolean          |
| Nazwy Wymiaru | Tablica string[] |

Example:
```zenscript
// builderInstance.addDimensions(boolean isBlacklist, String[] dimensionNames);

builderInstance.addDimensions(false, ["minecraft:overworld"]);
```

## addBiomes

| Name         | Type             |
| ------------ | ---------------- |
| Blacklist    | Boolean          |
| Nazwy biomów | Tablica string[] |

Example:
```zenscript
// builderInstance.addBiomes(boolean isBlacklist, String[] biomeNames);

builderInstance.addBiomes(false, ["minecraft:plains"]);
```

## build

| Name | Type   |
| ---- | ------ |
| Name | String |

### Preface
Podstawowe zbiorniki są małe, ponieważ są przetłumaczone - niestandardowe zbiorniki powinny być poprawnie kapitalizowane (np. "Deep Ocean Oil Reservoir").

Example:
```zenscript
// builderInstance.build(String name);

builderInstance.build("Przykładowa nazwa");
```

---

Kopiuj/Wklej przykład:
```ZenScript
nowy ReservoirBuilder(<fluid:minecraft:lava>, 25000, 100000, 0, 20)
    .addDimensions(false, ["overworld"])
    .addBiomes(false, ["minecraft:desert"])
    .build("Pustynna Lava");
```
