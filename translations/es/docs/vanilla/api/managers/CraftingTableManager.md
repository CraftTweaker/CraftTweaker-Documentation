# Administrador de mesa



Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.CraftingTableManager
```

## Interfaces implementadas
CraftingTableManager implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Métodos
### addJSONRecipe

Añade una receta basada en un IData proporcionado. El IData proporcionado debe representar un JSON DataPack, esto le permite registrar recetas para cualquier DataPack que soporte sistemas IRecipeType.

```zenscript
craftingTable.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
craftingTable.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cooking kingtime:100});
```

| Parámetro | Tipo                                  | Descripción                           |
| --------- | ------------------------------------- | ------------------------------------- |
| nombre    | Cadena                                | nombre de la receta                   |
| datos     | [data.IData](/vanilla/api/data/IData) | datos que representan el archivo json |


### addShaped

Añade una receta en forma a la mesa de fabricación

```zenscript
craftingTable.addShaped(recipeName as String, output as crafttweaker.api.item.ItemStack, ingredients as crafttweaker.api.item.IIngredient[][], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMATIx);
craftingTable.addShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable. ddShaped("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut como ItemStack, entradas como IItemStack[][]) => {if(entradas[0][0]. isplayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parámetro      | Tipo                                                                           | Descripción                                                                                                          | Opcional | Valor por defecto |
| -------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- | -------- | ----------------- |
| recipeNombre   | Cadena                                                                         | nombre de la receta a añadir.                                                                                        | falso    | nulo              |
| salida         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)              | output IItemStack                                                                                                    | falso    | nulo              |
| ingredientes   | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]        | array de un array de IIngredient para entradas                                                                       | falso    | nulo              |
| función receta | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMaritime | opcional com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMprise para condiciones más avanzadas | verdad   | nulo              |


### addShapedMirrored

Añade una receta en forma de espejo a la mesa de fabricación

```zenscript
craftingTable.addShapedMirrored(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredientes as crafttweaker.api.item.IIngredient[][], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeFunctionMdeex);
craftingTable.addShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]]);
craftingTable. ddShapedMirrored("recipe_name", <item:minecraft:dirt>, [[<item:minecraft:diamond>], [<tag:minecraft:wool>]], (usualOut como IItemStack, entradas como IIItemStack[][]) => {if(entradas[0][0]. isplayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parámetro      | Tipo                                                                           | Descripción                                                                                                          | Opcional | Valor por defecto |
| -------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- | -------- | ----------------- |
| recipeNombre   | Cadena                                                                         | nombre de la receta a añadir.                                                                                        | falso    | nulo              |
| salida         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)              | output IItemStack                                                                                                    | falso    | nulo              |
| ingredientes   | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[][]        | array de un array de IIngredient para entradas                                                                       | falso    | nulo              |
| función receta | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMaritime | opcional com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionMprise para condiciones más avanzadas | verdad   | nulo              |


### addShapeless

Añade una receta sin forma a la mesa de fabricación

```zenscript
craftingTable.addShapeless(recipeName as String, output as crafttweaker.api.item.IItemStack, ingredients as crafttweaker.api.item.IIngredient[], recipeFunction as com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray);
craftingTable. ddShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>]);
craftingTable. ddShapeless("recipe_name", <item:minecraft:dirt>, [<item:minecraft:diamond>, <tag:minecraft:wool>], (usualOut como ItemStack, entradas como ItemItemStack[]) => {if(entradas[0]. isplayName == "totally real diamond block" ){return usualOut;}return <item:minecraft:clay>.setDisplayName("Diamond");});
```

| Parámetro      | Tipo                                                                        | Descripción                                                                                                         | Opcional | Valor por defecto |
| -------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | -------- | ----------------- |
| recipeNombre   | Cadena                                                                      | nombre de la receta a añadir.                                                                                       | falso    | nulo              |
| salida         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)           | output IItemStack                                                                                                   | falso    | nulo              |
| ingredientes   | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)[]       | array de IIngredient para entradas                                                                                  | falso    | nulo              |
| función receta | com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray | opcional com.blamejared.crafttweaker.api.managers.IRecipeManager.RecipeFunctionArray para condiciones más avanzadas | verdad   | nulo              |


### eliminar todo

Eliminar todas las recetas de este registro

```zenscript
craftingTable.removeAll();
```

### eliminar por Modo

Eliminar receta basada en la modificación del nombre del registro

```zenscript
craftingTable.removeByModid(modid as String);
craftingTable.removeByModid("minecraft");
```

| Parámetro | Tipo   | Descripción                        |
| --------- | ------ | ---------------------------------- |
| modificar | Cadena | modificar las recetas para remover |


### removeByName

Eliminar receta basada en el nombre del registro

```zenscript
craftingTable.removeByName(nombre como cadena);
craftingTable.removeByName("minecraft:furnace");
```

| Parámetro | Tipo   | Descripción                                   |
| --------- | ------ | --------------------------------------------- |
| nombre    | Cadena | nombre de registro de la receta para eliminar |


### removeByRegex

Eliminar receta basada en regex

```zenscript
craftingTable.removeByRegex(regex as String);
craftingTable.removeByRegex("\\d_\\d");
```

| Parámetro | Tipo   | Descripción                    |
| --------- | ------ | ------------------------------ |
| regex     | Cadena | regex contra el cual emparejar |


### eliminar receta

Elimina una receta basada en su salida.

```zenscript
craftingTable.removeRecipe(output as crafttweaker.api.item.IIItemStack);
craftingTable.removeRecipe(<item:minecraft:glass>);
```

| Parámetro | Tipo                                                              | Descripción         |
| --------- | ----------------------------------------------------------------- | ------------------- |
| salida    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | salida de la receta |



