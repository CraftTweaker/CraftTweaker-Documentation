# Dieselhilfe

Mit dem Diesel-Handler-Paket können IE-Kraftstoffe gewechselt werden.

## Hinzufügen des Packages

Sie können das DieselHandler-Paket mit `mods.immersiveengineering.DieselHandler` anrufen.

## Brennstoff hinzufügen

| Benötigt | Type   | Datentyp                                     |
| -------- | ------ | -------------------------------------------- |
| Benötigt | Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Benötigt | Input  | Ganzzahl                                     |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.DieselHandler.addFuel(ILiquidStack fuel time);

mods.immersiveengineering.DieselHandler.addFuel(<liquid:water>, 2000);
```

## Treibstoff entfernen

| Benötigt | Type    | Datentyp                                     |
| -------- | ------- | -------------------------------------------- |
| Benötigt | Ausgang | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.DieselHandler.removeFuel(ILiquidStack fuel );

mods.immersiveengineering.DieselHandler.removeFuel(<liquid:water>);
```

## Bohrstoff hinzufügen

| Benötigt | Type    | Datentyp                                     |
| -------- | ------- | -------------------------------------------- |
| Benötigt | Ausgang | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.DieselHandler.addDrillFuel(ILiquidStack fuel );

mods.immersiveengineering.DieselHandler.addDrillFuel(<liquid:water>);
```

## Bohrstoff entfernen

| Benötigt | Type    | Datentyp                                     |
| -------- | ------- | -------------------------------------------- |
| Benötigt | Ausgang | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.DieselHandler.removeDrillFuel(ILiquidStack fuel );

mods.immersiveengineering.DieselHandler.removeDrillFuel(<liquid:water>);
```