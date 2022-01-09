# Reservoir

## remove

| Name              | Type   |
| ----------------- | ------ |
| Nom de la recette | String |

Example:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.remove(String recipeName);

mods.immersivepetroleum.ReservoirRegistry.remove("aquifer");
```

## removeAll

| Name | Type |
| ---- | ---- |
|      |      |

Example:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.removeAll();

mods.immersivepetroleum.ReservoirRegistry.removeAll();
```

# Constructeur du réservoir

## constructeur

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
// new mods.immersivepetroleum.ReservoirBuilder(IFluidStack fluid, int minSize, int maxSize, int traceAmount, int traceAmount, int weight);

new mods.immersivepetroleum.ReservoirBuilder(<fluid:minecraft:lava>, 1000, 5000, 0, 0, 0, 0, 20);
```

## ajouterDimensions

| Name                | Type             |
| ------------------- | ---------------- |
| Blacklist           | Boolean          |
| Noms des dimensions | String[] tableau |

Example:
```zenscript
// builderInstance.addDimensions(boolean isBlacklist, String[] dimensionNames);

builderInstance.addDimensions(false, ["minecraft:overworld"]);
```

## addBiomes

| Name          | Type             |
| ------------- | ---------------- |
| Blacklist     | Boolean          |
| Noms de Biome | String[] tableau |

Example:
```zenscript
// builderInstance.addBiomes(boolean isBlacklist, String[] biomeNames);

builderInstance.addBiomes(false, ["minecraft:plains"]);
```

## build

| Name | Type   |
| ---- | ------ |
| Name | String |

### Préface
Les réservoirs de base sont en minuscules au fur et à mesure qu'ils sont traduits - les réservoirs douaniers devraient être correctement en majuscule (par exemple "réservoir de pétrole profond de l'océan").

Example:
```zenscript
// builderInstance.build(String name);

builderInstance.build("Exemple Name");
```

---

Copier/Coller l'exemple :
```ZenScript
new ReservoirBuilder(<fluid:minecraft:lava>, 25000, 100000, 0, 20)
    .addDimensions(false, ["overworld"])
    .addBiomes(false, ["minecraft:desert"])
    .build("Lave du désert");
```
