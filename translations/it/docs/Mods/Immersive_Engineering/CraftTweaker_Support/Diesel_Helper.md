# Diesel Helper

Il pacchetto Diesel Handler può essere utilizzato per cambiare i carburanti IE.

## Chiamare Il Pacchetto

È possibile chiamare il pacchetto DieselHandler utilizzando `mods.immersiveengineering.DieselHandler`.

## Aggiungi Carburante

| Richiesto | Tipo   | Tipo Di Dati                                 |
| --------- | ------ | -------------------------------------------- |
| Richiesto | Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Richiesto | Input  | Intero                                       |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.DieselHandler.addFuel(ILiquidStack fuel, int time);

mods.immersiveengineering.DieselHandler.addFuel(<liquid:water>, 2000);
```

## Rimuovi Carburante

| Richiesto | Tipo   | Tipo Di Dati                                 |
| --------- | ------ | -------------------------------------------- |
| Richiesto | Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.DieselHandler.removeFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.removeFuel(<liquid:water>);
```

## Aggiungi Carburante Da Trapano

| Richiesto | Tipo   | Tipo Di Dati                                 |
| --------- | ------ | -------------------------------------------- |
| Richiesto | Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.DieselHandler.addDrillFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.addDrillFuel(<liquid:water>);
```

## Rimuovi Carburante Da Trapano

| Richiesto | Tipo   | Tipo Di Dati                                 |
| --------- | ------ | -------------------------------------------- |
| Richiesto | Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.DieselHandler.removeDrillFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.removeDrillFuel(<liquid:water>);
```