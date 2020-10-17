# IRecipeManager

Default interface for Registry based handlers as they can all remove recipes by ResourceLocation.

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.registries.IRecipeManager
```

## Interfacce Implementate
IRecipeManager implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### addJSONRecipe

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

```zenscript
craftingTable.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
craftingTable.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parameter | Type                                                   | Description                     |
| --------- | ------------------------------------------------------ | ------------------------------- |
| name      | String                                                 | name of the recipe              |
| data      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### getAllRecipes

Return type: List&lt;[crafttweaker.api.recipes.WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
craftingTable.getAllRecipes();
```

### getRecipeByName

Return type: [crafttweaker.api.recipes.WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)

```zenscript
craftingTable.getRecipeByName(nome come stringa);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| name      | String | Nessuna descrizione fornita |


### getRecipesByOutput

Return type: List&lt;[crafttweaker.api.recipes.WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)&gt;

```zenscript
craftingTable.getRecipesByOutput(output as crafttweaker.api.item.IIngredient);
```

| Parameter | Type                                                                | Description                 |
| --------- | ------------------------------------------------------------------- | --------------------------- |
| output    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Nessuna descrizione fornita |


### removeAll

Remove all recipes in this registry

```zenscript
craftingTable.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

```zenscript
craftingTable.removeByModid(modid as String);
craftingTable.removeByModid("minecraft");
```

| Parameter | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| modid     | String | modid of the recipes to remove |



Rimuovere la ricetta in base al nome del Registro di sistema con un controllo di esclusione aggiunto, in modo da poter rimuovere l'intera mod oltre a alcuni specificati.

```zenscript
craftingTable.removeByModid(modid as String, exclude as crafttweaker.api.recipe.RecipeFilter);
craftingTable.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Parameter | Type                                                                     | Description                           |
| --------- | ------------------------------------------------------------------------ | ------------------------------------- |
| modid     | String                                                                   | modid of the recipes to remove        |
| esclude   | [crafttweaker.api.recipe.RecipeFilter](/vanilla/api/recipe/RecipeFilter) | ricette da evitare di essere rimosse. |


### removeByName

Remove recipe based on Registry name

```zenscript
craftingTable.removeByName(name as String);
craftingTable.removeByName("minecraft:furnace");
```

| Parameter | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| name      | String | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
craftingTable.removeByRegex(regex as String);
craftingTable.removeByRegex("\\d_\\d");
```

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| regex     | String | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

```zenscript
craftingTable.removeRecipe(output as crafttweaker.api.item.IItemStack);
craftingTable.removeRecipe(<item:minecraft:glass>);
```

| Parameter | Type                                                              | Description          |
| --------- | ----------------------------------------------------------------- | -------------------- |
| output    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



## Properties

| Name          | Type   | Ha Getter | Ha Setter |
| ------------- | ------ | --------- | --------- |
| commandString | String | true      | false     |

