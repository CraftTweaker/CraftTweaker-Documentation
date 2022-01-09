# Distillation

## remove

| Nome         | Tipo   |
| ------------ | ------ |
| Nome Ricetta | String |

Example:
```ZenScript
// mods.immersivepetroleum.DistillationTower.remove(String recipeName);

mods.immersivepetroleum.DistillationTower.remove("oilcracking");
```

## removeAll

| Nome | Tipo |
| ---- | ---- |
|      |      |

Example:
```ZenScript
mods.immersivepetroleum.DistillationTower.removeAll();
```

# Builder

## costruttore

| Nome | Tipo |
| ---- | ---- |
|      |      |

Example:
```zenscript
// new mods.immersivepetroleum.DistillationBuilder();

new mods.immersivepetroleum.DistillationBuilder();
```

## setOutputFluid

| Nome             | Tipo       |
| ---------------- | ---------- |
| Fluido In Uscita | Fluidstack |

Example:
```zenscript
// builderInstance.setOutputFluids(IFluidStack[] fluidOutputs);

builderInstance.setOutputFluids([<fluid:minecraft:water> * 1]);
```

## addByproduct(IItemStack item, int chance)

| Nome   | Tipo                                       |
| ------ | ------------------------------------------ |
| Item   | [ItemStack](/vanilla/api/items/IItemStack) |
| Chance | Intero (0 - 100)                           |

Example:
```zenscript
// builderInstance.addByproduct(IItemStack item, int chance);

builderInstance.addByproduct(<item:minecraft:cobblestone>, 50);
```

## addByproduct(IItemStack item, doppia possibilità)

| Nome   | Tipo                                       |
| ------ | ------------------------------------------ |
| Item   | [ItemStack](/vanilla/api/items/IItemStack) |
| Chance | Doppio (0,0 - 1,0)                         |

Example:
```zenscript
// builderInstance.addByproduct(IItemStack item, double chance);

builderInstance.addByproduct(<item:minecraft:stone>, 0.25);
```

## setEnergyAndTime

| Nome   | Tipo         |
| ------ | ------------ |
| Flux/t | Intero (>=1) |
| Zecche | Intero (>=1) |

Example:
```zenscript
// builderInstance.setEnergyAndTime(int fluxPerTick, int ticks);

builderInstance.setEnergyAndTime(1024, 1);
```

## setEnergy

| Nome        | Tipo         |
| ----------- | ------------ |
| FluxPerTick | Intero (>=1) |

Example:
```zenscript
// builderInstance.setEnergy(int fluxPerTick);

builderInstance.setEnergy(1024);
```

## setTime

| Nome   | Tipo         |
| ------ | ------------ |
| Zecche | Intero (>=1) |

Example:
```zenscript
// builderInstance.setTime(int ticks);

builderInstance.setTime(1);
```

## build

| Nome         | Tipo   |
| ------------ | ------ |
| Nome Ricetta | String |

Example:
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
