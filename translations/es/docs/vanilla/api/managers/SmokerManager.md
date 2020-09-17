# Gestor de humo



Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.smokerManager
```

## Interfaces implementadas
smokerManager implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.registries.ICookingRecipeManager](/vanilla/api/managers/ICookingRecipeManager)

## Métodos
### addJSONRecipe

Añade una receta basada en un IData proporcionado. El IData proporcionado debe representar un JSON DataPack, esto le permite registrar recetas para cualquier DataPack que soporte sistemas IRecipeType.

```zenscript
smoker.addJSONRecipe(nombre como String, datos como crafttweaker.api.data.IData);
smoker.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookkingtime:100});
```

| Parámetro | Tipo                                  | Descripción                           |
| --------- | ------------------------------------- | ------------------------------------- |
| nombre    | Cadena                                | nombre de la receta                   |
| datos     | [data.IData](/vanilla/api/data/IData) | datos que representan el archivo json |


### addReceta

Añade una receta basada en determinados parámetros.

```zenscript
smoker.addRecipe(nombre como String, salida como crafttweaker.api.item.IItemStack, entrada como crafttweaker.api.item.IIngredient, xp as float, cookTime as int);
smoker.addRecipe("wool2diamond", <item:diamond>, <tag:minecraft:wool>, 1.0, 0);
```

| Parámetro      | Tipo                                                                | Descripción                            |
| -------------- | ------------------------------------------------------------------- | -------------------------------------- |
| nombre         | Cadena                                                              | Nombre de la nueva receta              |
| salida         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | Salida de la pila de ítem de la receta |
| input          | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | Entrada de IIngrediente de la receta   |
| xp             | flotante                                                            | cuánto xp obtiene el jugador           |
| hora de cocina | int                                                                 | cuánto tiempo se tarda en cocinar      |


### eliminar todo

Eliminar todas las recetas de este registro

```zenscript
smoker.removeAll();
```

### eliminar por Modo

Eliminar receta basada en la modificación del nombre del registro

```zenscript
smoker.removeByModid(modid as String);
smoker.removeByModid("minecraft");
```

| Parámetro | Tipo   | Descripción                        |
| --------- | ------ | ---------------------------------- |
| modificar | Cadena | modificar las recetas para remover |


### removeByName

Eliminar receta basada en el nombre del registro

```zenscript
smoker.removeByName(nombre como cadena);
smoker.removeByName("minecraft:furnace");
```

| Parámetro | Tipo   | Descripción                                   |
| --------- | ------ | --------------------------------------------- |
| nombre    | Cadena | nombre de registro de la receta para eliminar |


### removeByRegex

Eliminar receta basada en regex

```zenscript
smoker.removeByRegex(regex as String);
smoker.removeByRegex("\\d_\\d");
```

| Parámetro | Tipo   | Descripción                    |
| --------- | ------ | ------------------------------ |
| regex     | Cadena | regex contra el cual emparejar |


### eliminar receta

Elimina una receta basada en su salida.

```zenscript
smoker.removeRecipe(output as crafttweaker.api.item.IItemStack);
smoker.removeRecipe(<item:minecraft:glass>);
```

| Parámetro | Tipo                                                              | Descripción         |
| --------- | ----------------------------------------------------------------- | ------------------- |
| salida    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | salida de la receta |



Elimina una receta basada en su salida y entrada.

```zenscript
smoker.removeRecipe(output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
smoker.removeRecipe(<item:minecraft:diamond>, <tag:minecraft:wool>);
```

| Parámetro | Tipo                                                                | Descripción                           |
| --------- | ------------------------------------------------------------------- | ------------------------------------- |
| salida    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | Salida de ItemStack de la receta.     |
| input     | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | IIngrediente de la receta a eliminar. |



