# Reservoir

## registerreservoir

| Type              | Datentyp                                     |
| ----------------- | -------------------------------------------- |
| Namensbezeichnung | String                                       |
| Flüssigkeit       | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Minimale Größe    | Ganzzahl                                     |
| Maximale Größe    | Ganzzahl                                     |
| Auffüllrate       | Ganzzahl                                     |
| Gewicht           | Ganzzahl                                     |

### Gewicht

Gewicht ist die Gewichtschance eines Chunks, der dieses spezifische Flüssigkeitsbehälter enthält. Das Gewicht wird wie in X im Total gezählt.

So if you have 5 Reservoir values at: 5, 5, 6, 8, 10

Dann hat jeder einzelne Eintrag eine gewichtete Chance:

    5 in 34
    5 in 34
    6 in 34
    8 in 34
    10 in 34
    

### Beispielcode:

```zenscript
mods.immersivepetroleum.Reservoir.registerReservoir(String name, ILiquidStack fluid, int minSize, int maxSize, int replenishRate, int weight);
mods.immersivepetroleum.Reservoir.registerReservoir("WaterTest", <liquid:water>, 48000, 64000, 200, 5);
```