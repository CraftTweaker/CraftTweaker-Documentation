# CraftingTableManager



Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.CraftingTableManager
```

## Implemented Interfaces
CraftingTableManager implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Métodos
### addJSONRecipe

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

```zenscript
craftingTable.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
craftingTable.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parámetro | Tipo                                                   | Descripción                     |
| --------- | ------------------------------------------------------ | ------------------------------- |
| nombre    | Cadena                                                 | name of the recipe              |
| datos     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addShaped

Adds a shaped recipe to the crafting table

```zenscript
craftingTable.addShaped(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix);
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parámetro      | Tipo                                                                         | Descripción                                                                                                        | IsOptional | Valor por defecto |
| -------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------- | ----------------- |
| recipeName     | Cadena                                                                       | name of the recipe to add.                                                                                         | falso      | nulo              |
| salida         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)            | output IItemStack                                                                                                  | falso      | nulo              |
| ingredientes   | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]      | array of an array of IIngredient for inputs                                                                        | falso      | nulo              |
| recipeFunction | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix | optional com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix for more advanced conditions | verdad     | nulo              |


### addShapedMirrored

Adds a mirrored shaped recipe to the crafting table

```zenscript
craftingTable.addShapedMirrored(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix);
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut as IItemStack, inputs as IItemStack[][]) => {if(inputs[0][0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parámetro      | Tipo                                                                         | Descripción                                                                                                        | IsOptional | Valor por defecto |
| -------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------- | ----------------- |
| recipeName     | Cadena                                                                       | name of the recipe to add.                                                                                         | falso      | nulo              |
| salida         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)            | output IItemStack                                                                                                  | falso      | nulo              |
| ingredientes   | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]      | array of an array of IIngredient for inputs                                                                        | falso      | nulo              |
| recipeFunction | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix | optional com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMatrix for more advanced conditions | verdad     | nulo              |


### addShapeless

Adds a shapeless recipe to the crafting table

```zenscript
craftingTable.addShapeless(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray);
craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>]);
craftingTable.addShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>], (usualOut as IItemStack, inputs as IItemStack[]) => {if(inputs[0].displayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parámetro      | Tipo                                                                        | Descripción                                                                                                       | IsOptional | Valor por defecto |
| -------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------- | ----------------- |
| recipeName     | Cadena                                                                      | name of the recipe to add.                                                                                        | falso      | nulo              |
| salida         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)           | output IItemStack                                                                                                 | falso      | nulo              |
| ingredientes   | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[]       | array of IIngredient for inputs                                                                                   | falso      | nulo              |
| recipeFunction | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray | optional com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray for more advanced conditions | verdad     | nulo              |


### eliminar todo

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

| Parámetro | Tipo   | Descripción                    |
| --------- | ------ | ------------------------------ |
| modificar | Cadena | modid of the recipes to remove |


### removeByName

Remove recipe based on Registry name

```zenscript
craftingTable.removeByName(name as String);
craftingTable.removeByName("minecraft:furnace");
```

| Parámetro | Tipo   | Descripción                       |
| --------- | ------ | --------------------------------- |
| nombre    | Cadena | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
craftingTable.removeByRegex(regex as String);
craftingTable.removeByRegex("\\d_\\d");
```

| Parámetro | Tipo   | Descripción            |
| --------- | ------ | ---------------------- |
| regex     | Cadena | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

```zenscript
craftingTable.removeRecipe(output as crafttweaker.api.item.IItemStack);
craftingTable.removeRecipe(<item:minecraft:glass>);
```

| Parámetro | Tipo                                                              | Descripción          |
| --------- | ----------------------------------------------------------------- | -------------------- |
| salida    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



