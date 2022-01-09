# Reservoir

## remove

| Nombre        | Type   |
| ------------- | ------ |
| Nombre Receta | String |

Example:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.remove(String recipeName);

mods.immersivepetroleum.ReservoirRegistry.remove("aquifer");
```

## removeAll

| Nombre | Type |
| ------ | ---- |
|        |      |

Example:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.removeAll();

mods.immersivepetroleum.ReservoirRegistry.removeAll();
```

# Constructor de embalses

## constructor

| Nombre         | Type       |
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
// new mods.immersivepetroleum.ReservoirBuilder(IFluidStack fluid, int minSize, int maxSize, int traceAmount, int weight);

new mods.immersivepetroleum.ReservoirBuilder(<fluid:minecraft:lava>, 1000, 5000, 0, 0, 20);
```

## añadir Dimensiones

| Nombre                  | Type                |
| ----------------------- | ------------------- |
| Blacklist               | Boolean             |
| Nombres de la dimensión | Arreglo de cadena[] |

Example:
```zenscript
// builderInstance.addDimensions(boolean isBlacklist, String[] dimensionNames);

builderInstance.addDimensions(false, ["minecraft:overworld"]);
```

## addBiomes

| Nombre           | Type                |
| ---------------- | ------------------- |
| Blacklist        | Boolean             |
| Nombres de bioma | Arreglo de cadena[] |

Example:
```zenscript
// builderInstance.addBiomes(boolean isBlacklist, String[] biomeNames);

builderInstance.addBiomes(false, ["minecraft:plains"]);
```

## build

| Nombre | Type   |
| ------ | ------ |
| Nombre | String |

### Preface
Los embalses de base son minúsculas ya que se traducen - las personalizadas deben ser debidamente capitalizadas (por ejemplo, "Reservas de Petróleo en el Océano Profundo").

Example:
```zenscript
// builderInstance.build(String name);

builderInstance.build("Nombre de ejemplo");
```

---

Ejemplo: Copiar/Pegar:
```ZenScript
new ReservoirBuilder(<fluid:minecraft:lava>, 25000, 100000, 0, 0, 20)
    .addDimensions(false, ["overworld"])
    .addBiomes(false, ["minecraft:desert"])
    .build("Desert Lava");
```
