# StoneCutterManager



Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.StoneCutterManager
```

## Interfacce Implementate
StoneCutterManager implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Metodi
### addJSONRecipe

Aggiunge una ricetta basata su un IData fornito. L'IData fornita dovrebbe rappresentare un DataPack JSON, questo consente effettivamente di registrare ricette per qualsiasi DataPack che supporti i sistemi IRecipeType.

```zenscript
stoneCutter.addJSONRecipe(nome come String, dati come crafttweaker.api.data.IData);
stoneCutter.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 come float, cookingtime:100});
```

| Parametro | Tipo                                                   | Descrizione                         |
| --------- | ------------------------------------------------------ | ----------------------------------- |
| nome      | Stringa                                                | nome della ricetta                  |
| dati      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | dati che rappresentano il file json |


### addRecipe

Aggiunge una ricetta al cutter di pietra

```zenscript
stoneCutter.addRecipe(recipeName as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
stoneCutter.addRecipe("recipe_name", <item:minecraft:grass>, <tag:minecraft:wool>);
```

| Parametro  | Tipo                                                                | Descrizione                                                               |
| ---------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| recipeName | Stringa                                                             | nome della ricetta                                                        |
| output     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)  |
| input      | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | input [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) |


### getRecipeByName

Tipo di restituzione: [crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
stoneCutter.getRecipeByName(nome come stringa);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| nome      | Stringa | Nessuna descrizione fornita |


### getRecipesByOutput

Tipo di restituzione: Lista&lt;[crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
stoneCutter.getRecipesByOutput(output come crafttweaker.api.item.IIngredient);
```

| Parametro | Tipo                                                                | Descrizione                 |
| --------- | ------------------------------------------------------------------- | --------------------------- |
| output    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Nessuna descrizione fornita |


### removeAll

Rimuovi tutte le ricette in questo registro

```zenscript
stoneCutter.removeAll();
```

### removeByModid

Rimuovere la ricetta in base al nome del Registro di sistema

```zenscript
stoneCutter.removeByModid(modid as String);
stoneCutter.removeByModid("minecraft");
```

| Parametro | Tipo    | Descrizione                      |
| --------- | ------- | -------------------------------- |
| modid     | Stringa | modid delle ricette da rimuovere |



Rimuovere la ricetta in base al nome del Registro di sistema con un controllo di esclusione aggiunto, in modo da poter rimuovere l'intera mod oltre a alcuni specificati.

```zenscript
stoneCutter.removeByModid(modid as String, exclude as crafttweaker.api.recipe.RecipeFilter);
stoneCutter.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Parametro | Tipo                                                                     | Descrizione                           |
| --------- | ------------------------------------------------------------------------ | ------------------------------------- |
| modid     | Stringa                                                                  | modid delle ricette da rimuovere      |
| esclude   | [crafttweaker.api.recipe.RecipeFilter](/vanilla/api/recipe/RecipeFilter) | ricette da evitare di essere rimosse. |


### removeByName

Rimuovi ricetta in base al nome del Registro

```zenscript
stoneCutter.removeByName(nome come stringa);
stoneCutter.removeByName("minecraft:furnace");
```

| Parametro | Tipo    | Descrizione                                     |
| --------- | ------- | ----------------------------------------------- |
| nome      | Stringa | il nome del registro della ricetta da rimuovere |


### removeByRegex

Rimuovere la ricetta a base di regex

```zenscript
stoneCutter.removeByRegex(regex as String);
stoneCutter.removeByRegex("\\d_\\d");
```

| Parametro | Tipo    | Descrizione              |
| --------- | ------- | ------------------------ |
| regex     | Stringa | regex da abbinare contro |


### removeRecipe

Rimuovere una ricetta basata sul suo output.

```zenscript
stoneCutter.removeRecipe(output as crafttweaker.api.item.IItemStack);
stoneCutter.removeRecipe(<item:minecraft:glass>);
```

| Parametro | Tipo                                                              | Descrizione          |
| --------- | ----------------------------------------------------------------- | -------------------- |
| output    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output della ricetta |



## Proprietà

| Nome          | Tipo    | Ha Getter | Ha Setter |
| ------------- | ------- | --------- | --------- |
| commandString | Stringa | vero      | falso     |

