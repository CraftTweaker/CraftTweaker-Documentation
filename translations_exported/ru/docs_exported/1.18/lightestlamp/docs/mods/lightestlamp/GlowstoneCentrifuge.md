# GlowstoneCentrifuge

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import lightestlamp.GlowstoneCentrifuge;
```


## Implemented Interfaces
GlowstoneCentrifuge implements the following interfaces. That means all methods defined in these interfaces are also available in GlowstoneCentrifuge

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Методы

:::group{name=addCentrifugable}

Return Type: void

```zenscript
GlowstoneCentrifuge.addCentrifugable(processTime as int, input as IIngredient) as void
```

| Параметр    | Тип                                                | Описание                |
| ----------- | -------------------------------------------------- | ----------------------- |
| processTime | int                                                | No Description Provided |
| input       | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=addJsonRecipe}

Return Type: void

```zenscript
GlowstoneCentrifuge.addJsonRecipe(name as string, mapData as MapData) as void
```

| Параметр | Тип                                  | Описание                |
| -------- | ------------------------------------ | ----------------------- |
| name     | string                               | No Description Provided |
| mapData  | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// GlowstoneCentrifuge.getAllRecipes() as stdlib.List<T>

myGlowstoneCentrifuge.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
GlowstoneCentrifuge.getRecipeByName(name as string) as T
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| name     | string | No Description Provided |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// GlowstoneCentrifuge.getRecipeMap() as T[ResourceLocation]

myGlowstoneCentrifuge.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
GlowstoneCentrifuge.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Параметр | Тип                                                | Описание                |
| -------- | -------------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=remove}

Return Type: void

```zenscript
GlowstoneCentrifuge.remove(output as IIngredient) as void
```

| Параметр | Тип                                                | Описание                |
| -------- | -------------------------------------------------- | ----------------------- |
| output   | [IIngredient](/vanilla/api/ingredient/IIngredient) | No Description Provided |


:::

:::group{name=removeAll}

Return Type: void

```zenscript
// GlowstoneCentrifuge.removeAll() as void

myGlowstoneCentrifuge.removeAll();
```

:::

:::group{name=removeByInput}

Return Type: void

```zenscript
GlowstoneCentrifuge.removeByInput(input as IItemStack) as void
```

| Параметр | Тип                                        | Описание                |
| -------- | ------------------------------------------ | ----------------------- |
| input    | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::

:::group{name=removeByModid}

Return Type: void

```zenscript
GlowstoneCentrifuge.removeByModid(modid as string, exclude as Predicate<string>) as void
```

| Параметр  | Тип                                 | Описание                | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| modid     | string                              | No Description Provided | false    |                                   |
| исключить | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

Return Type: void

```zenscript
GlowstoneCentrifuge.removeByName(names as string[]) as void
```

| Параметр | Тип      | Описание                |
| -------- | -------- | ----------------------- |
| names    | string[] | No Description Provided |


:::

:::group{name=removeByRegex}

Return Type: void

```zenscript
GlowstoneCentrifuge.removeByRegex(regex as string, exclude as Predicate<string>) as void
```

| Параметр  | Тип                                 | Описание                | Optional | DefaultValue                      |
| --------- | ----------------------------------- | ----------------------- | -------- | --------------------------------- |
| regex     | string                              | No Description Provided | false    |                                   |
| исключить | Predicate&lt;string&gt; | No Description Provided | true     | (name as string) as bool => false |


:::


## Свойства

| Название   | Тип                                                           | Имеет Getter | Имеет Setter | Описание                |
| ---------- | ------------------------------------------------------------- | ------------ | ------------ | ----------------------- |
| allRecipes | stdlib.List&lt;T&gt;                              | true         | false        | No Description Provided |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true         | false        | No Description Provided |

