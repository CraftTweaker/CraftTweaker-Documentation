# Combustion Generator

## Package

`import mods.enderio.CombustionGen;`

## Methods

- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) fuel** The fluid fuel to add.
- **int powerPerCycleRF** Amount of energy created per tick in a base-line machine.
- **int totalBurnTime** Total burn time of one bucket of fuel.
- **[ILiquidStack](/Vanilla/Liquids/ILiquidStack/) coolant** The fluid coolant to add.
- **float degreesCoolingPerMB** How much heat in the generator can one mB of the added coolant absorb until it heats up all the way?

## Add Fuel

```zenscript
mods.enderio.CombustionGen.addFuel(ILiquidStack fuel, int powerPerCycleRF, int totalBurnTime);

mods.enderio.CombustionGen.addFuel(<liquid:lava>, 25, 40);
```

## Add Coolant

```zenscript
mods.enderio.CombustionGen.addCoolant(ILiquidStack fluid coolant, float degreesCoolingPerMB);

mods.enderio.CombustionGen.addCoolant(<liquid:liquid_sunshine>, 100);
```

## Remove Fuel

```zenscript
mods.enderio.CombustionGen.removeFuel(ILiquidStack fuel);

mods.enderio.CombustionGen.removeFuel(<liquid:fire_water>);
```

## Remove Coolant

```zenscript
mods.enderio.AlloySmelter.removeCoolant(ILiquidStack coolant);

mods.enderio.AlloySmelter.removeCoolant(<liquid:water>);
```