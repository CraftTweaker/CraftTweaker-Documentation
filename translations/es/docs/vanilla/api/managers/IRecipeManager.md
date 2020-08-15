# IRecipeManager

Default interface for Registry based handlers as they can all remove recipes by ResourceLocation.

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.registries.IRecipeManager
```

## Implemented Interfaces
IRecipeManager implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

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



## Propiedades

| Nombre        | Tipo   | Has Getter | Has Setter |
| ------------- | ------ | ---------- | ---------- |
| commandString | Cadena | verdad     | falso      |

