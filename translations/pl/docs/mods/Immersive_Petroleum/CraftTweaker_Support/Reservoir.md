# Zbiornik

## usuń

| Nazwisko       | Typ         |
| -------------- | ----------- |
| Nazwa przepisu | Ciąg znaków |

Przykład:
```ZenScript
// mods.immersiveoilum.ReservoirRegistry.remove(String recipeName);

mods.immersivepetroleum um.ReservoirRegistry.remove("aquifer");
```

## usuń wszystko

| Nazwisko | Typ |
| -------- | --- |
|          |     |

Przykład:
```ZenScript
// mods.immersiveoilum.ReservoirRegistry.removeAll();

mods.immersivepetroleum um.ReservoirRegistry.removeAll();
```

# Konstruktor zbiorników

## konstruktor

| Nazwisko              | Typ                                         |
| --------------------- | ------------------------------------------- |
| Płyn                  | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |
| Minimalny rozmiar     | odcień                                      |
| Maksymalny rozmiar    | odcień                                      |
| Szybkość uzupełnienia | odcień                                      |
| Waga                  | odcień                                      |

### Waga

Masa to ważona szansa na pocisk zawierający ten konkretny zbiornik płynu. Masa jest liczona jak w X w sumie

Więc jeśli masz 5 wartości zbiornika na: 5, 5, 6, 8, 10

Wtedy każdy odpowiedni wpis będzie miał ważoną szansę:
```
5 w 34
5 w 34
6 w 34
8 w 34
10 w 34
```

Przykład:
```zenscript
// new mods.immersivePetum.ReservoirBuilder(płyn IFluidStack minSize, int maxSize, int traceAmount, int weight);

new mods.immersivepetroleum um.ReservoirBuilder(<fluid:minecraft:lava>, 1000, 5000, 0, 20);
```

## Wymiary dodatków

| Nazwisko      | Typ              |
| ------------- | ---------------- |
| Czarna lista  | Boolean          |
| Nazwy Wymiaru | Tablica string[] |

Przykład:
```zenscript
// builderInstance.addDimensions(boolean isBlacklist, String[] dimensionNames);

builderInstance.addDimensions(false, ["minecraft:overworld"]);
```

## addBiomes

| Nazwisko     | Typ              |
| ------------ | ---------------- |
| Czarna lista | Boolean          |
| Nazwy biomów | Tablica string[] |

Przykład:
```zenscript
// builderInstance.addBiomes(boolean isBlacklist, String[] biomeNames);

builderInstance.addBiomes(false, ["minecraft:plains"]);
```

## kompilacja

| Nazwisko | Typ         |
| -------- | ----------- |
| Nazwisko | Ciąg znaków |

### Preface
Podstawowe zbiorniki są małe, ponieważ są przetłumaczone - niestandardowe zbiorniki powinny być poprawnie kapitalizowane (np. "Deep Ocean Oil Reservoir").

Przykład:
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
