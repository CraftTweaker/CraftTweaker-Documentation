# Reservoir

## entfernen

| Name       | Type   |
| ---------- | ------ |
| Rezeptname | String |

Beispiel:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.remove(String recipeName);

mods.immersivepetroleum.ReservoirRegistry.remove("aquifer");
```

## alle entfernen

| Name | Type |
| ---- | ---- |
|      |      |

Beispiel:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.removeAll();

mods.immersivepetroleum.ReservoirRegistry.removeAll();
```

# Stauraumbauer

## Konstrukteur

| Name           | Type                                        |
| -------------- | ------------------------------------------- |
| Flüssigkeit    | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |
| Minimale Größe | int                                         |
| Maximale Größe | int                                         |
| Auffüllrate    | int                                         |
| Gewicht        | int                                         |

### Gewicht

Gewicht ist die Gewichtschance eines Chunks, der dieses spezifische Flüssigkeitsbehälter enthält. Das Gewicht wird wie in X im Total gezählt.

So if you have 5 Reservoir values at: 5, 5, 6, 8, 10

Dann hat jeder einzelne Eintrag eine gewichtete Chance:
```
5 in 34
5 in 34
6 in 34
8 in 34
10 in 34
```

Beispiel:
```zenscript
// new mods.immersivepetroleum.ReservoirBuilder(IFluidStack fluid, int minSize, int maxSize, int traceAmount, int weight);

new mods.immersivepetroleum.ReservoirBuilder(<fluid:minecraft:lava>, 1000, 5000, 0, 20);
```

## hinzufügende Dimensionen

| Name             | Type           |
| ---------------- | -------------- |
| Blacklist        | Boolean        |
| Dimensionennamen | String[] Array |

Beispiel:
```zenscript
// builderInstance.addDimensions(boolean isBlacklist, String[] dimensionNames);

builderInstance.addDimensions(falsch, ["minecraft:overworld"]);
```

## addBiomes

| Name       | Type           |
| ---------- | -------------- |
| Blacklist  | Boolean        |
| Biom-Namen | String[] Array |

Beispiel:
```zenscript
// builderInstance.addBiomes(boolean isBlacklist, String[] biomeNames);

builderInstance.addBiomes(falsch, ["minecraft:plains"]);
```

## bauen

| Name | Type   |
| ---- | ------ |
| Name | String |

### Vorwort
Die Basisbehälter sind in der Übersetzung Kleinbuchstaben - die benutzerdefinierten sollten richtig kapitalisiert werden (z. B. "Deep Ocean Oil Reservoir").

Beispiel:
```zenscript
// builderInstance.build(String name);

builderInstance.build("Beispiel Name");
```

---

Beispiel kopieren/einfügen:
```ZenScript
neuer ReservoirBuilder(<fluid:minecraft:lava>, 25000, 100000, 0, 20)
    .addDimensions(falsch, ["overworld"])
    .addBiomes(falsch, ["minecraft:desert"])
    .build("Wüste Lava");
```
