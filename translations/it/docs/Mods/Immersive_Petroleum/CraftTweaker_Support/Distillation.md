# Distillazione

## addRecipe

Il metodo di distillazione "addRecipe" è costituito da:

| Tipo            | Tipo Di Dati                                         |
| --------------- | ---------------------------------------------------- |
| Output          | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) Array[] |
| Output          | [ItemStack](/Vanilla/Items/IItemStack/) Array[]      |
| Input           | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)         |
| Flux/t          | Intero                                               |
| Tempo in zecche | Intero                                               |
| Probabilità     | Array Fluttuante []                                  |

### Prefazione:

Ogni elemento dello stack è collegato alla corrispondente voce dell'array "Chance".

Esempio:

```zenscript
[<minecraft:diamond>, <minecraft:leather> * 2]
[1, 1]
```

Il valore "Float" della probabilità dovrebbe essere compreso tra 0 e 1. Dal momento che lo converte da un valore float a un valore percentuale compreso tra 0% e 100% I.E:

```zenscript
0.5     = 50%
0.22374 = 22.374%
1       = 100%
```

Mentre è possibile inviare un galleggiante superiore a 1, non produrrà mai un valore superiore al 100%

### Esempio Di Codice:

```zenscript
//mods.immersivepetroleum.Distillation.addRecipe(ILiquidStack[] fluidOutputs, IItemStack[] itemOutputs, ILiquidStack fluidInput, int energia, int tempo, float[] possibilità)

mods. mmersivepetroleum.Distillation.addRecipe([<liquid:lava> * 5, <liquid:gasoline> * 5], [<minecraft:diamond>, <minecraft:leather> * 2], <liquid:water>, 5, [1, 1]);
```