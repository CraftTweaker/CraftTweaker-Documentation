# Distillazione

## rimuovi

| Nome         | Tipo    |
| ------------ | ------- |
| Nome Ricetta | Stringa |

Esempio:
```ZenScript
// mods.immersivepetroleum.DistillationTower.remove(String recipeName);

mods.immersivepetroleum.DistillationTower.remove("oilcracking");
```

## removeAll

| Nome | Tipo |
| ---- | ---- |
|      |      |

Esempio:
```ZenScript
mods.immersivepetroleum.DistillationTower.removeAll();
```

# Costruttore

## costruttore

| Nome | Tipo |
| ---- | ---- |
|      |      |

Esempio:
```zenscript
// new mods.immersivepetroleum.DistillationBuilder();

new mods.immersivepetroleum.DistillationBuilder();
```

## setOutputFluid

| Nome             | Tipo                                        |
| ---------------- | ------------------------------------------- |
| Fluido In Uscita | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

Esempio:
```zenscript
// builderInstance.setOutputFluids(IFluidStack[] fluidOutputs);

builderInstance.setOutputFluids([<fluid:minecraft:water> * 1]);
```

## addByproduct(IItemStack item, int chance)

| Nome        | Tipo                                    |
| ----------- | --------------------------------------- |
| Elemento    | [ItemStack](/Vanilla/Items/IItemStack/) |
| Probabilità | Intero (0 - 100)                        |

Esempio:
```zenscript
// builderInstance.addByproduct(IItemStack item, int chance);

builderInstance.addByproduct(<item:minecraft:cobblestone>, 50);
```

## addByproduct(IItemStack item, doppia possibilità)

| Nome        | Tipo                                    |
| ----------- | --------------------------------------- |
| Elemento    | [ItemStack](/Vanilla/Items/IItemStack/) |
| Probabilità | Doppio (0,0 - 1,0)                      |

Esempio:
```zenscript
// builderInstance.addByproduct(IItemStack item, double chance);

builderInstance.addByproduct(<item:minecraft:stone>, 0.25);
```

## setEnergyAndTime

| Nome   | Tipo         |
| ------ | ------------ |
| Flux/t | Intero (>=1) |
| Zecche | Intero (>=1) |

Esempio:
```zenscript
// builderInstance.setEnergyAndTime(int fluxPerTick, int ticks);

builderInstance.setEnergyAndTime(1024, 1);
```

## setEnergy

| Nome        | Tipo         |
| ----------- | ------------ |
| FluxPerTick | Intero (>=1) |

Esempio:
```zenscript
// builderInstance.setEnergy(int fluxPerTick);

builderInstance.setEnergy(1024);
```

## setTime

| Nome   | Tipo         |
| ------ | ------------ |
| Zecche | Intero (>=1) |

Esempio:
```zenscript
// builderInstance.setTime(int ticks);

builderInstance.setTime(1);
```

## build

| Nome         | Tipo    |
| ------------ | ------- |
| Nome Ricetta | Stringa |

Esempio:
```zenscript
// builderInstance.build(String recipeName);

builderInstance.build("example_name");
```

---

Esempi di copia/incolla:
```zenscript
new DistillationBuilder()
    .setOutputFluids([<fluid:minecraft:water> * 1]) // Array of output fluids
    . etInputFluid(<tag:minecraft:lava>, 500) // Input Fluid Tag e la montatura del fluido in mB
    . ddByproduct(<item:minecraft:cobblestone>, 50) // Possibilità di utilizzare interi (0 - 100)
    .addByproduct(<item:minecraft:stone>, 0.25) // Possibilità di doppio (0. - 1.0)
    .addByproduct(<item:minecraft:obsidian>, 0. 07) // Integer è per comodità, utilizzando doppio dà più controllo
    . etEnergyAndTime(1024, 1) // Può essere fatto individualmente con setEnergy(int) e setTime(int)
    . uild("lava_to_solids");

new DistillationBuilder()
    . etOutputFluids([<fluid:minecraft:water> * 500])
    .setInputFluid(<tag:forge:concrete>, 500)
    . ddByproduct(<item:minecraft:gravel>, 0.5)
    .addByproduct(<item:minecraft:sand>, 0.25)
    .addByproduct(<item:minecraft:sand>, 0. 5)
    .addByproduct(<item:minecraft:clay_ball>, 0.125)
    .setEnergy(2048) // 2048 è il Default for Energy.
    .setTime(1) // 1 è il Predefinito per il tempo.
    .build("concrete_reversal");
```
