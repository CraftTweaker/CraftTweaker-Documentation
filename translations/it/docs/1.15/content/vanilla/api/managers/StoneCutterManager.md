# StoneCutterManager



Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.StoneCutterManager
```

## Interfacce Implementate
StoneCutterManager implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.registries.IRecipeManager](/vanilla/api/managers/IRecipeManager)

## Metodi
### addJSONRecipe

Adds a recipe based on a provided IData. The provided IData should represent a DataPack JSON, this effectively allows you to register recipes for any DataPack supporting IRecipeType systems.

```zenscript
stoneCutter.addJSONRecipe(name as String, data as crafttweaker.api.data.IData);
stoneCutter.addJSONRecipe("recipe_name", {ingredient:{item:<item:minecraft:gold_ore>.registryName},result:<item:minecraft:cooked_porkchop>.registryName,experience:0.35 as float, cookingtime:100});
```

| Parametro | Tipo                                                   | Descrizione                     |
| --------- | ------------------------------------------------------ | ------------------------------- |
| nome      | String                                                 | name of the recipe              |
| data      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data representing the json file |


### addRecipe

Adds a recipe to the stone cutter

```zenscript
stoneCutter.addRecipe(recipeName as String, output as crafttweaker.api.item.IItemStack, input as crafttweaker.api.item.IIngredient);
stoneCutter.addRecipe("recipe_name", <item:minecraft:grass>, <tag:minecraft:wool>);
```

| Parametro  | Tipo                                                                | Descrizione        |
| ---------- | ------------------------------------------------------------------- | ------------------ |
| recipeName | String                                                              | name of the recipe |
| output     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | output IItemStack  |
| input      | [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient) | input IIngredient  |


### removeAll

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

| Parametro | Tipo   | Descrizione                    |
| --------- | ------ | ------------------------------ |
| modid     | String | modid of the recipes to remove |


### removeByName

Remove recipe based on Registry name

```zenscript
stoneCutter.removeByName(name as String);
stoneCutter.removeByName("minecraft:furnace");
```

| Parametro | Tipo   | Descrizione                       |
| --------- | ------ | --------------------------------- |
| nome      | String | registry name of recipe to remove |


### removeByRegex

Remove recipe based on regex

```zenscript
stoneCutter.removeByRegex(regex as String);
stoneCutter.removeByRegex("\\d_\\d");
```

| Parametro | Tipo   | Descrizione            |
| --------- | ------ | ---------------------- |
| regex     | String | regex to match against |


### removeRecipe

Remove a recipe based on it's output.

```zenscript
stoneCutter.removeRecipe(output as crafttweaker.api.item.IItemStack);
stoneCutter.removeRecipe(<item:minecraft:glass>);
```

| Parametro | Tipo                                                              | Descrizione          |
| --------- | ----------------------------------------------------------------- | -------------------- |
| output    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | output of the recipe |



## Proprietà

| Nome          | Tipo   | Ha Getter | Ha Setter |
| ------------- | ------ | --------- | --------- |
| commandString | String | sì        | no        |

