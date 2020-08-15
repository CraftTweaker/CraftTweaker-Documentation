# Forno Di Coke

## Chiamare Il Pacchetto

Puoi chiamare il pacchetto CokeOven utilizzando `mods.immersiveengineering.CokeOven`.

## Aggiungi Ricetta

| Richiesto | Tipo              | Tipo Di Dati                                         |
| --------- | ----------------- | ---------------------------------------------------- |
| Richiesto | Output            | [IItemstack](/Vanilla/Items/IItemStack/)             |
| Richiesto | Uscita Carburante | Intero                                               |
| Richiesto | Input             | [IIngrediente](/Vanilla/Variable_Types/IIngredient/) |
| Richiesto | Tempo             | Intero                                               |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.CokeOven.addRecipe(IItemStack output, int fuelOutput, IIngredient input, int time);
mods.immersiveengineering.CokeOven.addRecipe(<minecraft:coal>, 2, <ore:logWood>, 2000);
```

## Rimuovi Ricetta

| Tipo   | Tipo Di Dati                             |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Esempio:

```zenscript
//Esempio:
mods.immersiveengineering.CokeOven.removeRecipe(IItemStack output);
mods.immersiveengineering.CokeOven.removeRecipe(<minecraft:diamond>);
```