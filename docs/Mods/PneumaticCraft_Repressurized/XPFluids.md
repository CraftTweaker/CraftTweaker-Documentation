
# XP Fluids

XP Fluids are used in PneumaticCraft: Repressurized by the Aerial Interface, a powerful block which can remotely interface with a linked player.  XP Fluids pumped into the Aerial Interface are converted to player experience levels, and XP Fluids pumped out are drawn from the player's experience.

By default, the following fluids are recognized by the Aerial Interface:

* XP Juice (EnderIO, Cyclic, Openblocks)
* Essence of Knowledge (Thermal Expansion)
* Mob Essence (Industrial Foregoing)

This method allows arbitrary other fluids to be used by the Aerial Interface as XP fluids.

## Calling

You can call the Liquid Fuels package using `mods.pneumaticcraft.xpfluid`.

## Removing

This function removes the [ILiquidStack](/Vanilla/Variable_Types/ILiquidStack) `fluid` its fuel value:

```
mods.pneumaticcraft.xpfluid.removeXPFluid(ILiquidStack fluid);
// Example
mods.pneumaticcraft.xpfluid.removeXPFluid(<liquid:xpjuice);
```

This function removes *all* registered XP fluids:

```
mods.pneumaticcraft.liquidfuel.removeAllXPFluids();
```

## Adding

The following functions can be used to register fluids as XP fluids:

```java
// Register a certain liquid as an XP fluids. xpRatio defines the amount of player XP per millibucket of fluid.
mods.pneumaticcraft.xpfluid.addXPFluid(ILiquidStack fluid, double ratio);

// Example: register LPG as an XP fluid worth 10 XP per mB
mods.pneumaticcraft.liquidfuel.addFuel(<liquid:lpg>, 10);
```
