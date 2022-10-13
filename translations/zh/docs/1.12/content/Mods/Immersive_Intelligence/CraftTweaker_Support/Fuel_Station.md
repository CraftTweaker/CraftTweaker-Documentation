::requiredMod[Immersive Intelligence]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-intelligence}

# Fuel Station

The `FuelStation` package can be used to modify the Immersive Intelligence Fuel Station recipes.

## Importing the Package

```zenscript
import mods.immersiveintelligence.FuelStation;
```

## Adding Recipes

### Parameters

| 类型                                               | 名称        | Required |
| ------------------------------------------------ | --------- | -------- |
| 字符串[string]                                      | ClassPath | Yes      |
| [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)[] | Fluids    | Yes      |

### 语句

```zenscript
mods.immersiveintelligence.FuelStation.addVehicle(String classPath, ILiquidStack[] fluids);
```

### 例子

```zenscript
mods.immersiveintelligence.FuelStation.addVehicle("su.examplemod.entities.cars.lada", [<liquid:samogon>]);
```