# Gestor de horno explosivo



Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.Gestor de BlastFurnace
```

## Interfaces implementadas
BlastFurnaceManager implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.brackets.CommandStringMostrar](/vanilla/api/brackets/CommandStringDisplayable)
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Métodos
### addJSONRecipe

Añade una receta basada en un IData proporcionado. El IData proporcionado debe representar un JSON DataPack, esto le permite registrar recetas para cualquier DataPack que soporte sistemas IRecipeType.

```zenscript
blastFurnace.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
blastFurnace.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookkingtime:100});
```

| Parámetro | Tipo                                  | Descripción                           |
| --------- | ------------------------------------- | ------------------------------------- |
| nombre    | Cadena                                | nombre de la receta                   |
| datos     | [data.IData](/vanilla/api/data/IData) | datos que representan el archivo json |


### addReceta

Añade una receta basada en determinados parámetros.

```zenscript
blastFurnace.addRecipe(nombre como String, salida como crafttweaker.api.item.ItemStack, entrada como crafttweaker.api.item.IIngredient, xp as float, cookTime as int);
blastFurnace.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| Parámetro      | Tipo                                                                | Descripción                            |
| -------------- | ------------------------------------------------------------------- | -------------------------------------- |
| nombre         | Cadena                                                              | Nombre de la nueva receta              |
| salida         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | Salida de la pila de ítem de la receta |
| input          | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Entrada de IIngrediente de la receta   |
| xp             | flotante                                                            | cuánto xp obtiene el jugador           |
| hora de cocina | int                                                                 | cuánto tiempo se tarda en cocinar      |


### getRecipeByName

Tipo de devolución: [crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)

```zenscript
blastFurnace.getRecipeByName(nombre como cadena);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| nombre    | Cadena | No se proporcionó descripción |


### Obtener recetas por salida

Tipo de retorno: Lista&lt;[crafttweaker.api.recipes.WrapperRecipe](/crafttweaker/api/recipes/WrapperRecipe)&gt;

```zenscript
blastFurnace.getRecipesByOutput(salida como crafttweaker.api.item.IIngredient);
```

| Parámetro | Tipo                                                                | Descripción                   |
| --------- | ------------------------------------------------------------------- | ----------------------------- |
| salida    | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | No se proporcionó descripción |


### eliminar todo

Eliminar todas las recetas de este registro

```zenscript
blastFurnace.removeAll();
```

### eliminar por Modo

Eliminar receta basada en la modificación del nombre del registro

```zenscript
blastFurnace.removeByModid(modid as String);
blastFurnace.removeByModid("minecraft");
```

| Parámetro | Tipo   | Descripción                        |
| --------- | ------ | ---------------------------------- |
| modificar | Cadena | modificar las recetas para remover |



Quitar receta basada en la modificación del nombre del registro con una comprobación de exclusión añadida, por lo que puede eliminar todo el mod además de unos pocos especificados.

```zenscript
blastFurnace.removeByModid(modid as String, excluir como crafttweaker.api.recipe.RecipeFilter);
blastFurnace.removeByModid("minecraft", (nombre como cadena) => {return name == "naranja_lana";});
```

| Parámetro | Tipo                                                               | Descripción                            |
| --------- | ------------------------------------------------------------------ | -------------------------------------- |
| modificar | Cadena                                                             | modificar las recetas para remover     |
| excluir   | [crafttweaker.api.receta.Receta](/vanilla/api/recipe/RecipeFilter) | recetas para exluir de ser eliminadas. |


### removeByName

Eliminar receta basada en el nombre del registro

```zenscript
blastFurnace.removeByName(nombre como String);
blastFurnace.removeByName("minecraft:furnace");
```

| Parámetro | Tipo   | Descripción                                   |
| --------- | ------ | --------------------------------------------- |
| nombre    | Cadena | nombre de registro de la receta para eliminar |


### removeByRegex

Eliminar receta basada en regex

```zenscript
blastFurnace.removeByRegex(regex as String);
blastFurnace.removeByRegex("\\d_\\d");
```

| Parámetro | Tipo   | Descripción                    |
| --------- | ------ | ------------------------------ |
| regex     | Cadena | regex contra el cual emparejar |


### eliminar receta

Elimina una receta basada en su salida.

```zenscript
blastFurnace.removeRecipe(output as crafttweaker.api.item.ItemStack);
blastFurnace.removeRecipe(<item:minecraft:glass>);
```

| Parámetro | Tipo                                                              | Descripción         |
| --------- | ----------------------------------------------------------------- | ------------------- |
| salida    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | salida de la receta |



Elimina una receta basada en su salida y entrada.

```zenscript
blastFurnace.removeRecipe(output as crafttweaker.api.item.IIItemStack, input as crafttweaker.api.item.IIngredient);
blastFurnace.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| Parámetro | Tipo                                                                | Descripción                           |
| --------- | ------------------------------------------------------------------- | ------------------------------------- |
| salida    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | Salida de ItemStack de la receta.     |
| input     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | IIngrediente de la receta a eliminar. |



## Propiedades

| Nombre        | Tipo   | Tiene Obtén | Tiene Setter |
| ------------- | ------ | ----------- | ------------ |
| commandString | Cadena | verdad      | falso        |

