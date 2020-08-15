# CampFireManager



Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.CampFireManager
```

## Interfacce Implementate
CampFireManager implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## Metodi
### addRecipe

Aggiunge una ricetta basata sui parametri dati.

```zenscript
campfire.addRecipe(nome come String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient, xp as float, cookTime as int);
campfire.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| Parametro | Tipo                                                                | Descrizione                        |
| --------- | ------------------------------------------------------------------- | ---------------------------------- |
| nome      | Stringa                                                             | Nome della nuova ricetta           |
| output    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output della ricetta    |
| input     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Input IIngrediente della ricetta   |
| xp        | galleggiante                                                        | quanto xp ottiene il giocatore     |
| cookTime  | int                                                                 | quanto tempo ci vuole per cucinare |


### removeRecipe

Rimuove una ricetta basata sul suo output e input.

```zenscript
campfire.removeRecipe(output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
campfire.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| Parametro | Tipo                                                                | Descrizione                              |
| --------- | ------------------------------------------------------------------- | ---------------------------------------- |
| output    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | IItemStack output della ricetta.         |
| input     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | IIngrediente della ricetta da rimuovere. |



