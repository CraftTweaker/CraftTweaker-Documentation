# Imbottigliatrice

## Chiamare Il Pacchetto

È possibile chiamare il pacchetto BottlingMachine utilizzando `mods.immersiveengineering.BottlingMachine`.

## Aggiungi Ricetta

| Richiesto | Tipo   | Tipo Di Dati                                         |
| --------- | ------ | ---------------------------------------------------- |
| Richiesto | Output | [IItemstack](/Vanilla/Items/IItemStack/)             |
| Richiesto | Input  | [IIngrediente](/Vanilla/Variable_Types/IIngredient/) |
| Richiesto | Fluido | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)         |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.BottlingMachine.addRecipe(IItemStack output, IIngredient input, ILiquidStack fluid);
mods.immersiveengineering.BottlingMachine.addRecipe(<minecraft:diamond>, <ore:logWood>, <liquid:water>);
```

## Rimuovi Ricetta

| Tipo   | Tipo Di Dati                             |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.BottlingMachine.removeRecipe(IItemStack output);
mods.immersiveengineering.BottlingMachine.removeRecipe(<minecraft:diamond>);
```