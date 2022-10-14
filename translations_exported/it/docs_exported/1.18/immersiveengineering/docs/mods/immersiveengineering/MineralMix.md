# MineralMix

Allows you to add or remove Mineral Mix recipes.

 Mineral Mixes consist of a list of weighted itemstack outputs, a weight for how often the mix is selected, a change of how often the mix should fail, a list of dimensions that the mix can be excavated in and a background used in the gui.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.MineralMix;
```


## Interfacce Implementate
MineralMix implements the following interfaces. That means all methods defined in these interfaces are also available in MineralMix

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Metodi

:::group{name=addJsonRecipe}

```zenscript
MineralMix.addJsonRecipe(name as string, mapData as MapData)
```

| Parametro | Tipo                                 |
| --------- | ------------------------------------ |
| nome      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addRecipe}

Adds a Mineral Mix recipe

```zenscript
MineralMix.addRecipe(recipePath as string, outputs as stdlib.List<Percentaged<IItemStack>>, spoils as stdlib.List<Percentaged<IItemStack>>, weight as int, failChance as float, dimensions as ResourceLocation[], background as Block)
```

| Parametro  | Tipo                                                                                                                                             | Descrizione                                           |
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

| Parametro | Tipo   |
| --------- | ------ |
| nome      | string |


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

| Parametro | Tipo                                               |
| --------- | -------------------------------------------------- |
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


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

| Parametro | Tipo                                       |
| --------- | ------------------------------------------ |
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
MineralMix.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parametro | Tipo                                | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| modid     | string                              | no       |                                   |
| esclude   | Predicate&lt;string&gt; | sì       | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
MineralMix.removeByName(names as string[])
```

| Parametro | Tipo     |
| --------- | -------- |
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
MineralMix.removeByRegex(regex as string, exclude as Predicate<string>)
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

