# BlastFurnaceFuel

Allows you to add or remove Blast Furnace fuel items.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.immersiveengineering.BlastFurnaceFuel;
```


## Implemented Interfaces
BlastFurnaceFuel implements the following interfaces. That means all methods defined in these interfaces are also available in BlastFurnaceFuel

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Методы

:::group{name=addFuel}

Adds a fuel to the Blast Furnace

```zenscript
// BlastFurnaceFuel.addFuel(recipePath as string, fuel as IIngredient, burnTime as int)

<recipetype:immersiveengineering:blast_furnace_fuel>.addFuel("the_sungods_sword_can_burn", <item:minecraft:golden_sword>.withTag({RepairCost: 0 as int, Damage: 0 as int, display: {Name: "{\"text\":\"Sword of the Sungod\"}" as string}}), 100000);
```

| Параметр   | Тип                                                | Описание                                       |
| ---------- | -------------------------------------------------- | ---------------------------------------------- |
| recipePath | string                                             | The recipe name, without the resource location |
| fuel       | [IIngredient](/vanilla/api/ingredient/IIngredient) | The fuel to be added                           |
| burnTime   | int                                                | The fuel's burntime                            |


:::

:::group{name=addJsonRecipe}

```zenscript
BlastFurnaceFuel.addJsonRecipe(name as string, mapData as MapData)
```

| Параметр | Тип                                  |
| -------- | ------------------------------------ |
| name     | string                               |
| mapData  | [MapData](/vanilla/api/data/MapData) |


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

| Параметр | Тип    |
| -------- | ------ |
| name     | string |


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

| Параметр | Тип                                                |
| -------- | -------------------------------------------------- |
| output   | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
BlastFurnaceFuel.remove(output as IIngredient)
```

| Параметр | Тип                                                |
| -------- | -------------------------------------------------- |
| output   | [IIngredient](/vanilla/api/ingredient/IIngredient) |


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

| Параметр | Тип                                        |
| -------- | ------------------------------------------ |
| input    | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
BlastFurnaceFuel.removeByModid(modid as string, exclude as Predicate<string>)
```

| Параметр  | Тип                                 | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| modid     | string                              | false    |                                   |
| исключить | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
BlastFurnaceFuel.removeByName(names as string[])
```

| Параметр | Тип      |
| -------- | -------- |
| names    | string[] |


:::

:::group{name=removeByRegex}

```zenscript
BlastFurnaceFuel.removeByRegex(regex as string, exclude as Predicate<string>)
```

| Параметр  | Тип                                 | Optional | Default Value                     |
| --------- | ----------------------------------- | -------- | --------------------------------- |
| regex     | string                              | false    |                                   |
| исключить | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeFuel}

Removes the fuel value for this item

```zenscript
// BlastFurnaceFuel.removeFuel(fuel as IItemStack)

<recipetype:immersiveengineering:blast_furnace_fuel>.removeFuel(<item:minecraft:charcoal>);
```

| Параметр | Тип                                        | Описание           |
| -------- | ------------------------------------------ | ------------------ |
| fuel     | [IItemStack](/vanilla/api/item/IItemStack) | The fuel to remove |


:::


## Свойства

| Название   | Тип                                                           | Имеет Getter | Имеет Setter |
| ---------- | ------------------------------------------------------------- | ------------ | ------------ |
| allRecipes | stdlib.List&lt;T&gt;                              | true         | false        |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true         | false        |

