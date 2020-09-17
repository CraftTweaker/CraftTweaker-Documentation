# Frantumatore

Il pacchetto Crusher può essere utilizzato per aggiungere/rimuovere ricette da/per il frantoio Immersivo di ingegneria.

## Chiamare Il Pacchetto

Puoi chiamare il pacchetto Crusher usando `mods.immersiveengineering.Crusher`.

## Aggiungi Ricetta

| Richiesto   | Tipo                   | Tipo Di Dati                                         |
| ----------- | ---------------------- | ---------------------------------------------------- |
| Richiesto   | Output                 | [IItemStack](/Vanilla/Items/IItemStack/)             |
| Richiesto   | Input                  | [IIngrediente](/Vanilla/Variable_Types/IIngredient/) |
| Richiesto   | Energia                | int                                                  |
| Facoltativo | Uscita Secondaria      | [IItemStack](/Vanilla/Items/IItemStack/)             |
| Facoltativo | Possibilità Secondaria | doppia                                               |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.Crusher.addRecipe(IItemStack output, IIngredient input, int energia, @Optional IItemStack secondaryOutput, @Optional double secondaryChance);

mods.immersiveengineering.Crusher. ddRecipe(<minecraft:diamond>, <ore:logWood>, 2048);
mods.immersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>);
mods. mmersiveengineering.Crusher.addRecipe(<minecraft:diamond>, <ore:logWood>, 2048, <minecraft:dirt>, 0.5);
```

## Rimuovere la ricetta per uscita

| Tipo   | Tipo Di Dati                             |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.Crusher.removeRecipe(IItemstack output);

mods.immersiveengineering.Crusher.removeRecipe(<minecraft:diamond>);
```

## Rimuovi Ricetta Da Input

| Tipo  | Tipo Di Dati                             |
| ----- | ---------------------------------------- |
| Input | [IItemstack](/Vanilla/Items/IItemStack/) |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.Crusher.removeRecipesForInput(IItemstack input);

mods.immersiveengineering.Crusher.removeRecipesForput(<minecraft:diamond>);
```