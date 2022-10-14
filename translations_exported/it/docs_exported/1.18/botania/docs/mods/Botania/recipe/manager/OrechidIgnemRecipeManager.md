# OrechidIgnemRecipeManager



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.recipe.manager.OrechidIgnemRecipeManager;
```


## Interfacce Implementate
OrechidIgnemRecipeManager implements the following interfaces. That means all methods defined in these interfaces are also available in OrechidIgnemRecipeManager

- [IOrechidManagerBase](/mods/Botania/recipe/manager/base/IOrechidManagerBase)

## Metodi

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
OrechidIgnemRecipeManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parametro | Tipo                                 | Descrizione             |
| --------- | ------------------------------------ | ----------------------- |
| nome      | string                               | No Description Provided |
| mapData   | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// OrechidIgnemRecipeManager.getAllRecipes() as stdlib.List<T>

<recipetype:botania:orechid_ignem>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
OrechidIgnemRecipeManager.getRecipeByName(name as string) as T
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// OrechidIgnemRecipeManager.getRecipeMap() as T[ResourceLocation]

<recipetype:botania:orechid_ignem>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
OrechidIgnemRecipeManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=registerOreWeight}

Registers a new ore weight.

Return Type: void

```zenscript
// OrechidIgnemRecipeManager.registerOreWeight(name as string, output as BlockIngredient, input as Block, weight as int) as void

<recipetype:botania:orechid_ignem>.registerOreWeight("orechid_test", <blockstate:minecraft:dirt>, <block:minecraft:diamond_ore>, 50);
```

| Parametro | Tipo                                                  | Descrizione             |
| --------- | ----------------------------------------------------- | ----------------------- |
| nome      | string                                                | The name of the weight. |
| output    | [BlockIngredient](/vanilla/api/block/BlockIngredient) | The blocks to output    |
| input     | [Block](/vanilla/api/block/Block)                     | The input block         |
| weight    | int                                                   | The weight              |


:::

:::group{name=remove}

Removes orechid weights that output the given blockstate.

Return Type: void

```zenscript
// OrechidIgnemRecipeManager.remove(output as BlockState) as void

<recipetype:botania:orechid_ignem>.remove(<blockstate:minecraft:dirt>);
```

| Parametro | Tipo                                        | Descrizione                      |
| --------- | ------------------------------------------- | -------------------------------- |
| output    | [BlockState](/vanilla/api/block/BlockState) | The blockstate output to remove. |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// OrechidIgnemRecipeManager.removeAll() as void

<recipetype:botania:orechid_ignem>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
OrechidIgnemRecipeManager.removeByInput(input as IItemStack) as void
```

| Parametro | Tipo                                       | Descrizione             |
| --------- | ------------------------------------------ | ----------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
OrechidIgnemRecipeManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parametro | Tipo                                | Descrizione             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | no       |                                   |
| esclude   | Predicate&lt;string&gt; | No Description Provided | sì       | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
OrechidIgnemRecipeManager.removeByName(name as string) as void
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
OrechidIgnemRecipeManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
```

| Parametro | Tipo                                | Descrizione             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| regex     | string                              | No Description Provided | no       |                                   |
| esclude   | Predicate&lt;string&gt; | No Description Provided | sì       | (name as string) as bool => false |


:::


## Proprietà

| Nome       | Tipo                                                          | Ha Getter | Ha Setter | Descrizione             |
| ---------- | ------------------------------------------------------------- | --------- | --------- | ----------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | sì        | no        | No Description Provided |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | sì        | no        | No Description Provided |

