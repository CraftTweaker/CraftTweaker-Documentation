# BlastFurnaceFuel

Allows you to add or remove Blast Furnace fuel items.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.BlastFurnaceFuel;
```


## 已实现的接口
BlastFurnaceFuel implements the following interfaces. That means all methods defined in these interfaces are also available in BlastFurnaceFuel

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## 使用方式

:::group{name=addFuel}

Adds a fuel to the Blast Furnace

```zenscript
// BlastFurnaceFuel.addFuel(recipePath as string, fuel as IIngredient, burnTime as int)

<recipetype:immersiveengineering:blast_furnace_fuel>.addFuel("the_sungods_sword_can_burn", <item:minecraft:golden_sword>.withTag({RepairCost: 0 as int, Damage: 0 as int, display: {Name: "{\"text\":\"Sword of the Sungod\"}" as string}}), 100000);
```

| 参数         | 类型                                                     | 描述                                             |
| ---------- | ------------------------------------------------------ | ---------------------------------------------- |
| recipePath | string                                                 | The recipe name, without the resource location |
| fuel       | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | The fuel to be added                           |
| burnTime   | int                                                    | The fuel's burntime                            |


:::

:::group{name=addJsonRecipe}

```zenscript
BlastFurnaceFuel.addJsonRecipe(name as string, mapData as MapData)
```

| 参数       | 类型                                         |
| -------- | ------------------------------------------ |
| name（名称） | string                                     |
| mapData  | [MapData #地图数据](/vanilla/api/data/MapData) |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// BlastFurnaceFuel.getAllRecipes() as stdlib.List<T>

<recipetype:immersiveengineering:blast_furnace_fuel>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
BlastFurnaceFuel.getRecipeByName(name as string) as T
```

| 参数       | 类型     |
| -------- | ------ |
| name（名称） | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// BlastFurnaceFuel.getRecipeMap() as T[ResourceLocation]

<recipetype:immersiveengineering:blast_furnace_fuel>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
BlastFurnaceFuel.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| 参数         | 类型                                                     |
| ---------- | ------------------------------------------------------ |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
BlastFurnaceFuel.remove(output as IIngredient)
```

| 参数         | 类型                                                     |
| ---------- | ------------------------------------------------------ |
| output（输出） | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// BlastFurnaceFuel.removeAll()

<recipetype:immersiveengineering:blast_furnace_fuel>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
BlastFurnaceFuel.removeByInput(input as IItemStack)
```

| 参数        | 类型                                         |
| --------- | ------------------------------------------ |
| input（输入） | [IItemstack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
BlastFurnaceFuel.removeByModid(modid as string, exclude as Predicate<string>)
```

| 参数    | 类型                                  | 可选    | 默认值                               |
| ----- | ----------------------------------- | ----- | --------------------------------- |
| modid | string                              | false |                                   |
| 不包含   | Predicate&lt;string&gt; | true  | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
BlastFurnaceFuel.removeByName(names as string[])
```

| 参数    | 类型       |
| ----- | -------- |
| names | string[] |


:::

:::group{name=removeByRegex}

```zenscript
BlastFurnaceFuel.removeByRegex(regex as string, exclude as Predicate<string>)
```

| 参数    | 类型                                  | 可选    | 默认值                               |
| ----- | ----------------------------------- | ----- | --------------------------------- |
| regex | string                              | false |                                   |
| 不包含   | Predicate&lt;string&gt; | true  | (name as string) as bool => false |


:::

:::group{name=removeFuel}

Removes the fuel value for this item

```zenscript
// BlastFurnaceFuel.removeFuel(fuel as IItemStack)

<recipetype:immersiveengineering:blast_furnace_fuel>.removeFuel(<item:minecraft:charcoal>);
```

| 参数   | 类型                                         | 描述                 |
| ---- | ------------------------------------------ | ------------------ |
| fuel | [IItemstack](/vanilla/api/item/IItemStack) | The fuel to remove |


:::


## 参数

| 名称         | 类型                                                            | 可获得  | 可设置   |
| ---------- | ------------------------------------------------------------- | ---- | ----- |
| allRecipes | stdlib.List&lt;T&gt;                              | true | false |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true | false |

