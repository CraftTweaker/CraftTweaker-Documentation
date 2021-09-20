# Diesel Helper

The Diesel Handler package can be used to change IE fuels.

## Hinzufügen des Packages

You can call the DieselHandler package using `mods.immersiveengineering.DieselHandler`.

## Add Fuel

| Benötigt | 类型 | Datentyp                                     |
| -------- | -- | -------------------------------------------- |
| Benötigt | 输出 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Benötigt | 输入 | 整型                                           |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.DieselHandler.addFuel(ILiquidStack fuel, int time);

mods.immersiveengineering.DieselHandler.addFuel(<liquid:water>, 2000);
```

## Remove Fuel

| Required | 类型 | Datentyp                                     |
| -------- | -- | -------------------------------------------- |
| Required | 输出 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.DieselHandler.removeFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.removeFuel(<liquid:water>);
```

## Add Drill Fuel

| Required | 类型 | Datentyp                                     |
| -------- | -- | -------------------------------------------- |
| Required | 输出 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.DieselHandler.addDrillFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.addDrillFuel(<liquid:water>);
```

## Remove Drill Fuel

| Required | 类型 | Datentyp                                     |
| -------- | -- | -------------------------------------------- |
| Required | 输出 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.DieselHandler.removeDrillFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.removeDrillFuel(<liquid:water>);
```