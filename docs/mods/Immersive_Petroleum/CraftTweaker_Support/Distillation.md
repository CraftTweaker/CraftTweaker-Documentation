# Distillation

## remove

| Name        | Type        |
|-------------|-------------|
| Recipe Name | String      |

Example:
```ZenScript
// mods.immersivepetroleum.DistillationTower.remove(String recipeName);

mods.immersivepetroleum.DistillationTower.remove("oilcracking");
```

## removeAll

| Name        | Type        |
|-------------|-------------|

Example:
```ZenScript
mods.immersivepetroleum.DistillationTower.removeAll();
```

# Builder

## constructor

| Name        | Type        |
|-------------|-------------|
| Recipe Name | String      |

Example:
```zenscript
// new mods.immersivepetroleum.DistillationBuilder(String recipeName);

new mods.immersivepetroleum.DistillationBuilder("example_name");
```

## setOutputFluid

| Name       | Type        |
|------------|-------------|
| Output Fluid | [Fluidstack](/Vanilla/Liquids/IFluidStack/)|

Example:
```zenscript
// mods.immersivepetroleum.DistillationBuilder.setOutputFluids(IFluidStack[] fluidOutputs);

mods.immersivepetroleum.DistillationBuilder.setOutputFluids([<fluid:minecraft:water> * 1]);
```

## addByproduct(IItemStack item, int chance)

| Name       | Type                 |
|------------|----------------------|
| Item       | [ItemStack](/Vanilla/Items/IItemStack/)|
| Chance     | Integer (0 - 100)    |

Example:
```zenscript
// mods.immersivepetroleum.DistillationBuilder.addByproduct(IItemStack item, int chance);

mods.immersivepetroleum.DistillationBuilder.addByproduct(<item:minecraft:cobblestone>, 50);
```

## addByproduct(IItemStack item, double chance)

| Name       | Type               |
|------------|--------------------|
| Item       | [ItemStack](/Vanilla/Items/IItemStack/) |
| Chance     | Double (0.0 - 1.0) |

Example:
```zenscript
// mods.immersivepetroleum.DistillationBuilder.addByproduct(IItemStack item, double chance);

mods.immersivepetroleum.DistillationBuilder.addByproduct(<item:minecraft:stone>, 0.25);
```

## setEnergyAndTime

| Name   | Type          |
|--------|---------------|
| Flux/t | Integer (>=1) |
| Ticks  | Integer (>=1) |

Example:
```zenscript
// mods.immersivepetroleum.DistillationBuilder.setEnergyAndTime(int fluxPerTick, int ticks);

mods.immersivepetroleum.DistillationBuilder.setEnergyAndTime(1024, 1);
```

## setEnergy

| Name        | Type               |
|-------------|--------------------|
| FluxPerTick | Integer (>=1)      |

Example:
```zenscript
// mods.immersivepetroleum.DistillationBuilder.setEnergy(int fluxPerTick);

mods.immersivepetroleum.DistillationBuilder.setEnergy(1024);
```

## setTime

| Name        | Type               |
|-------------|--------------------|
| Ticks       | Integer (>=1)      |

Example:
```zenscript
// mods.immersivepetroleum.DistillationBuilder.setTime(int ticks);

mods.immersivepetroleum.DistillationBuilder.setTime(1);
```

## build

| Name        | Type               |
|-------------|--------------------|

Example:
```zenscript
// mods.immersivepetroleum.DistillationBuilder.build();

mods.immersivepetroleum.DistillationBuilder.build();
```

---

Copy/Paste examples:
```zenscript
new DistillationBuilder("builder_test")
	.setOutputFluids([<fluid:minecraft:water> * 1]) // Array of output fluids
	.setInputFluid(<tag:minecraft:lava>, 500) // Input Fluid Tag and the ammount of fluid in mB
	.addByproduct(<item:minecraft:cobblestone>, 50) // Chance using integer (0 - 100)
	.addByproduct(<item:minecraft:stone>, 0.25) // Chance using double (0.0 - 1.0)
	.addByproduct(<item:minecraft:obsidian>, 0.007) // Integer is for convenience, using double gives more control
	.setEnergyAndTime(1024, 1) // Can be done individualy with setEnergy(int) and setTime(int)
	.build();

new DistillationBuilder("test_distillation")
	.setOutputFluids([<fluid:minecraft:water> * 500])
	.setInputFluid(<tag:forge:concrete>, 500)
	.addByproduct(<item:minecraft:gravel>, 0.5)
	.addByproduct(<item:minecraft:sand>, 0.25)
	.addByproduct(<item:minecraft:sand>, 0.25)
	.addByproduct(<item:minecraft:clay_ball>, 0.125)
	.setEnergy(2048) // 2048 is the Default for Energy.
	.setTime(1) // 1 is the Default for Time.
	.build();
```
