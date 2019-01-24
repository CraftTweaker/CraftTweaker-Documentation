# Combustion Generator
## Package
`import mods.enderio.CombustionGen`

## Add Fuel
```
mods.enderio.CombustionGen.addFuel(ILiquidStack fluid fuel, int RF per tick, int totalBurnTime);

mods.enderio.CombustionGen.addFuel(<minecraft:lava>, 25, 40>]);
```

## Add Coolant

```
mods.enderio.AlloySmelter.addCoolant(ILiquidStack fluid coolant, float amountofheatcanabsorb)

mods.enderio.AlloySmelter.addCoolant(minecraft:water, 100)
```
## Remove Fuel
```
mods.enderio.CombustionGen.removeFuel(minecraft:lava);

mods.enderio.CombustionGen.removeFuel(minecraft:lava);
```

## Remove Coolant

```
mods.enderio.AlloySmelter.removeCoolant(ILiquidStack coolant);

mods.enderio.AlloySmelter.removeCoolant(minecraft:water);
```
