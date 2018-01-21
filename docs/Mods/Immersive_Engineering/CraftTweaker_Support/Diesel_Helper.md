# Diesel Helper
The Diesel Handler package can be used to change IE fuels.

## Calling The Package
You can call the DieselHandler package using `mods.immersiveengineering.DieselHandler`.

## Add Fuel

|Required  |Type                 |Data Type                                          										|
|----------|---------------------|------------------------------------------------------------------------------------------|
|Required  |Output               |[Fluidstack](/Vanilla/Liquids/ILiquidStack)   											|
|Required  |Input                |Integer      																				|

### Example
```JAVA
//Example:
mods.immersiveengineering.DieselHandler.addFuel(ILiquidStack fuel, int time);

mods.immersiveengineering.DieselHandler.addFuel(<liquid:water>, 2000);
```


## Remove Fuel

|Required  |Type                 |Data Type                                          										|
|----------|---------------------|------------------------------------------------------------------------------------------|
|Required  |Output               |[Fluidstack](/Vanilla/Liquids/ILiquidStack)  												|

### Example
```JAVA
//Example:
mods.immersiveengineering.DieselHandler.removeFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.removeFuel(<liquid:water>);
```



## Add Drill Fuel

|Required  |Type                 |Data Type                                          										|
|----------|---------------------|------------------------------------------------------------------------------------------|
|Required  |Output               |[Fluidstack](/Vanilla/Liquids/ILiquidStack)  												|

### Example
```JAVA
//Example:
mods.immersiveengineering.DieselHandler.addDrillFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.addDrillFuel(<liquid:water>);
```


## Remove Drill Fuel

|Required  |Type                 |Data Type                                          										|
|----------|---------------------|------------------------------------------------------------------------------------------|
|Required  |Output               |[Fluidstack](/Vanilla/Liquids/ILiquidStack)  												|

### Example
```JAVA
//Example:
mods.immersiveengineering.DieselHandler.removeDrillFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.removeDrillFuel(<liquid:water>);
```