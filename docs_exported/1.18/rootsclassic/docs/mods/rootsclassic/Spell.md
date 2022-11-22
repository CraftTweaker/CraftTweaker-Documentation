# Spell

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.rootsclassic.Spell;
```


## Implemented Interfaces
Spell implements the following interfaces. That means all methods defined in these interfaces are also available in Spell

- [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)

## Methods

:::group{name=addJsonRecipe}

```zenscript
Spell.addJsonRecipe(name as string, mapData as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| name      | string                               |
| mapData   | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=addMortarCrafting}

Adds a new Mortar recipe.

```zenscript
// Spell.addMortarCrafting(uniqueName as string, items as IItemStack[], output as IItemStack)

<recipetype:rootsclassic:component>.addMortarCrafting("gunpowder_to_gold", [<item:minecraft:gunpowder>, <item:minecraft:coal>], <item:minecraft:gold_ingot>);
```

| Parameter  |                     Type                     |          Description          |
|------------|----------------------------------------------|-------------------------------|
| uniqueName | string                                       | The unique name of the recipe |
| items      | [IItemStack](/vanilla/api/item/IItemStack)[] | The inputs of the recipe      |
| output     | [IItemStack](/vanilla/api/item/IItemStack)   | The output of the recipe      |


:::

:::group{name=getAllRecipes}

Return Type: stdlib.List&lt;T&gt;

```zenscript
// Spell.getAllRecipes() as stdlib.List<T>

<recipetype:rootsclassic:component>.getAllRecipes();
```

:::

:::group{name=getRecipeByName}

Return Type: T

```zenscript
Spell.getRecipeByName(name as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| name      | string |


:::

:::group{name=getRecipeMap}

Return Type: T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)]

```zenscript
// Spell.getRecipeMap() as T[ResourceLocation]

<recipetype:rootsclassic:component>.getRecipeMap();
```

:::

:::group{name=getRecipesByOutput}

Return Type: stdlib.List&lt;T&gt;

```zenscript
Spell.getRecipesByOutput(output as IIngredient) as stdlib.List<T>
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=remove}

```zenscript
Spell.remove(output as IIngredient)
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| output    | [IIngredient](/vanilla/api/ingredient/IIngredient) |


:::

:::group{name=removeAll}

```zenscript
// Spell.removeAll()

<recipetype:rootsclassic:component>.removeAll();
```

:::

:::group{name=removeByInput}

```zenscript
Spell.removeByInput(input as IItemStack)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| input     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=removeByModid}

```zenscript
Spell.removeByModid(modid as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| modid     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=removeByName}

```zenscript
Spell.removeByName(names as string[])
```

| Parameter |   Type   |
|-----------|----------|
| names     | string[] |


:::

:::group{name=removeByRegex}

```zenscript
Spell.removeByRegex(regex as string, exclude as Predicate<string>)
```

| Parameter |          Type           | Optional |           Default Value           |
|-----------|-------------------------|----------|-----------------------------------|
| regex     | string                  | false    |                                   |
| exclude   | Predicate&lt;string&gt; | true     | (name as string) as bool => false |


:::

:::group{name=setSpellIngredients}

Modify the ingredients of an existing Spell Recipe, in order to keep the Spell Powder with the right type.
 Names must be one of:
 <ul>
 <li>rose_bush, </li> <li>dandelion, </li> <li> chorus, </li> <li> nether_wart, </li> <li> peony, </li> <li> sunflower, </li> <li> azure_bluet, </li> <li> allium, </li> <li> lilac, </li> <li> white_tulip, </li> <li> red_tulip, </li> <li> blue_orchid, </li> <li> poppy, </li> <li> poisonous_potato, </li> <li> orange_tulip, </li> <li> pink_tulip, </li> <li> oxeye_daisy, </li> <li> lily_pad, </li> <li> apple, </li> <li> midnight_bloom, </li> <li> flare_orchid, </li> <li> radiant_daisy </li>
 </ul>
 Starting with rootsclassic in order to target the regular roots recipes  (Example: "rootsclassic:rose_bush")

```zenscript
// Spell.setSpellIngredients(name as ResourceLocation, ingredients as IItemStack[])

<recipetype:rootsclassic:component>.setSpellIngredients(<resource:rootsclassic:rose_bush>, [<item:minecraft:tnt>, <item:minecraft:apple>]);
```

|  Parameter  |                            Type                            |            Description             |
|-------------|------------------------------------------------------------|------------------------------------|
| name        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The resourcelocation to target     |
| ingredients | [IItemStack](/vanilla/api/item/IItemStack)[]               | The new ingredients of the recipe. |


:::


## Properties

|    Name    |                             Type                              | Has Getter | Has Setter |
|------------|---------------------------------------------------------------|------------|------------|
| allRecipes | stdlib.List&lt;T&gt;                                          | true       | false      |
| recipeMap  | T[[ResourceLocation](/vanilla/api/resource/ResourceLocation)] | true       | false      |

