# SmithingManager



Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.SmithingManager
```

## Interfacce Implementate
SmithingManager implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Metodi
### addJSONRecipe

Aggiunge una ricetta basata su un IData fornito. L'IData fornita dovrebbe rappresentare un DataPack JSON, questo consente effettivamente di registrare ricette per qualsiasi DataPack che supporti i sistemi IRecipeType.

```zenscript
smithing.addJSONRecipe(nome come String, dati come crafttweaker.api.data.IData);
smithing.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 come float, cookingtime:100});
```

| Parametro | Tipo                                                   | Descrizione                         |
| --------- | ------------------------------------------------------ | ----------------------------------- |
| nome      | Stringa                                                | nome della ricetta                  |
| dati      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | dati che rappresentano il file json |


### addRecipe

Aggiunge una ricetta al tavolo del fabbro.

```zenscript
smithing.addRecipe(recipeName as String, result as crafttweaker.api.item.IItemStack, base as crafttweaker.api.item.IIngredient, addition as crafttweaker.api.item.IIngredient);
smithing.addRecipe("recipe_name", <item:minecraft:golden_apple>, <item:minecraft:apple>, <tag:forge:ingots/gold>);
```

| Parametro  | Tipo                                                                | Descrizione                            |
| ---------- | ------------------------------------------------------------------- | -------------------------------------- |
| recipeName | Stringa                                                             | Nome della ricetta.                    |
| risultato  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | L'oggetto creato dalla ricetta.        |
| base       | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | L'ingrediente iniziale per la ricetta. |
| aggiunta   | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | L'elemento aggiunto all'elemento base. |


### getRecipeByName

Tipo di restituzione: [crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
smithing.getRecipeByName(nome come stringa);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| nome      | Stringa | Nessuna descrizione fornita |


### getRecipesByOutput

Tipo di restituzione: Lista&lt;[crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
smithing.getRecipesByOutput(output come crafttweaker.api.item.IIngredient);
```

| Parametro | Tipo                                                                | Descrizione                 |
| --------- | ------------------------------------------------------------------- | --------------------------- |
| output    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Nessuna descrizione fornita |


### removeAll

Rimuovi tutte le ricette in questo registro

```zenscript
smithing.removeAll();
```

### removeByModid

Rimuovere la ricetta in base al nome del Registro di sistema

```zenscript
smithing.removeByModid(modid as String);
smithing.removeByModid("minecraft");
```

| Parametro | Tipo    | Descrizione                      |
| --------- | ------- | -------------------------------- |
| modid     | Stringa | modid delle ricette da rimuovere |



Rimuovere la ricetta in base al nome del Registro di sistema con un controllo di esclusione aggiunto, in modo da poter rimuovere l'intera mod oltre a alcuni specificati.

```zenscript
smithing.removeByModid(modid as String, exclude as crafttweaker.api.recipe.RecipeFilter);
smithing.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Parametro | Tipo                                                                     | Descrizione                           |
| --------- | ------------------------------------------------------------------------ | ------------------------------------- |
| modid     | Stringa                                                                  | modid delle ricette da rimuovere      |
| esclude   | [crafttweaker.api.recipe.RecipeFilter](/vanilla/api/recipe/RecipeFilter) | ricette da evitare di essere rimosse. |


### removeByName

Rimuovi ricetta in base al nome del Registro

```zenscript
smithing.removeByName(nome come Stringa);
smithing.removeByName("minecraft:furnace");
```

| Parametro | Tipo    | Descrizione                                     |
| --------- | ------- | ----------------------------------------------- |
| nome      | Stringa | il nome del registro della ricetta da rimuovere |


### removeByRegex

Rimuovere la ricetta a base di regex

```zenscript
smithing.removeByRegex(regex as String);
smithing.removeByRegex("\\d_\\d");
```

| Parametro | Tipo    | Descrizione              |
| --------- | ------- | ------------------------ |
| regex     | Stringa | regex da abbinare contro |


### removeRecipe

Rimuovere una ricetta basata sul suo output.

```zenscript
smithing.removeRecipe(output as crafttweaker.api.item.IItemStack);
smithing.removeRecipe(<item:minecraft:glass>);
```

| Parametro | Tipo                                                              | Descrizione          |
| --------- | ----------------------------------------------------------------- | -------------------- |
| output    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output della ricetta |



## Proprietà

| Nome          | Tipo    | Ha Getter | Ha Setter |
| ------------- | ------- | --------- | --------- |
| commandString | Stringa | vero      | falso     |

