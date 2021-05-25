# Replacer

Handles the replacing of ingredients in recipes for various [IRecipeManager](/vanilla/api/managers/IRecipeManager)s and [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)s.

 Differently from various other mechanisms in CraftTweaker, each replacement that gets specified from within a `Replacer` doesn't get run immediately, rather it gets stored and all replacements are then applied together when the [this](.)#execute() method is called. This change is done so that multiple replacements can be performed at the same time, with a net gain on performance.<strong>Note</strong> that replacement must be explicitly supported by modded recipe types and managers, meaning that a `Replacer` may not be able to perform replacement on a certain set of recipes. If this is the case, a warning will be printed in the logs, so that you may review it.

 Creating a `Replacer` gets done via the various `forXxx` methods, where `Xxx` identifies any suffix. Refer to the specific documentation to get more information on their behavior.

 The various `replace` methods, listed both in this page and in other mod's possible expansions, then allow you to specify what should be the replacements that need to be carried out by the `Replacer` itself.

 All recipes that get replaced by a `Replacer` get renamed according to a set naming scheme. You can modify completely by providing a lambda via [this](.)#useForRenaming(BiFunction), or just for a specific set of recipes via [this](.)#explicitlyRename(ResourceLocation, String).

 An example usage of a `Replacer` could be `Replacer.forTypes(crafingTable).replace(<item:minecraft:string>, <item:minecraft:diamond>).execute();`

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.Replacer;
```


## Static Methods

:::group{name=forAllTypes}

Creates a `Replacer` that will perform replacements globally. <br />  <br />  In other words, the replacer will perform ingredient replacement on <strong>every</strong> recipe manager in <br />  the game, as long as it supports replacement.

Returns: A new global `Replacer`.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.forAllTypes() as Replacer

Replacer.forAllTypes();
```

:::

:::group{name=forAllTypesExcluding}

Creates a `Replacer` that will perform replacements on all [IRecipeManager](/vanilla/api/managers/IRecipeManager)s except the ones <br />  specified.

Returns: A new `Replacer` that targets all managers except the ones specified.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.forAllTypesExcluding(managers as IRecipeManager[]) as Replacer

Replacer.forAllTypesExcluding(stoneCutter);
```

| Parameter | Type                                                     | Description                                |
| --------- | -------------------------------------------------------- | ------------------------------------------ |
| managers  | [IRecipeManager](/vanilla/api/managers/IRecipeManager)[] | The managers to exclude from the replacer. |


:::

:::group{name=forRecipes}

Creates a `Replacer` that targets only the specified [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)s. <br />  <br />  In other words, the replacer will perform ingredient replacement <strong>only</strong> on the recipes that <br />  are given in this list.

Returns: A new `Replacer` that targets only the specified recipes.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.forRecipes(recipes as WrapperRecipe[]) as Replacer

Replacer.forRecipes(craftingTable.getRecipeByName("minecraft:emerald_block"));
```

| Parameter | Type                                                 | Description                                                                   |
| --------- | ---------------------------------------------------- | ----------------------------------------------------------------------------- |
| recipes   | [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[] | The recipes that should be targeted by the replacer. It must be at least one. |


:::

:::group{name=forTypes}

Creates a `Replacer` that targets only the specified [IRecipeManager](/vanilla/api/managers/IRecipeManager)s. <br />  <br />  In other words, the replacer will perform ingredient replacement <strong>only</strong> on the managers that <br />  are given in this list.

Returns: A new `Replacer` that targets only the specified managers.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.forTypes(managers as IRecipeManager[]) as Replacer

Replacer.forTypes(smithing);
```

| Parameter | Type                                                     | Description                                                                  |
| --------- | -------------------------------------------------------- | ---------------------------------------------------------------------------- |
| managers  | [IRecipeManager](/vanilla/api/managers/IRecipeManager)[] | The managers that will be targeted by the replacer. It must be at least one. |


:::

## Methods

:::group{name=excluding}

Excludes a set of recipes, identified by their name, from undergoing replacement.

Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.excluding(recipes as MCResourceLocation[]) as Replacer

Replacer.forAllTypes().excluding(<resource:minecraft:comparator>);
```

| Parameter | Type                                                         | Description                                  |
| --------- | ------------------------------------------------------------ | -------------------------------------------- |
| recipes   | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)[] | The list of recipes that should be excluded. |


:::

:::group{name=execute}

Executes all replacements that have been queued on this replacer, if any.

Return Type: void

```zenscript
// Replacer.execute() as void

Replacer.forAllTypes().execute();
```

:::

:::group{name=explicitlyRename}

Indicates that the recipe with the given `oldName` should be renamed to the `newName`.

 This rename will only be applied if a replacement is carried out. Moreover, the given new name will also be fixed according to [NameUtils](/vanilla/api/util/NameUtils)#fixing(String).

Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.explicitlyRename(oldName as MCResourceLocation, newName as string) as Replacer

Replacer.forAllTypes().explicitlyRename(<resource:minecraft:birch_sign>, "damn_hard_birch_sign");
```

| Parameter | Type                                                                  | Description                                                                                                      |
| --------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| oldName   | [format@@0 MCRessourceLocation](/vanilla/api/util/MCResourceLocation) | The [MCResourceLocation](/vanilla/api/util/MCResourceLocation) of the name of the recipe that should be renamed. |
| newName   | string                                                                | The new name of the recipe.                                                                                      |


:::

:::group{name=replace}

Replaces every match of the `from` [IIngredient](/vanilla/api/items/IIngredient) with the one given in `to`.

 This replacement behavior is recursive, meaning that any `IIngredient` that gets found is looped recursively trying to identify matches. As an example, attempting to replace `<item:minecraft:stone>` with `<item:minecraft:diamond>` will perform this replacement even in compound ingredients, such as `<item:minecraft:stone> | <item:minecraft:gold_ingot>` or `<tag:items:minecraft:stones>` (supposing that `minecraft:stones` is a tag that contains `minecraft:stone` among other items).

 If this behavior is not desired, refer to [this](.)#replaceFully(IIngredient, IIngredient) instead.

 This method is a specialized by [this](.)#replace(IItemStack, IIngredient) for [IItemStack](/vanilla/api/items/IItemStack)s and should be preferred in these cases.

Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.replace(from as IIngredient, to as IIngredient) as Replacer

Replacer.forAllTypes().replace(<tag:items:forge:storage_blocks/redstone>, <item:minecraft:diamond_block>);
```

| Parameter | Type                                          | Description                                                                                                  |
| --------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| from      | [IIngredient](/vanilla/api/items/IIngredient) | An [IIngredient](/vanilla/api/items/IIngredient) that will be used to match stacks that need to be replaced. |
| to        | [IIngredient](/vanilla/api/items/IIngredient) | The replacement [IIngredient](/vanilla/api/items/IIngredient).                                               |


:::

:::group{name=replace}

Replaces every match of the `from` [IItemStack](/vanilla/api/items/IItemStack) with the one given in `to`.

 This replacement behavior is recursive, meaning that any `IIngredient` that gets found is looped recursively trying to identify matches. As an example, attempting to replace `<item:minecraft:stone>` with `<item:minecraft:diamond>` will perform this replacement even in compound ingredients, such as `<item:minecraft:stone> | <item:minecraft:gold_ingot>` or `<tag:items:minecraft:stones>` (supposing that `minecraft:stones` is a tag that contains `minecraft:stone` among other items).

 If this behavior is not desired, refer to [this](.)#replaceFully(IIngredient, IIngredient) instead.

 This method is a specialization of [this](.)#replace(IIngredient, IIngredient) for [IItemStack](/vanilla/api/items/IItemStack)s and should be preferred in these cases.

Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.replace(from as IItemStack, to as IIngredient) as Replacer

Replacer.forAllTypes().replace(<item:minecraft:coal_block>, <item:minecraft:diamond_block>);
```

| Parameter | Type                                          | Description                                                                                                |
| --------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| from      | [IItemStack](/vanilla/api/items/IItemStack)   | An [IItemStack](/vanilla/api/items/IItemStack) that will be used to match stacks that need to be replaced. |
| to        | [IIngredient](/vanilla/api/items/IIngredient) | The replacement [IIngredient](/vanilla/api/items/IIngredient).                                             |


:::

:::group{name=replaceFully}

Replaces every instance of the target `from` [IIngredient](/vanilla/api/items/IIngredient) with the `to` one.

 This replacement behavior is not recursive, meaning that the `IIngredient`s will be matched closely instead of recursively. As an example, attempting to replace fully `<item:minecraft:stone>` will only replace ingredients that explicitly specify `<item:minecraft:stone>` as an input, while compound ingredients such as `<item:minecraft:stone> | <item:minecraft:gold_ingot>` won't be replaced.

 If this behavior is not desired, refer to [this](.)#replace(IIngredient, IIngredient) instead.

Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.replaceFully(from as IIngredient, to as IIngredient) as Replacer

Replacer.forAllTypes().replaceFully(<tag:items:minecraft:anvil>, <tag:items:minecraft:flowers>);
```

| Parameter | Type                                          | Description                                                                                                       |
| --------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| from      | [IIngredient](/vanilla/api/items/IIngredient) | An [IIngredient](/vanilla/api/items/IIngredient) that will be used to match to specify the ingredient to replace. |
| to        | [IIngredient](/vanilla/api/items/IIngredient) | The replacement [IIngredient](/vanilla/api/items/IIngredient).                                                    |


:::

:::group{name=useForRenaming}

Specifies the BiFunction&lt;T,U,R&gt; that will be used for renaming all recipes.

 The first argument to the function is the [MCResourceLocation](/vanilla/api/util/MCResourceLocation) that uniquely identifies its name, whereas the second represents the default name for the recipe according to the default replacement rules. The return value of the function will then represent the new name of the recipe.

Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.useForRenaming(function as BiFunction<MCResourceLocation,string,string>) as Replacer

Replacer.forAllTypes().useForRenaming(myFunction);
```

| Parameter | Type                                                                                                   | Description            |
| --------- | ------------------------------------------------------------------------------------------------------ | ---------------------- |
| function  | BiFunction&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),string,string&gt; | The renaming function. |


:::


