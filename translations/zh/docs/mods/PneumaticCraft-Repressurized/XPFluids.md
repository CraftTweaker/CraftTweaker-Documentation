::requiredMod[PneumaticCraft: Repressurized]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/pneumaticcraft-repressurized}

Requires PneumaticCraft: Repressurized v2.12.6 or newer.

# Experience Fluids

Experience Fluids provide a way to register extra fluids (or fluid tags) with PneumaticCraft to be treated as experience fluids. Such fluids are assigned a mB -> XP point ratio, and can be accepted or output by an Aerial Interface with an installed Dispenser upgrade. Where multiple fluids are available, the Aerial Interface GUI provides an option to select which fluid that particular Aerial Interface should use.

By default, any fluids in the `forge:experience` fluid tag are registered with a ratio of 20mB -> 1 XP point. This includes PneumaticCraft's own Memory Essence fluid. Changing the ratio for `forge:experience` is very strongly *not advised* since other mods also use this ratio. If you want to have other fluids treated as experience fluids with the standard 20mB/XP ratio, you should add that fluid to the `forge:experience` fluid tag rather than registering it here.

## 方法

#### Registering Fluids

The following script adds Lava as an experience fluid with an XP ratio of 1000mB Lava to 1 XP point:

```zenscript
// mods.pneumaticcraft.XPFluid.registerXPFluid(fluid as CTFluidIngredient, ratio as int)
mods.pneumaticcraft.XPFluid.registerXPFluid(<fluid:minecraft:lava> * 1, 1000)
// equivalent to above
mods.pneumaticcraft.XPFluid.registerXPFluid(<fluid:minecraft:lava> * 1000, 1000000)
```

The following script unregisters all `forge:experience` fluids:
```zenscript
mods.pneumaticcraft.XPFluid.unregisterXPFluid(<tag:fluids:forge:experience>);
``` 
