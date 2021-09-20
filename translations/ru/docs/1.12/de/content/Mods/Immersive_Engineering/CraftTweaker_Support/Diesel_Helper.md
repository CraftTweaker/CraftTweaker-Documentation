# Diesel Helper

The Diesel Handler package can be used to change IE fuels.

## Hinzufügen des Packages

You can call the DieselHandler package using `mods.immersiveengineering.DieselHandler`.

## Add Fuel

| Benötigt | Тип    | Datentyp                                     |
| -------- | ------ | -------------------------------------------- |
| Benötigt | Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Benötigt | Input  | Integer                                      |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.DieselHandler.addFuel(ILiquidStack fuel, int time);

mods.immersiveengineering.DieselHandler.addFuel(<liquid:water>, 2000);
```

## Remove Fuel

| Required | Тип    | Datentyp                                     |
| -------- | ------ | -------------------------------------------- |
| Required | Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.DieselHandler.removeFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.removeFuel(<liquid:water>);
```

## Add Drill Fuel

| Required | Тип    | Datentyp                                     |
| -------- | ------ | -------------------------------------------- |
| Required | Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.DieselHandler.addDrillFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.addDrillFuel(<liquid:water>);
```

## Remove Drill Fuel

| Required | Тип    | Datentyp                                     |
| -------- | ------ | -------------------------------------------- |
| Required | Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.DieselHandler.removeDrillFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.removeDrillFuel(<liquid:water>);
```