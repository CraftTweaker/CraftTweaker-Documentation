# Distillation

## remove

| Nombre        | Type   |
| ------------- | ------ |
| Nombre Receta | String |

Example:
```ZenScript
// mods.immersivepetroleum.DistillationTower.remove(String recipeName);

mods.immersivepetroleum.DistillationTower.remove("oilcracking");
```

## removeAll

| Nombre | Type |
| ------ | ---- |
|        |      |

Example:
```ZenScript
mods.immersivepetroleum.DistillationTower.removeAll();
```

# Builder

## constructor

| Nombre | Type |
| ------ | ---- |
|        |      |

Example:
```zenscript
// new mods.immersivepetroleum.DistillationBuilder();

new mods.immersivepetroleum.DistillationBuilder();
```

## setOutputFluid

| Nombre           | Type       |
| ---------------- | ---------- |
| Fluido de salida | Fluidstack |

Example:
```zenscript
// builderInstance.setOutputFluids(IFluidStack[] fluidOutputs);

builderInstance.setOutputFluids([<fluid:minecraft:water> * 1]);
```

## addByproduct(artículo ItemStack, oportunidad de int)

| Nombre | Type                                             |
| ------ | ------------------------------------------------ |
| Item   | [Pila de objetos](/vanilla/api/items/IItemStack) |
| Chance | Entero (0 - 100)                                 |

Example:
```zenscript
// builderInstance.addByproduct(ItemStack item, int chance);

builderInstance.addByproduct(<item:minecraft:cobblestone>, 50);
```

## addByproduct(ítemStack artículo, doble oportunidad)

| Nombre | Type                                             |
| ------ | ------------------------------------------------ |
| Item   | [Pila de objetos](/vanilla/api/items/IItemStack) |
| Chance | Doble (0.0 - 1.0)                                |

Example:
```zenscript
// builderInstance.addByproduct(IItemStack item, double chance);

builderInstance.addByproduct(<item:minecraft:stone>, 0.25);
```

## setEnergyAndTime

| Nombre | Type         |
| ------ | ------------ |
| Flux/t | Entero (>=1) |
| Ticks  | Entero (>=1) |

Example:
```zenscript
// builderInstance.setEnergyAndTime(int fluxPerTick, int ticks);

builderInstance.setEnergyAndTime(1024, 1);
```

## setEnergy

| Nombre      | Type         |
| ----------- | ------------ |
| FluxPerTick | Entero (>=1) |

Example:
```zenscript
// builderInstance.setEnergy(int fluxPerTick);

builderInstance.setEnergy(1024);
```

## setTime

| Nombre | Type         |
| ------ | ------------ |
| Ticks  | Entero (>=1) |

Example:
```zenscript
// builderInstance.setTime(int ticks);

builderInstance.setTime(1);
```

## build

| Nombre        | Type   |
| ------------- | ------ |
| Nombre Receta | String |

Example:
```zenscript
// builderInstance.build(String recipeName);

builderInstance.build("example_name");
```

---

Copiar/Pegar ejemplos:
```zenscript
new DistillationBuilder()
    .setOutputFluids([<fluid:minecraft:water> * 1]) // Array de fluidos de salida
    . etInputFluid(<tag:minecraft:lava>, 500) // Input Fluid Tag and the ammount of fluid in mB
    . ddByproduct(<item:minecraft:cobblestone>, 50) // Oportunidad usando entero (0 - 100)
    .addByproduct(<item:minecraft:stone>, 0.25) // Oportunidad usando doble (0. - 1.0)
    .addByproduct(<item:minecraft:obsidian>, 0. 07) // Integer es para conveniencia, usar doble da más control
    . etEnergyAndTime(1024, 1) // Se puede hacer individualmente con setEnergy(int) y setTime(int)
    . uild("lava_to_solids");

new DistillationBuilder()
    . etOutputFluids([<fluid:minecraft:water> * 500])
    .setInputFluid(<tag:forge:concrete>, 500)
    . ddByproduct(<item:minecraft:gravel>, 0.5)
    .addByproduct(<item:minecraft:sand>, 0.25)
    .addByproduct(<item:minecraft:sand>, 0. 5)
    .addByproduct(<item:minecraft:clay_ball>, 0.125)
    .setEnergy(2048) // 2048 es el defecto de la energía.
    .setTime(1) // 1 es el predeterminado para el tiempo.
    .build("concrete_reversal");
```
