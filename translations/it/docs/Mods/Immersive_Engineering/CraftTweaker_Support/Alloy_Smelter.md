# Fusione Leghe Metalliche

Il pacchetto Smelter Leghe Metalliche può essere utilizzato per aggiungere/rimuovere ricette da/per lo Smelter Immersivo Engineering Alloy Smelter.

## Chiamare Il Pacchetto

Puoi chiamare il pacchetto AlloySmelter utilizzando `mods.immersiveengineering.AlloySmelter`

## Aggiungi Ricetta

| Richiesto | Tipo    | Tipo Di Dati                                         |
| --------- | ------- | ---------------------------------------------------- |
| Richiesto | Output  | [IItemstack](/Vanilla/Items/IItemStack/)             |
| Richiesto | Input 1 | [IIngrediente](/Vanilla/Variable_Types/IIngredient/) |
| Richiesto | Input 2 | [IIngrediente](/Vanilla/Variable_Types/IIngredient/) |
| Richiesto | Tempo   | Intero                                               |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.AlloySmelter.addRecipe(IItemStack output, IIngredient first IIngredient second, int time);
mods.immersiveengineering.AlloySmelter.addRecipe(<minecraft:diamond>, <ore:ingotIron>, <minecraft:dirt>, 2000);
```

## Rimuovi Ricetta

| Tipo   | Tipo Di Dati                             |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.AlloySmelter.removeRecipe(IItemstack output);
mods.immersiveengineering.AlloySmelter.removeRecipe(<minecraft:diamond>);
```