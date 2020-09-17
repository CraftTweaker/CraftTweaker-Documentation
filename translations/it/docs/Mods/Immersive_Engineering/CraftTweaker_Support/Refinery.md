# Raffineria

Il pacchetto di raffineria può essere utilizzato per aggiungere/rimuovere ricette da/per la raffineria di ingegneria immersiva.

## Chiamare Il Pacchetto

È possibile chiamare il pacchetto di raffineria utilizzando `mods.immersiveengineering.Refinery`.

## Aggiungi Ricetta

| Richiesto | Tipo    | Tipo Di Dati                                 |
| --------- | ------- | -------------------------------------------- |
| Richiesto | Output  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Richiesto | Input 1 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Richiesto | Input 2 | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| Richiesto | Energia | Intero                                       |

### Esempio

```zenscript
//Example
mods.immersiveengineering.Refinery.addRecipe(ILiquidStack output, ILiquidStack input0, ILiquidStack input1, int energy);

mods.immersiveengineering.Refinery.addRecipe(<liquid:iron>, <liquid:water>, <liquid:lava>, 2048);
```

## Rimuovi Ricetta

| Tipo   | Tipo Di Dati                                 |
| ------ | -------------------------------------------- |
| Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Esempio

```zenscript
//Example
mods.immersiveengineering.Refinery.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Refinery.removeRecipe(<liquid:iron>);
```