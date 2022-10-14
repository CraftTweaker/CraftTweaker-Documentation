# SolarSmeltingManager



## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.solarforge.SolarSmeltingManager;
```


## Interfacce Implementate
SolarSmeltingManager implements the following interfaces. That means all methods defined in these interfaces are also available in SolarSmeltingManager

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;[SolarSmeltingRecipe](/mods/SolarCraft/Recipe/SolarSmeltingRecipe)&gt;

## Metodi

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
SolarSmeltingManager.addJsonRecipe(name as string, mapData as MapData) as void
```

| Parametro | Tipo                                 | Descrizione             |
| --------- | ------------------------------------ | ----------------------- |
| nome      | string                               | No Description Provided |
| mapData   | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=addRecipe}

Uses the Solar Lens and the power of the Sun to Smelt items The sun is a deadly lazer. No IIngredients are supported currently. This can change in the future.

Return Type: void

```zenscript
// SolarSmeltingManager.addRecipe(name as string, output as IItemStack, inputs as IItemStack[], time as int) as void

<recipetype:solarforge:solar_smelting>.addRecipe("test_solar_smelting_recipe", <item:minecraft:diamond_ingot>, [<item:minecraft:coal>, <item:minecraft:coal>, <item:minecraft:coal>, <item:minecraft:coal>, <item:minecraft:gold_ingot>], 200);
```

| Parametro | Tipo                                         | Descrizione                       |
| --------- | -------------------------------------------- | --------------------------------- |
| nome      | string                                       | The recipe name                   |
| output    | [IItemStack](/vanilla/api/item/IItemStack)   | The output of the recipe          |
| inputs    | [IItemStack](/vanilla/api/item/IItemStack)[] | The inputs of the recipe          |
| time      | int                                          | The processing time of the recipe |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// SolarSmeltingManager.getAllRecipes() as stdlib.List<T>

<recipetype:solarforge:solar_smelting>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
SolarSmeltingManager.getRecipeByName(name as string) as T
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// SolarSmeltingManager.getRecipeMap() as T[ResourceLocation]

<recipetype:solarforge:solar_smelting>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
SolarSmeltingManager.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
SolarSmeltingManager.remove(output as IIngredient) as void
```

| Parametro | Tipo                                               | Descrizione             |
| --------- | -------------------------------------------------- | ----------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// SolarSmeltingManager.removeAll() as void

<recipetype:solarforge:solar_smelting>.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
SolarSmeltingManager.removeByInput(input as IItemStack) as void
```

| Parametro | Tipo                                       | Descrizione             |
| --------- | ------------------------------------------ | ----------------------- |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
SolarSmeltingManager.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Parametro | Tipo                                | Descrizione             | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | no       |                                   |
| esclude   | Predicate&lt;string&gt; | No Description Provided | sì       | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
SolarSmeltingManager.removeByName(name as string) as void
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
SolarSmeltingManager.removeByRegex(regex as string, exclude as Predicate<string>) as void
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

