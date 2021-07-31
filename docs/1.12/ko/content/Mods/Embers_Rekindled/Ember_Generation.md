# Ember Generation

## Importing the Package
```zenscript
import mods.embers.EmberGeneration;
```

## Ember Values
```zenscript
mods.embers.EmberGeneration.addEmberFuel(IIngredient item, double ember);
mods.embers.EmberGeneration.removeEmberFuel(IItemStack item);
```

## Pressure Refinery
```zenscript
mods.embers.EmberGeneration.addMetalCoefficient(IIngredient item, double coefficient);
```

## Combustion/Catalysis Chamber
```zenscript
mods.embers.EmberGeneration.addCombustionFuel(IIngredient item, double coefficient);
mods.embers.EmberGeneration.removeCombustionFuel(IItemStack item);

mods.embers.EmberGeneration.addCatalysisFuel(IIngredient item, double coefficient);
mods.embers.EmberGeneration.removeCatalysisFuel(IItemStack item);
```

## Boiler
```zenscript
mods.embers.EmberGeneration.addBoilerFluid(ILiquidStack fluid, ILiquidStack gas);
mods.embers.EmberGeneration.removeBoilerFluid(ILiquidStack input);
```

## Steam Engine
```zenscript
mods.embers.EmberGeneration.addSteamEngineFuel(ILiquidStack fluid, double multiplier);
mods.embers.EmberGeneration.removeSteamEngineFuel(ILiquidStack fluid);
```