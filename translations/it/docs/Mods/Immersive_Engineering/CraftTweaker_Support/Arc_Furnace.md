# Fornace D'Arco

Il pacchetto Arc Furnace può essere utilizzato per aggiungere/rimuovere ricette da/per la fornace dell'Arco da Ingegneria Immersiva.

## Chiamare Il Pacchetto

Puoi chiamare il pacchetto ArcFurnace utilizzando `mods.immersiveengineering.ArcFurnace`.

## Aggiungi Ricetta

| Richiesto   | Tipo                     | Tipo Di Dati                                                                            |
| ----------- | ------------------------ | --------------------------------------------------------------------------------------- |
| Richiesto   | Output                   | [IItemStack](/Vanilla/Items/IItemStack/)                                                |
| Richiesto   | Input                    | [IIngrediente](/Vanilla/Variable_Types/IIngredient/)                                    |
| Richiesto   | Slag                     | [IItemStack](/Vanilla/Items/IItemStack/)                                                |
| Richiesto   | Tempo                    | Intero                                                                                  |
| Richiesto   | Energia Per Tick         | Intero                                                                                  |
| Facoltativo | Additivi                 | [IIngrediente](/Vanilla/Variable_Types/IIngredient/) Array []                           |
| Facoltativo | Tipo Di Ricetta Speciale | Stringa [specialRecipeTypes](/Mods/Immersive_Engineering/Variables/SpecialRecipeTypes/) |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.ArcFurnace.addRecipe(IItemStack output, IIngredient input, IItemStack slag, int time, int energyPerTick, @Optional IIngredient[] additivi, @Optional String specialRecipeType);

mods. mmersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048);
mods.immersiveengineering.ArcFurnace. ddRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>]);
mods.immersiveengineering. rcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Ores");
mods. mmersiveengineering.ArcFurnace.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:dirt>, 2000, 2048, [<ore:oreIron>, <ore:oreGold>], "Alloying");
```

## Rimuovi Ricetta

| Tipo   | Tipo Di Dati                             |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.ArcFurnace.removeRecipe(IItemstack output);
mods.immersiveengineering.ArcFurnace.removeRecipe(<minecraft:diamond>);
```