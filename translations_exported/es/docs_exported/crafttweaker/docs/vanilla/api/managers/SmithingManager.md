# Gestor de forja



Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.SmithingManager
```

## Interfaces implementadas
SmithingManager implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.brackets.CommandStringMostrar](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Métodos
### addJSONRecipe

Añade una receta basada en un IData proporcionado. El IData proporcionado debe representar un JSON DataPack, esto le permite registrar recetas para cualquier DataPack que soporte sistemas IRecipeType.

```zenscript
smithing.addJSONRecipe(nombre como String, datos como crafttweaker.api.data.IData);
smithing.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},resultado:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 como float, cookkingtime:100});
```

| Parámetro | Tipo                                  | Descripción                           |
| --------- | ------------------------------------- | ------------------------------------- |
| nombre    | Cadena                                | nombre de la receta                   |
| datos     | [data.IData](/vanilla/api/data/IData) | datos que representan el archivo json |


### addReceta

Añade una receta a la mesa de forjado.

```zenscript
smithing.addRecipe(recipeName as String, result as crafttweaker.api.item.IItemStack, base as crafttweaker.api.item.IIngredient, addition as crafttweaker.api.item.IIngredient);
smithing.addRecipe("recipe_name", <item:minecraft:golden_apple>, <item:minecraft:apple>, <tag:forge:ingots/gold>);
```

| Parámetro    | Tipo                                                                | Descripción                           |
| ------------ | ------------------------------------------------------------------- | ------------------------------------- |
| recipeNombre | Cadena                                                              | Nombre de la receta.                  |
| resultado    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | El objeto creado por la receta.       |
| base         | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | El ingrediente inicial de la receta.  |
| añadir       | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | El elemento añadido al elemento base. |


### getRecipeByName

Tipo de devolución: [crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
smithing.getRecipeByName(nombre como String);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| nombre    | Cadena | No se proporcionó descripción |


### Obtener recetas por salida

Tipo de retorno: Lista&lt;[crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
smithing.getRecipesByOutput(salida como crafttweaker.api.item.IIngredient);
```

| Parámetro | Tipo                                                                | Descripción                   |
| --------- | ------------------------------------------------------------------- | ----------------------------- |
| salida    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | No se proporcionó descripción |


### eliminar todo

Eliminar todas las recetas de este registro

```zenscript
smithing.removeAll();
```

### eliminar por Modo

Eliminar receta basada en la modificación del nombre del registro

```zenscript
smithing.removeByModid(modid as String);
smithing.removeByModid("minecraft");
```

| Parámetro | Tipo   | Descripción                        |
| --------- | ------ | ---------------------------------- |
| modificar | Cadena | modificar las recetas para remover |



Quitar receta basada en la modificación del nombre del registro con una comprobación de exclusión añadida, por lo que puede eliminar todo el mod además de unos pocos especificados.

```zenscript
smithing.removeByModid(modid as String, excluir como crafttweaker.api.recipe.RecipeFilter);
smithing.removeByModid("minecraft", (nombre como cadena) => {return name == "naranja_lana";});
```

| Parámetro | Tipo                                                               | Descripción                            |
| --------- | ------------------------------------------------------------------ | -------------------------------------- |
| modificar | Cadena                                                             | modificar las recetas para remover     |
| excluir   | [crafttweaker.api.receta.Receta](/vanilla/api/recipe/RecipeFilter) | recetas para exluir de ser eliminadas. |


### removeByName

Eliminar receta basada en el nombre del registro

```zenscript
smithing.removeByName(nombre como String);
smithing.removeByName("minecraft:furnace");
```

| Parámetro | Tipo   | Descripción                                   |
| --------- | ------ | --------------------------------------------- |
| nombre    | Cadena | nombre de registro de la receta para eliminar |


### removeByRegex

Eliminar receta basada en regex

```zenscript
smithing.removeByRegex(regex as String);
smithing.removeByRegex("\\d_\\d");
```

| Parámetro | Tipo   | Descripción                    |
| --------- | ------ | ------------------------------ |
| regex     | Cadena | regex contra el cual emparejar |


### eliminar receta

Elimina una receta basada en su salida.

```zenscript
smithing.removeRecipe(output as crafttweaker.api.item.IItemStack);
smithing.removeRecipe(<item:minecraft:glass>);
```

| Parámetro | Tipo                                                              | Descripción         |
| --------- | ----------------------------------------------------------------- | ------------------- |
| salida    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | salida de la receta |



## Propiedades

| Nombre        | Tipo   | Tiene Obtén | Tiene Setter |
| ------------- | ------ | ----------- | ------------ |
| commandString | Cadena | verdad      | falso        |

