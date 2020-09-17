# Termoeléctrico
El paquete Thermoeléctrico puede utilizarse para registrar o anular temperaturas para bloques que les permitan alimentar el Generador Termoeléctrico Inmersivo de Ingeniería. Los líquidos inherentemente tienen una temperatura, por lo que no se pueden y no se pueden registrar. Las temperaturas están en Kelvin.

## Llamar al paquete
Puede llamar al paquete Thermoelectric usando `mods.immersiveengineering.Thermoelectric`.

## Añadir fuente de temperatura

| Requerido | Tipo              | Tipo de Datos                                         |
| --------- | ----------------- | ----------------------------------------------------- |
| Requerido | Bloque de destino | [IIngredientes](/Vanilla/Variable_Types/IIngredient/) |
| Requerido | Temperatura (K)   | Entero                                                |

### Ejemplo
```zenscript
//Ejemplo:
mods.immersiveengineering.Thermoelectric.addTemperatureSource(fuente IIngredient, int temperature);

mods.immersiveengineering.Thermoelectric.addTemperatureSource(<minecraft:obsidian>, 1272);
```


## Eliminar fuente de temperatura

| Requerido | Tipo              | Tipo de Datos                                         |
| --------- | ----------------- | ----------------------------------------------------- |
| Requerido | Bloque de destino | [IIngredientes](/Vanilla/Variable_Types/IIngredient/) |

### Ejemplo
```zenscript
//Ejemplo:
mods.immersiveengineering.Thermoelectric.removeTemperatureSource(IIngredient source);

mods.immersiveengineering.Thermoelectric.removeTemperatureSource(<minecraft:obsidian>);
```
