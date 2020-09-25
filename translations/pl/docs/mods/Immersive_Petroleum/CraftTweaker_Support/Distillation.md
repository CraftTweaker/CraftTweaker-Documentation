# Destylacja

## usuń

| Nazwisko       | Typ         |
| -------------- | ----------- |
| Nazwa przepisu | Ciąg znaków |

Przykład:
```ZenScript
// mods.immersiveoilum.DistillationTower.remove(formuła ciągowaNazwa);

mods.immersivepetroleum um.DistillationTower.remove("olej kraking");
```

## usuń wszystko

| Nazwisko | Typ |
| -------- | --- |
|          |     |

Przykład:
```ZenScript
mods.immersivepetroleum um.DistillationTower.removeAll();
```

# Konstruktor

## konstruktor

| Nazwisko | Typ |
| -------- | --- |
|          |     |

Przykład:
```zenscript
// new mods.immersivepetroleum um.DistillationBuilder();

new mods.immersivepetroleum um.DistillationBuilder();
```

## setOutputFluid

| Nazwisko       | Typ                                         |
| -------------- | ------------------------------------------- |
| Płyn wyjściowy | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

Przykład:
```zenscript
// builderInstance.setOutputFluids(IFluidStack[] fluidOutputs);

builderInstance.setOutputFluids([<fluid:minecraft:water> * 1]);
```

## addByproduct(IItemStack item, int choance)

| Nazwisko               | Typ                                            |
| ---------------------- | ---------------------------------------------- |
| Artykuł 1 1 0 – Ogółem | [Stos przedmiotów](/Vanilla/Items/IItemStack/) |
| Szansa                 | Liczba całkowita (0 - 100)                     |

Przykład:
```zenscript
// builderInstance.addByproduct(element IItemStack , int choance);

builderInstance.addByproduct(<item:minecraft:cobblestone>, 50);
```

## addByproduct(element IItemStack, podwójna szansa)

| Nazwisko               | Typ                                            |
| ---------------------- | ---------------------------------------------- |
| Artykuł 1 1 0 – Ogółem | [Stos przedmiotów](/Vanilla/Items/IItemStack/) |
| Szansa                 | Podwójne (0,0 - 1,0)                           |

Przykład:
```zenscript
// builderInstance.addByproduct(IItemStack, podwójna szansa);

builderInstance.addByproduct(<item:minecraft:stone>, 0.25);
```

## setEnergyAndTime

| Nazwisko | Typ                    |
| -------- | ---------------------- |
| Flux/t   | Liczba całkowita (>=1) |
| Ticki    | Liczba całkowita (>=1) |

Przykład:
```zenscript
// builderInstance.setEnergyAndTime(int fluxPerTick, int ticks);

builderInstance.setEnergyAndTime(1024, 1);
```

## setEnergy

| Nazwisko    | Typ                    |
| ----------- | ---------------------- |
| FluxPerTick | Liczba całkowita (>=1) |

Przykład:
```zenscript
// builderInstance.setEnergy(int fluxPerTick);

builderInstance.setEnergy(1024);
```

## setTime

| Nazwisko | Typ                    |
| -------- | ---------------------- |
| Ticki    | Liczba całkowita (>=1) |

Przykład:
```zenscript
// builderInstance.setTime(int ticks);

builderInstance.setTime(1);
```

## kompilacja

| Nazwisko       | Typ         |
| -------------- | ----------- |
| Nazwa przepisu | Ciąg znaków |

Przykład:
```zenscript
// builderInstance.build(String recipeName);

builderInstance.build("example_name");
```

---

Kopiuj/Wklej przykłady:
```zenscript
nowy DistillationBuilder()
    .setOutputFluids([<fluid:minecraft:water> * 1]) // tablica płynów wyjściowych
    . etInputFluid(<tag:minecraft:lava>, 500) // Input Fluid Tag i zamocowanie płynu w mB
    . ddByproduct(<item:minecraft:cobblestone>, 50) // Szansa przy użyciu liczby całkowitej (0 - 100)
    .addByproduct(<item:minecraft:stone>, 0.25) // Szansa przy użyciu podwójnej (0. - 1.0)
    .addByproduct(<item:minecraft:obsidian>, 0. 07) // Liczba całkowita jest dla wygody, użycie podwójnej daje więcej kontroli
    . etEnergyAndTime(1024, 1) // Można robić indywidualnie, z setEnergy(int) i setTime(int)
    . uild("lava_to_solids");

new DistillationBuilder()
    . etOutputFluids([<fluid:minecraft:water> * 500])
    .setInputFluid(<tag:forge:concrete>, 500)
    ddByproduct(<item:minecraft:gravel>, 0.5)
    .addByproduct(<item:minecraft:sand>, 0.25)
    .addByproduct(<item:minecraft:sand>, 0. 5)
    .addByproduct(<item:minecraft:clay_ball>, 0.125)
    .setEnergy(2048) // 2048 jest domyślnym elementem energii.
    .setTime(1) // 1 jest domyślnym Czasem.
    .build("concrete_reversal");
```
