# SmithingManager



Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.SmithingManager
```

## Interfacce Implementate
SmithingManager implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Methods
### addJSONRecipe

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

```zenscript
smithing.addJSONRecipe(nome come String, dati come crafttweaker.api.data.IData);
smithing.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 come float, cookingtime:100});
```

| Parameter | Type                                                   | Description                     |
| --------- | ------------------------------------------------------ | ------------------------------- |
| name      | String                                                 | name of the recipe              |
| dati      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addRecipe

Aggiunge una ricetta al tavolo del fabbro.

```zenscript
smithing.addRecipe(recipeName as String, result as crafttweaker.api.item.IItemStack, base as crafttweaker.api.item.IIngredient, addition as crafttweaker.api.item.IIngredient);
smithing.addRecipe("recipe_name", <item:minecraft:golden_apple>, <item:minecraft:apple>, <tag:forge:ingots/gold>);
```

| Parameter  | Type                                                                | Description                            |
| ---------- | ------------------------------------------------------------------- | -------------------------------------- |
| recipeName | String                                                              | Nome della ricetta.                    |
| result     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | L'oggetto creato dalla ricetta.        |
| base       | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | L'ingrediente iniziale per la ricetta. |
| aggiunta   | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | L'elemento aggiunto all'elemento base. |


### getRecipeByName

Tipo di restituzione: [crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
smithing.getRecipeByName(nome come stringa);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| name      | String | Nessuna descrizione fornita |


### getRecipesByOutput

Tipo di restituzione: Lista&lt;[crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
smithing.getRecipesByOutput(output come crafttweaker.api.item.IIngredient);
```

| Parameter | Type                                                                | Description                 |
| --------- | ------------------------------------------------------------------- | --------------------------- |
| output    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Nessuna descrizione fornita |


### removeAll

Remove all recipes in this registry

```zenscript
smithing.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

```zenscript
smithing.removeByModid(modid as String);
smithing.removeByModid("minecraft");
```

| Parameter | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| modid     | String | modid of the recipes to remove |



Rimuovere la ricetta in base al nome del Registro di sistema con un controllo di esclusione aggiunto, in modo da poter rimuovere l'intera mod oltre a alcuni specificati.

```zenscript
smithing.removeByModid(modid as String, exclude as crafttweaker.api.recipe.RecipeFilter);
smithing.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Parameter | Type                                                                     | Description                           |
| --------- | ------------------------------------------------------------------------ | ------------------------------------- |
| modid     | String                                                                   | modid of the recipes to remove        |
| esclude   | [crafttweaker.api.recipe.RecipeFilter](/vanilla/api/recipe/RecipeFilter) | ricette da evitare di essere rimosse. |


### removeByName

Remove recipe based on Registry name

```zenscript
smithing.removeByName(nome come Stringa);
smithing.removeByName("minecraft:furnace");
```

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| name      | String | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
smithing.removeByRegex(regex as String);
smithing.removeByRegex("\\d_\\d");
```

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| regex     | String | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

```zenscript
smithing.removeRecipe(output as crafttweaker.api.item.IItemStack);
smithing.removeRecipe(<item:minecraft:glass>);
```

| Parameter | Type                                                              | Description          |
| --------- | ----------------------------------------------------------------- | -------------------- |
| output    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



## Properties

| Name          | Type   | Ha Getter | Ha Setter |
| ------------- | ------ | --------- | --------- |
| commandString | String | true      | false     |

