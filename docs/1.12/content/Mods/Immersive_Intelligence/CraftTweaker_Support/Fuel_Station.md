::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Fuel Station

The `FuelStation` package can be used to modify the Immersive Intelligence Fuel Station recipes.

## Importing the Package

```zenscript
import mods.immersiveintelligence.FuelStation;
```

## Adding Recipes

### Parameters

| Type                                             | Name            | Required  |
|--------------------------------------------------|-----------------|-----------|
| String                                           | ClassPath       | Yes       |
| [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)[] | Fluids          | Yes       |

### Syntax

```zenscript
mods.immersiveintelligence.FuelStation.addVehicle(String classPath, ILiquidStack[] fluids);
```

### Example

```zenscript
mods.immersiveintelligence.FuelStation.addVehicle("su.examplemod.entities.cars.lada", [<liquid:samogon>]);
```