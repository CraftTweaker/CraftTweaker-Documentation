# Combustion Generator
## Package
`import mods.enderio.CombustionGen`

## Methods
- **ILiquidStack fuel** The fluid fuel to add.
- **int powerPerCycleRF** Amount of energy created per tick in a base-line machine.
- **int totalBurnTime** Total burn time of one bucket of fuel.
- **ILiquidStack coolant** The fluid coolant to add.
- **float degreesCoolingPerMB** How much heat can one mB of the coolant absorb until it heats up by 1 K?

## Add Fuel
```
mods.enderio.CombustionGen.addFuel(ILiquidStack fuel, int powerPerCycleRF, int totalBurnTime);

mods.enderio.CombustionGen.addFuel(<minecraft:lava>, 25, 40>]);
```

## Add Coolant

```
mods.enderio.AlloySmelter.addCoolant(ILiquidStack fluid coolant, float degreesCoolingPerMB)

mods.enderio.AlloySmelter.addCoolant(enderio:liquid_sunshine, 100)
```
## Remove Fuel
```
mods.enderio.CombustionGen.removeFuel(ILiquidStack fuel);

mods.enderio.CombustionGen.removeFuel(enderio:fire_water;
```

## Remove Coolant

```
mods.enderio.AlloySmelter.removeCoolant(ILiquidStack coolant);

mods.enderio.AlloySmelter.removeCoolant(minecraft:water);
```
