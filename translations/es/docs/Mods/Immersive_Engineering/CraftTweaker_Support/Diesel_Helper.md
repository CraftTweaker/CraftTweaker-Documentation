# Ayudante Diesel

El paquete Diesel Handler puede utilizarse para cambiar los combustibles IE.

## Llamar al paquete

Puedes llamar al paquete DieselHandler usando `mods.immersiveengineering.DieselHandler`.

## Añadir combustible

| Requerido | Tipo   | Tipo de Datos                                |
| --------- | ------ | -------------------------------------------- |
| Requerido | Salida | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Requerido | Input  | Entero                                       |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.DieselHandler.addFuel(ILiquidStack fuel, int time);

mods.immersiveengineering.DieselHandler.addFuel(<liquid:water>, 2000);
```

## Eliminar Petróleo

| Requerido | Tipo   | Tipo de Datos                                |
| --------- | ------ | -------------------------------------------- |
| Requerido | Salida | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.DieselHandler.removeFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.removeFuel(<liquid:water>);
```

## Añadir Petróleo

| Requerido | Tipo   | Tipo de Datos                                |
| --------- | ------ | -------------------------------------------- |
| Requerido | Salida | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.DieselHandler.addDrillFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.addDrillFuel(<liquid:water>);
```

## Quitar Petróleo

| Requerido | Tipo   | Tipo de Datos                                |
| --------- | ------ | -------------------------------------------- |
| Requerido | Salida | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Ejemplo

```zenscript
//Ejemplo:
mods.immersiveengineering.DieselHandler.removeDrillFuel(ILiquidStack fuel);

mods.immersiveengineering.DieselHandler.removeDrillFuel(<liquid:water>);
```