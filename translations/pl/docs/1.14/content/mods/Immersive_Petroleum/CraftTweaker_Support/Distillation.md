# Distillation

## remove

| Name           | Type   |
| -------------- | ------ |
| Nazwa przepisu | String |

Example:
```ZenScript
// mods.immersiveoilum.DistillationTower.remove(formuła ciągowaNazwa);

mods.immersivepetroleum um.DistillationTower.remove("olej kraking");
```

## removeAll

| Name | Type |
| ---- | ---- |
|      |      |

Example:
```ZenScript
mods.immersivepetroleum um.DistillationTower.removeAll();
```

# Builder

## konstruktor

| Name | Type |
| ---- | ---- |
|      |      |

Example:
```zenscript
// new mods.immersivepetroleum um.DistillationBuilder();

new mods.immersivepetroleum um.DistillationBuilder();
```

## setOutputFluid

| Name           | Type       |
| -------------- | ---------- |
| Płyn wyjściowy | Fluidstack |

Example:
```zenscript
// builderInstance.setOutputFluids(IFluidStack[] fluidOutputs);

builderInstance.setOutputFluids([<fluid:minecraft:water> * 1]);
```

## addByproduct(IItemStack item, int choance)

| Name   | Type                                              |
| ------ | ------------------------------------------------- |
| Item   | [Stos przedmiotów](/vanilla/api/items/IItemStack) |
| Chance | Liczba całkowita (0 - 100)                        |

Example:
```zenscript
// builderInstance.addByproduct(element IItemStack , int choance);

builderInstance.addByproduct(<item:minecraft:cobblestone>, 50);
```

## addByproduct(element IItemStack, podwójna szansa)

| Name   | Type                                              |
| ------ | ------------------------------------------------- |
| Item   | [Stos przedmiotów](/vanilla/api/items/IItemStack) |
| Chance | Podwójne (0,0 - 1,0)                              |

Example:
```zenscript
// builderInstance.addByproduct(IItemStack, podwójna szansa);

builderInstance.addByproduct(<item:minecraft:stone>, 0.25);
```

## setEnergyAndTime

| Name   | Type                   |
| ------ | ---------------------- |
| Flux/t | Liczba całkowita (>=1) |
| Ticki  | Liczba całkowita (>=1) |

Example:
```zenscript
// builderInstance.setEnergyAndTime(int fluxPerTick, int ticks);

builderInstance.setEnergyAndTime(1024, 1);
```

## setEnergy

| Name        | Type                   |
| ----------- | ---------------------- |
| FluxPerTick | Liczba całkowita (>=1) |

Example:
```zenscript
// builderInstance.setEnergy(int fluxPerTick);

builderInstance.setEnergy(1024);
```

## setTime

| Name  | Type                   |
| ----- | ---------------------- |
| Ticki | Liczba całkowita (>=1) |

Example:
```zenscript
// builderInstance.setTime(int ticks);

builderInstance.setTime(1);
```

## build

| Name           | Type   |
| -------------- | ------ |
| Nazwa przepisu | String |

Example:
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
