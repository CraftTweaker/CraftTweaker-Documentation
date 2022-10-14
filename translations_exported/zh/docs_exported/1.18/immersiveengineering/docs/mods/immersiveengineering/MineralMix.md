# MineralMix

Allows you to add or remove Mineral Mix recipes.

 Mineral Mixes consist of a list of weighted itemstack outputs, a weight for how often the mix is selected, a change of how often the mix should fail, a list of dimensions that the mix can be excavated in and a background used in the gui.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.MineralMix;
```


## 已实现的接口
MineralMix implements the following interfaces. That means all methods defined in these interfaces are also available in MineralMix

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## 使用方式

:::group{name=addJsonRecipe}

```zenscript
MineralMix.addJsonRecipe(name as string, mapData as MapData)
```

| 参数       | 类型                                         |
| -------- | ------------------------------------------ |
| name（名称） | string                                     |
| mapData  | [MapData #地图数据](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a Mineral Mix recipe

```zenscript
MineralMix.addRecipe(recipePath as string, outputs as stdlib.List<Percentaged<IItemStack>>, spoils as stdlib.List<Percentaged<IItemStack>>, weight as int, failChance as float, dimensions as ResourceLocation[], background as Block)
```

| 参数         | 类型                                                                                                                                               | 描述                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| recipePath | string                                                                                                                                           | The recipe name, without the resource location        |
| outputs    | stdlib.List&lt;[Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;&gt; | The WeightedItemStack array outputs                   |
| spoils     | stdlib.List&lt;[Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;&gt; | The WeightedItemStack array spoils                    |
| weight     | int                                                                                                                                              | How often should the Mix be exavated.                 |
| failChance | float                                                                                                                                            | The chance for the Mix to fail excavation.            |
| dimensions | [ResourceLocation](/vanilla/api/resource/ResourceLocation)[]                                                                                     | The list of dimensions that this Mix can be mined in. |
| background | [Block](/vanilla/api/block/Block)                                                                                                                | The background block used in samples                  |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// MineralMix.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:mineral_mix>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
MineralMix.getRecipeByName(name as string) as T
```

| 参数       | 类型     |
| -------- | ------ |
| name（名称） | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// MineralMix.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:mineral_mix>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
MineralMix.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| 参数         | 类型                                                     |
| ---------- | ------------------------------------------------------ |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// MineralMix.removeAll()

<recipetype:immersiveengineering:mineral_mix>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
MineralMix.removeByInput(input as IItemStack)
```

| 参数        | 类型                                         |
| --------- | ------------------------------------------ |
| input（输入） | [IItemstack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
MineralMix.removeByModid(modid as string, exclude as Predicate<string>)
```

| 参数    | 类型                                  | 可选    | 默认值                               |
| ----- | ----------------------------------- | ----- | --------------------------------- |
| modid | string                              | false |                                   |
| 不包含   | Predicate&lt;string&gt; | true  | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
MineralMix.removeByName(names as string[])
```

| 参数    | 类型       |
| ----- | -------- |
| names | string[] |


:::

:::group{name=removeByRegex}

```zenscript
MineralMix.removeByRegex(regex as string, exclude as Predicate<string>)
```

| 参数    | 类型                                  | 可选    | 默认值                               |
| ----- | ----------------------------------- | ----- | --------------------------------- |
| regex | string                              | false |                                   |
| 不包含   | Predicate&lt;string&gt; | true  | (name as string) as bool => false |


:::


## 参数

| 名称         | 类型                                                            | 可获得  | 可设置   |
| ---------- | ------------------------------------------------------------- | ---- | ----- |
| allRecipes | stdlib.List&lt;T&gt;                              | true | false |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true | false |

