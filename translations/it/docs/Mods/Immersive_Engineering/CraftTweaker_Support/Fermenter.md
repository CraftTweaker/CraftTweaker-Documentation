# Fermentatore

Il pacchetto Fermenter può essere utilizzato per aggiungere/rimuovere ricette da/per l'Immersive Engineering Fermenter.

## Chiamare Il Pacchetto

Puoi chiamare il pacchetto Fermenter usando `mods.immersiveengineering.Fermenter`.

## Aggiungi Ricetta

| Richiesto | Tipo    | Tipo Di Dati                                         |
| --------- | ------- | ---------------------------------------------------- |
| Richiesto | Output  | [IItemStack](/Vanilla/Items/IItemStack/)             |
| Richiesto | Fluido  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)         |
| Richiesto | Input   | [IIngrediente](/Vanilla/Variable_Types/IIngredient/) |
| Richiesto | Energia | Intero                                               |

### Esempio

```zenscript
mods.immersiveengineering.Fermenter.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);
mods.immersiveengineering.Fermenter.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## Rimuovi Ricetta Fluido

| Tipo   | Tipo Di Dati                                 |
| ------ | -------------------------------------------- |
| Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Esempio

```zenscript
mods.immersiveengineering.Fermenter.removeFluidRecipe(ILiquidStack fluid);
mods.immersiveengineering.Fermenter.removeFluidRecipe(<liquid:water>);
```

## Rimuovi Ricetta Articolo

| Tipo   | Tipo Di Dati                             |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Esempio

```zenscript
mods.immersiveengineering.Fermenter.removeItemRecipe(IItemstack output);
mods.immersiveengineering.Fermenter.removeItemRecipe(<minecraft:diamond>);
```

## Rimuovi Da Input

| Tipo   | Tipo Di Dati                             |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Esempio

```zenscript
mods.immersiveengineering.Fermenter.removeByInput(IItemstack input);
mods.immersiveengineering.Fermenter.removeByInput(<minecraft:diamond>);
```