# CraftingTableManager



Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.CraftingTableManager
```

## Interfacce Implementate
CraftingTableManager implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Metodi
### addJSONRecipe

Aggiunge una ricetta basata su un IData fornito. L'IData fornita dovrebbe rappresentare un DataPack JSON, questo consente effettivamente di registrare ricette per qualsiasi DataPack che supporti i sistemi IRecipeType.

```zenscript
craftingTable.addJSONRecipe(nome come String, dati come crafttweaker.api.data.IData);
craftingTable.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parametro | Tipo                                                   | Descrizione                         |
| --------- | ------------------------------------------------------ | ----------------------------------- |
| nome      | Stringa                                                | nome della ricetta                  |
| dati      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | dati che rappresentano il file json |


### addShaped

Aggiunge una ricetta sagomata al tavolo da lavoro

```zenscript
craftingTable.addShaped(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as crafttweaker.api.recipe.RecipeFunctionMatrix);
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable. ddShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut come IItemStack, input come IItemStack[][]) => {if(inputs[0][0]. isplayName == "total real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parametro      | Tipo                                                                                     | Descrizione                                                                                                                    | IsOptional | Valore Predefinito |
| -------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------- | ------------------ |
| recipeName     | Stringa                                                                                  | nome della ricetta da aggiungere.                                                                                              | falso      | `null`             |
| output         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                        | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                                       | falso      | `null`             |
| ingredienti    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]                  | array di un array di [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) for inputs                            | falso      | `null`             |
| recipeFunction | [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | optional [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) for more advanced conditions | vero       | `null`             |


### addShapedMirrored

Aggiunge una ricetta a forma di specchio al tavolo da lavoro

```zenscript
craftingTable.addShapedMirrored(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as crafttweaker.api.recipe.RecipeFunctionMatrix);
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable. ddShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut come IItemStack, input come IItemStack[][]) => {if(inputs[0][0]. isplayName == "total real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parametro      | Tipo                                                                                     | Descrizione                                                                                                                    | IsOptional | Valore Predefinito |
| -------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------- | ------------------ |
| recipeName     | Stringa                                                                                  | nome della ricetta da aggiungere.                                                                                              | falso      | `null`             |
| output         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                        | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                                       | falso      | `null`             |
| ingredienti    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]                  | array di un array di [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) for inputs                            | falso      | `null`             |
| recipeFunction | [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) | optional [crafttweaker.api.recipe.RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix) for more advanced conditions | vero       | `null`             |


### addShapeless

Aggiunge una ricetta senza forma al tavolo da lavoro

```zenscript
craftingTable.addShapeless(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[], recipeFunction as crafttweaker.api.recipe.RecipeFunctionArray);
craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>]);
craftingTable. ddShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>], (usualOut come IItemStack, input come IItemStack[]) => {if(inputs[0]. isplayName == "total real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parametro      | Tipo                                                                                   | Descrizione                                                                                                                 | IsOptional | Valore Predefinito |
| -------------- | -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------------ |
| recipeName     | Stringa                                                                                | nome della ricetta da aggiungere.                                                                                           | falso      | `null`             |
| output         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                      | output [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                                    | falso      | `null`             |
| ingredienti    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[]                  | array di [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) for inputs                                     | falso      | `null`             |
| recipeFunction | [crafttweaker.api.recipe.RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) | optional [crafttweaker.api.recipe.RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray) per condizioni più avanzate | vero       | `null`             |


### getRecipeByName

Tipo di restituzione: [crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
craftingTable.getRecipeByName(nome come stringa);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| nome      | Stringa | Nessuna descrizione fornita |


### getRecipesByOutput

Tipo di restituzione: Lista&lt;[crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
craftingTable.getRecipesByOutput(output as crafttweaker.api.item.IIngredient);
```

| Parametro | Tipo                                                                | Descrizione                 |
| --------- | ------------------------------------------------------------------- | --------------------------- |
| output    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Nessuna descrizione fornita |


### removeAll

Rimuovi tutte le ricette in questo registro

```zenscript
craftingTable.removeAll();
```

### removeByModid

Rimuovere la ricetta in base al nome del Registro di sistema

```zenscript
craftingTable.removeByModid(modid as String);
craftingTable.removeByModid("minecraft");
```

| Parametro | Tipo    | Descrizione                      |
| --------- | ------- | -------------------------------- |
| modid     | Stringa | modid delle ricette da rimuovere |



Rimuovere la ricetta in base al nome del Registro di sistema con un controllo di esclusione aggiunto, in modo da poter rimuovere l'intera mod oltre a alcuni specificati.

```zenscript
craftingTable.removeByModid(modid as String, exclude as crafttweaker.api.recipe.RecipeFilter);
craftingTable.removeByModid("minecraft", (name as string) => {return name == "orange_wool";});
```

| Parametro | Tipo                                                                     | Descrizione                           |
| --------- | ------------------------------------------------------------------------ | ------------------------------------- |
| modid     | Stringa                                                                  | modid delle ricette da rimuovere      |
| esclude   | [crafttweaker.api.recipe.RecipeFilter](/vanilla/api/recipe/RecipeFilter) | ricette da evitare di essere rimosse. |


### removeByName

Rimuovi ricetta in base al nome del Registro

```zenscript
craftingTable.removeByName(name as String);
craftingTable.removeByName("minecraft:furnace");
```

| Parametro | Tipo    | Descrizione                                     |
| --------- | ------- | ----------------------------------------------- |
| nome      | Stringa | il nome del registro della ricetta da rimuovere |


### removeByRegex

Rimuovere la ricetta a base di regex

```zenscript
craftingTable.removeByRegex(regex as String);
craftingTable.removeByRegex("\\d_\\d");
```

| Parametro | Tipo    | Descrizione              |
| --------- | ------- | ------------------------ |
| regex     | Stringa | regex da abbinare contro |


### removeRecipe

Rimuovere una ricetta basata sul suo output.

```zenscript
craftingTable.removeRecipe(output as crafttweaker.api.item.IItemStack);
craftingTable.removeRecipe(<item:minecraft:glass>);
```

| Parametro | Tipo                                                              | Descrizione          |
| --------- | ----------------------------------------------------------------- | -------------------- |
| output    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output della ricetta |



## Proprietà

| Nome          | Tipo    | Ha Getter | Ha Setter |
| ------------- | ------- | --------- | --------- |
| commandString | Stringa | vero      | falso     |

