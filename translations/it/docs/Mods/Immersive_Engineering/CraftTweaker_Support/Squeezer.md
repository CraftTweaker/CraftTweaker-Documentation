# Squeezer

Il pacchetto Squeezer può essere utilizzato per aggiungere/rimuovere ricette da/per lo Squeezer Immersivo Engineering.

## Chiamare Il Pacchetto

Puoi chiamare il pacchetto Squeezer usando `mods.immersiveengineering.Squeezer`.

## Aggiungi Ricetta

| Richiesto | Tipo    | Tipo Di Dati                                         |
| --------- | ------- | ---------------------------------------------------- |
| Richiesto | Output  | [IItemStack](/Vanilla/Items/IItemStack/)             |
| Richiesto | Fluido  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)         |
| Richiesto | Input   | [IIngrediente](/Vanilla/Variable_Types/IIngredient/) |
| Richiesto | Energia | Intero                                               |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.Squeezer.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);

mods.immersiveengineering.Squeezer.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## Rimuovi Ricetta Fluido

| Tipo   | Tipo Di Dati                                 |
| ------ | -------------------------------------------- |
| Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.Squeezer.removeFluidRecipe(ILiquidStack fluid);

mods.immersiveengineering.Squeezer.removeFluidRecipe(<liquid:water>);
```

## Rimuovi Ricetta Articolo

| Tipo   | Tipo Di Dati                             |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.Squeezer.removeItemRecipe(IItemStack stack);

mods.immersiveengineering.Squeezer.removeItemRecipe(<minecraft:diamond>);
```

## Rimuovi Da Input

| Tipo   | Tipo Di Dati                             |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.Squeezer.removeByInput(IItemStack stack);

mods.immersiveengineering.Squeezer.removeByInput(<minecraft:log>);
```