# Fornace Esplosiva

Il pacchetto Blast Furnace può essere utilizzato per aggiungere/rimuovere ricette/combustibili da/dalla fornace di ingegneria immersiva.

## Chiamare Il Pacchetto

Puoi chiamare il pacchetto BlastFurnace usando `mods.immersiveengineering.BlastFurnace`.

## Aggiungi Ricetta:

| Richiesto   | Tipo   | Tipo Di Dati                                         |
| ----------- | ------ | ---------------------------------------------------- |
| Richiesto   | Output | [IItemstack](/Vanilla/Items/IItemStack/)             |
| Richiesto   | Input  | [IIngrediente](/Vanilla/Variable_Types/IIngredient/) |
| Richiesto   | Tempo  | Intero                                               |
| Facoltativo | Slag   | [IItemstack](/Vanilla/Items/IItemStack/)             |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.BlastFurnace.addRecipe(IItemStack output, IIngredient input, int time, @Optional IItemStack slag);
mods.immersiveengineering. lastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000);
mods.immersiveengineering.BlastFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, 2000, <minecraft:dirt>);
```

## Rimuovi Ricetta

| Tipo   | Tipo Di Dati                             |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Esempio:

```zenscript
//Esempio:
mods.immersiveengineering.BlastFurnace.removeRecipe(IItemStack output);
mods.immersiveengineering.BlastFurnace.removeRecipe(<minecraft:diamond>;
```

## Aggiungi Carburante

| Richiesto | Tipo  | Tipo Di Dati                                         |
| --------- | ----- | ---------------------------------------------------- |
| Richiesto | Input | [IIngrediente](/Vanilla/Variable_Types/IIngredient/) |
| Richiesto | Tempo | Intero                                               |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.BlastFurnace.addFuel(IIngredient input, int time);
mods.immersiveengineering.BlastFurnace.addFuel(<ore:plankWood>, 2000);
```

## Rimuovi Carburante

| Richiesto | Tipo   | Tipo Di Dati                             |
| --------- | ------ | ---------------------------------------- |
| Richiesto | Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.BlastFurnace.removeFuel(IItemStack output);
mods.immersiveengineering.BlastFurnace.removeFuel(<minecraft:planks>);
```