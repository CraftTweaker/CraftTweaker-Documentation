# Serbatoio

## rimuovi

| Nome         | Tipo    |
| ------------ | ------- |
| Nome Ricetta | Stringa |

Esempio:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.remove(String recipeName);

mods.immersivepetroleum.ReservoirRegistry.remove("aquifer");
```

## removeAll

| Nome | Tipo |
| ---- | ---- |
|      |      |

Esempio:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.removeAll();

mods.immersivepetroleum.ReservoirRegistry.removeAll();
```

# Costruttore Di Serbatoi

## costruttore

| Nome                  | Tipo                                        |
| --------------------- | ------------------------------------------- |
| Fluido                | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |
| Dimensione Minima     | int                                         |
| Dimensione Massima    | int                                         |
| Tasso Di Rifornimento | int                                         |
| Peso                  | int                                         |

### Peso

Il peso è la possibilità di peso di un pezzo contenente quel serbatoio di fluido specifico. Il peso è contato come in X in totale.

Quindi, se si dispone di 5 valori del serbatoio a: 5, 5, 6, 8, 10

Quindi ogni rispettiva voce avrà una probabilità ponderata di:
```
5 su 34
5 su 34
6 su 34
8 su 34
10 su 34
```

Esempio:
```zenscript
// new mods.immersivepetroleum.ReservoirBuilder(IFluidStack fluid, int minSize, int maxSize, int traceAmount, int weight);

new mods.immersivepetroleum.ReservoirBuilder(<fluid:minecraft:lava>, 1000, 5000, 0, 20);
```

## addDimensions

| Nome            | Tipo            |
| --------------- | --------------- |
| Blacklist       | Boolean         |
| Nomi Dimensioni | Array stringa[] |

Esempio:
```zenscript
// builderInstance.addDimensions(boolean isBlacklist, String[] dimensionNames);

builderInstance.addDimensions(false, ["minecraft:overworld"]);
```

## addBiomes

| Nome       | Tipo            |
| ---------- | --------------- |
| Blacklist  | Boolean         |
| Nomi Biomi | Array stringa[] |

Esempio:
```zenscript
// builderInstance.addBiomes(boolean isBlacklist, String[] biomeNames);

builderInstance.addBiomes(false, ["minecraft:plains"]);
```

## build

| Nome | Tipo    |
| ---- | ------- |
| Nome | Stringa |

### Prefazione
I serbatoi di base sono minuscoli in quanto tradotti - quelli personalizzati dovrebbero essere correttamente capitalizzati (es. "Riserva di petrolio oceano profondo").

Esempio:
```zenscript
// builderInstance.build(String name);

builderInstance.build("Example Name");
```

---

Esempio di copia/incolla:
```ZenScript
new ReservoirBuilder(<fluid:minecraft:lava>, 25000, 100000, 0, 20)
    .addDimensions(false, ["overworld"])
    .addBiomes(false, ["minecraft:desert"])
    .build("Desert Lava");
```
