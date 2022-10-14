# BottlingMachine

Allows you to add or remove Bottling Machine recipes.

 Bottling Machine recipes consist of an item ingredient, a fluid input and an item output.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.BottlingMachine;
```


## Interfacce Implementate
BottlingMachine implements the following interfaces. That means all methods defined in these interfaces are also available in BottlingMachine

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Metodi

:::group{name=addJsonRecipe}

```zenscript
BottlingMachine.addJsonRecipe(name as string, mapData as MapData)
```

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| nome      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a recipe to the Bottling Machine. The bottling Machine only goes via Fluid tag!

```zenscript
BottlingMachine.addRecipe(recipePath as string, inputs as IIngredientWithAmount[], fluidTag as Many<MCTag>, outputs as IItemStack[])
```

| Parametro  | Tipo                                                                              | Descrizione                                    |
| ---------- | --------------------------------------------------------------------------------- | ---------------------------------------------- |
| recipePath | string                                                                            | The recipe name, without the resource location |
| inputs     | [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)[]          | The item input (the items to be filled)        |
| fluidTag   | [Many](/vanilla/api/util/Many)&lt;[MCTag](/vanilla/api/tag/MCTag)&gt; | The fluid tag of the fluid                     |
| outputs    | [IItemStack](/vanilla/api/item/IItemStack)[]                                      | The resulting "filled" items.                  |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// BottlingMachine.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:bottling_machine>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
BottlingMachine.getRecipeByName(name as string) as T
```

| Parametro | Tipo   |
| --------- | ------ |
| nome      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// BottlingMachine.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:bottling_machine>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
BottlingMachine.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
BottlingMachine.remove(output as IIngredient)
```

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// BottlingMachine.removeAll()

<recipetype:immersiveengineering:bottling_machine>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
BottlingMachine.removeByInput(input as IItemStack)
```

| Parametro | Tipo                                       |
| --------- | ------------------------------------------ |
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
BottlingMachine.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parametro | Tipo                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| modid     | string                              | no       |                                   |
| esclude   | Predicate&lt;string&gt; | sì       | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
BottlingMachine.removeByName(names as string[])
```

| Parametro | Tipo     |
| --------- | -------- |
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
BottlingMachine.removeByRegex(regex as string, exclude as Predicate<string>)
```

| Parametro | Tipo                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| regex     | string                              | no       |                                   |
| esclude   | Predicate&lt;string&gt; | sì       | (name as string) as bool => false |


:::


## Proprietà

| Nome       | Tipo                                                          | Ha Getter | Ha Setter |
| ---------- | ------------------------------------------------------------- | --------- | --------- |
| allRecipes | stdlib.List&lt;T&gt;                              | sì        | no        |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | sì        | no        |

