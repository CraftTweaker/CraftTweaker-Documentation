# Distillation

## remove

| Name              | Type   |
| ----------------- | ------ |
| Nom de la recette | String |

Example:
```ZenScript
// mods.immersivepetroleum.DistillationTower.remove(String recipeName);

mods.immersivepetroleum.DistillationTower.remove("oilcracking");
```

## removeAll

| Name | Type |
| ---- | ---- |
|      |      |

Example:
```ZenScript
mods.immersivepetroleum.DistillationTower.removeAll();
```

# Builder

## constructeur

| Name | Type |
| ---- | ---- |
|      |      |

Example:
```zenscript
// new mods.immersivepetroleum.DistillationBuilder();

new mods.immersivepetroleum.DistillationBuilder();
```

## setOutputFluid

| Name             | Type                                        |
| ---------------- | ------------------------------------------- |
| Fluide de sortie | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

Example:
```zenscript
// builderInstance.setOutputFluids(IFluidStack[] fluidOutputs);

builderInstance.setOutputFluids([<fluid:minecraft:water> * 1]);
```

## addByproduct(IItemStack item, int chance)

| Name   | Type                                              |
| ------ | ------------------------------------------------- |
| Item   | [format@@0 ItemStack](/Vanilla/Items/IItemStack/) |
| Chance | Nombre entier (0 - 100)                           |

Example:
```zenscript
// builderInstance.addByproduct(IItemStack item, int chance);

builderInstance.addByproduct(<item:minecraft:cobblestone>, 50);
```

## addByproduct(IItemStack item, double chance)

| Name   | Type                                              |
| ------ | ------------------------------------------------- |
| Item   | [format@@0 ItemStack](/Vanilla/Items/IItemStack/) |
| Chance | Double (0.0 - 1.0)                                |

Example:
```zenscript
// builderInstance.addByproduct(IItemStack item, double chance);

builderInstance.addByproduct(<item:minecraft:stone>, 0.25);
```

## setEnergyAndTime

| Name    | Type         |
| ------- | ------------ |
| Flux/t  | Entier (>=1) |
| Billets | Entier (>=1) |

Example:
```zenscript
// builderInstance.setEnergyAndTime(int fluxPerTick, int ticks);

builderInstance.setEnergyAndTime(1024, 1);
```

## setÉnergie

| Name        | Type         |
| ----------- | ------------ |
| FluxPerTick | Entier (>=1) |

Example:
```zenscript
// builderInstance.setEnergy(int fluxPerTick);

builderInstance.setEnergy(1024);
```

## setTime

| Name    | Type         |
| ------- | ------------ |
| Billets | Entier (>=1) |

Example:
```zenscript
// builderInstance.setTime(int ticks);

builderInstance.setTime(1);
```

## build

| Name              | Type   |
| ----------------- | ------ |
| Nom de la recette | String |

Example:
```zenscript
// builderInstance.build(String recipeName);

builderInstance.build("example_name");
```

---

Copier/Coller les exemples:
```zenscript
new DistillationBuilder()
    .setOutputFluids([<fluid:minecraft:water> * 1]) // Array of output fluids
    .setInputFluid(<tag:minecraft:lava>, 500) // Input Fluid Tag and the ammount of fluid in mB
    .addByproduct(<item:minecraft:cobblestone>, 50) // Chance using integer (0 - 100)
    .addByproduct(<item:minecraft:stone>, 0.25) // Chance using double (0.0 - 1.0)
    .addByproduct(<item:minecraft:obsidian>, 0.007) // Integer is for convenience, using double gives more control
    .setEnergyAndTime(1024, 1) // Can be done individualy with setEnergy(int) and setTime(int)
    .build("lava_to_solids");

new DistillationBuilder()
    .setOutputFluids([<fluid:minecraft:water> * 500])
    .setInputFluid(<tag:forge:concrete>, 500)
    .addByproduct(<item:minecraft:gravel>, 0.5)
    .addByproduct(<item:minecraft:sand>, 0.25)
    .addByproduct(<item:minecraft:sand>, 0.25)
    .addByproduct(<item:minecraft:clay_ball>, 0.125)
    .setEnergy(2048) // 2048 is the Default for Energy.
    .setTime(1) // 1 est la valeur par défaut pour le temps.
    .build("béton_reversal");
```
