# CraftingTableManager



Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.CraftingTableManager
```

## Interfacce Implementate
CraftingTableManager implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

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


### addShaped

Adds a shaped recipe to the crafting table

```zenscript
craftingTable.addShaped(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as crafttweaker.api.recipe.RecipeFunctionMatrix);
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable. ddShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut come IItemStack, input come IItemStack[][]) => {if(inputs[0][0]. isplayName == "total real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter      | Type                                                                                     | Description                                                                                                                    | IsOptional | Default Value |
| -------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------- | ------------- |
| recipeName     | String                                                                                   | name of the recipe to add.                                                                                                     | false      | `null`        |
| output         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                        | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                                       | false      | `null`        |
| ingredients    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]                  | array di un array di [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) for inputs                            | false      | `null`        |
| recipeFunction | [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | optional [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) for more advanced conditions | true       | `null`        |


### addShapedMirrored

Adds a mirrored shaped recipe to the crafting table

```zenscript
craftingTable.addShapedMirrored(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as crafttweaker.api.recipe.RecipeFunctionMatrix);
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable. ddShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut come IItemStack, input come IItemStack[][]) => {if(inputs[0][0]. isplayName == "total real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter      | Type                                                                                     | Description                                                                                                                    | IsOptional | Default Value |
| -------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------- | ------------- |
| recipeName     | String                                                                                   | name of the recipe to add.                                                                                                     | false      | `null`        |
| output         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                        | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                                       | false      | `null`        |
| ingredients    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]                  | array di un array di [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) for inputs                            | false      | `null`        |
| recipeFunction | [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | optional [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) for more advanced conditions | true       | `null`        |


### addShapeless

Adds a shapeless recipe to the crafting table

```zenscript
craftingTable.addShapeless(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[], recipeFunction as crafttweaker.api.recipe.RecipeFunctionArray);
craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>]);
craftingTable. ddShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>], (usualOut come IItemStack, input come IItemStack[]) => {if(inputs[0]. isplayName == "total real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parameter      | Type                                                                                   | Description                                                                                                                 | IsOptional | Default Value |
| -------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------- |
| recipeName     | String                                                                                 | name of the recipe to add.                                                                                                  | false      | `null`        |
| output         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                      | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                                    | false      | `null`        |
| ingredients    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[]                  | array di [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) for inputs                                     | false      | `null`        |
| recipeFunction | [crafttweaker.api.recipe.RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) | optional [crafttweaker.api.recipe.RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) per condizioni più avanzate | true       | `null`        |


### getRecipeByName

Tipo di restituzione: [crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
craftingTable.getRecipeByName(nome come stringa);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| name      | String | Nessuna descrizione fornita |


### getRecipesByOutput

Tipo di restituzione: Lista&lt;[crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

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

