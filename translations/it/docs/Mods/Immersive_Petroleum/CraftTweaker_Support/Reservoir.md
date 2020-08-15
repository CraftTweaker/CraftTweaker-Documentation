# Serbatoio

## registerReservoir

| Tipo                  | Tipo Di Dati                                 |
| --------------------- | -------------------------------------------- |
| Nome Identificatore   | Stringa                                      |
| Fluido                | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Dimensione Minima     | Intero                                       |
| Dimensione Massima    | Intero                                       |
| Tasso Di Rifornimento | Intero                                       |
| Peso                  | Intero                                       |

### Peso

Il peso è la possibilità di peso di un pezzo contenente quel serbatoio di fluido specifico. Il peso è contato come in X in totale.

Quindi, se si dispone di 5 valori del serbatoio a: 5, 5, 6, 8, 10

Quindi ogni rispettiva voce avrà una probabilità ponderata di:

    5 su 34
    5 su 34
    6 su 34
    8 su 34
    10 su 34
    

### Esempio Di Codice:

```zenscript
mods.immersivepetroleum.Reservoir.registerReservoir(nome string, liquido ILiquidStack, int minSize, int maxSize, int replenishRate, int weight);
mods.immersivepetroleum.Reservoir.registerReservoir("WaterTest", <liquid:water>, 48000, 64000, 200, 5);
```