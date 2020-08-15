# StoneCutterManager



Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.StoneCutterManager
```

## Implemented Interfaces
StoneCutterManager implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Métodos
### addJSONRecipe

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

```zenscript
stoneCutter.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
stoneCutter.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parámetro | Tipo                                                   | Descripción                     |
| --------- | ------------------------------------------------------ | ------------------------------- |
| nombre    | Cadena                                                 | name of the recipe              |
| datos     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addReceta

Adds a recipe to the stone cutter

```zenscript
stoneCutter.addRecipe(recipeName as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
stoneCutter.addRecipe("recipe_name", <item:minecraft:grass>, <tag:minecraft:wool>);
```

| Parámetro  | Tipo                                                                | Descripción        |
| ---------- | ------------------------------------------------------------------- | ------------------ |
| recipeName | Cadena                                                              | name of the recipe |
| salida     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | output IItemStack  |
| input      | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | input IIngredient  |


### eliminar todo

Remove all recipes in this registry

```zenscript
stoneCutter.removeAll();
```

### removeByModid

Remove recipe based on Registry name modid

```zenscript
stoneCutter.removeByModid(modid as String);
stoneCutter.removeByModid("minecraft");
```

| Parámetro | Tipo   | Descripción                    |
| --------- | ------ | ------------------------------ |
| modificar | Cadena | modid of the recipes to remove |


### removeByName

Remove recipe based on Registry name

```zenscript
stoneCutter.removeByName(name as String);
stoneCutter.removeByName("minecraft:furnace");
```

| Parámetro | Tipo   | Descripción                       |
| --------- | ------ | --------------------------------- |
| nombre    | Cadena | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
stoneCutter.removeByRegex(regex as String);
stoneCutter.removeByRegex("\\d_\\d");
```

| Parámetro | Tipo   | Descripción            |
| --------- | ------ | ---------------------- |
| regex     | Cadena | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

```zenscript
stoneCutter.removeRecipe(output as crafttweaker.api.item.IItemStack);
stoneCutter.removeRecipe(<item:minecraft:glass>);
```

| Parámetro | Tipo                                                              | Descripción          |
| --------- | ----------------------------------------------------------------- | -------------------- |
| salida    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



## Propiedades

| Nombre        | Tipo   | Has Getter | Has Setter |
| ------------- | ------ | ---------- | ---------- |
| commandString | Cadena | verdad     | falso      |

