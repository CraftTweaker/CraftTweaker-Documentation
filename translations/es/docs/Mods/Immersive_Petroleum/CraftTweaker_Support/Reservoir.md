# Reservas

## registrarreservorio

| Tipo                    | Tipo de Datos                                |
| ----------------------- | -------------------------------------------- |
| Identificador de nombre | Cadena                                       |
| Fluido                  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Tamaño mínimo           | Entero                                       |
| Tamaño máximo           | Entero                                       |
| Reponer tasa            | Entero                                       |
| Peso                    | Entero                                       |

### Peso

El peso es la posibilidad ponderada de un trozo que contiene ese depósito de líquido específico. El peso es contado como en X en Total.

So if you have 5 Reservoir values at: 5, 5, 6, 8, 10

Entonces cada entrada respectiva tendrá una probabilidad ponderada de:

    5 en 34
    5 en 34
    6 en 34
    8 en 34
    10 en 34
    

### Ejemplo de código:

```zenscript
mods.immersivepetroleum.Reservoir.registerReservoir(String name, ILiquidStack fluid, int minSize, int maxSize, int replenishRate, int weight);
mods.immersivepetroleum.Reservoir.registerReservoir("WaterTest", <liquid:water>, 48000, 64000, 200, 5);
```