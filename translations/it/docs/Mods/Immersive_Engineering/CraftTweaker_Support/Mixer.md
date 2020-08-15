# Mixer

Il pacchetto Mixer può essere utilizzato per aggiungere/rimuovere ricette da/per il miscelatore Immersive Engineering.

## Chiamare Il Pacchetto

È possibile chiamare il pacchetto Mixer utilizzando `mods.immersiveengineering.Mixer`.

## Aggiungi Ricetta

| Richiesto | Tipo          | Tipo Di Dati                                                    |
| --------- | ------------- | --------------------------------------------------------------- |
| Richiesto | Uscita Fluido | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                    |
| Richiesto | Fluid Input   | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                    |
| Richiesto | Item Inputs   | [IIngrediente](/Vanilla/Variable_Types/IIngredient/) come Array |
| Richiesto | Energia       | Intero                                                          |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.Mixer.addRecipe(ILiquidStack output, ILiquidStack fluidInput, IIngredient[] itemInputs, int energy);

mods.immersiveengineering.Mixer.addRecipe(<liquid:lava>, <liquid:water>, [<ore:logWood>, <minecraft:dirt>], 2048);
```

## Rimuovi Ricetta

| Tipo   | Tipo Di Dati                                 |
| ------ | -------------------------------------------- |
| Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.Mixer.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Mixer.removeRecipe(<liquid:lava>);
```