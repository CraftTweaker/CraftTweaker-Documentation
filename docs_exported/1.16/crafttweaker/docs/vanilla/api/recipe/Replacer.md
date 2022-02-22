# Replacer

Handles the replacing of ingredients in recipes for various [IRecipeManager](/vanilla/api/managers/IRecipeManager)s and [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)s.

 Differently from various other mechanisms in CraftTweaker, each replacement that gets specified from within a
 `Replacer` doesn't get run immediately, rather it gets stored and all replacements are then applied together
 when the [this](.)#execute() method is called. This change is done so that multiple replacements can be performed at
 the same time, with a net gain on performance.

 <strong>Note</strong> that replacement must be explicitly supported by modded recipe types and managers, meaning
 that a `Replacer` may not be able to perform replacement on a certain set of recipes. If this is the case, a
 warning will be printed in the logs, so that you may review it.

 Creating a `Replacer` gets done via the various `forXxx` methods, where `Xxx` identifies any
 suffix. Refer to the specific documentation to get more information on their behavior.

 The various `replace` methods, listed both in this page and in other mod's possible expansions, then allow
 you to specify what should be the replacements that need to be carried out by the `Replacer` itself.

 All recipes that get replaced by a `Replacer` get renamed according to a set naming scheme. You can modify
 completely by providing a lambda via [this](.)#useForRenaming(BiFunction), or just for a specific set of recipes via
 [this](.)#explicitlyRename(ResourceLocation, String).

 An example usage of a `Replacer` could be
 `Replacer.forTypes(craftingTable).replace(<item:minecraft:string>, <item:minecraft:diamond>).execute();`

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.Replacer;
```


## Static Methods

:::group{name=forAllTypes}

::deprecated[Use [this](.)#forEverything() instead.]

Creates a `Replacer` that will perform replacements globally. <br />  <br />  In other words, the replacer will perform ingredient replacement on <strong>every</strong> recipe manager in <br />  the game, as long as it supports replacement.

Returns: A new global `Replacer`.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.forAllTypes() as Replacer

Replacer.forAllTypes();
```

:::

:::group{name=forAllTypesExcluding}

::deprecated[Use [this](.)#forEverything() to create a replacer then use [this](.)#excluding(IRecipeManager...) to exclude the various unwanted managers.]

Creates a `Replacer` that will perform replacements on all [IRecipeManager](/vanilla/api/managers/IRecipeManager)s except the ones <br />  specified.

Returns: A new `Replacer` that targets all managers except the ones specified.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.forAllTypesExcluding(managers as IRecipeManager[]) as Replacer

Replacer.forAllTypesExcluding(stoneCutter);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| managers | [IRecipeManager](/vanilla/api/managers/IRecipeManager)[] | The managers to exclude from the replacer. |


:::

:::group{name=forCustomRecipeSet}

Creates a `Replacer` that will perform replacements only on the recipes whitelisted by the given function. <br />  <br />  The first parameter of the predicate is a [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe) that indicates the recipe that is currently <br />  being tested, whereas the second is the [IRecipeManager](/vanilla/api/managers/IRecipeManager) that is responsible for handling that particular <br />  type of recipes. The function should then return a boolean that either whitelists the recipe for replacement <br />  (`true`) or blacklists it (`false`). <br />  <br />  The given function must be a <strong>pure</strong> function, which means that the output must be the same <br />  given the same set of inputs. In other words, you should not rely on external state for this function, since it <br />  may be called multiple times on the same set of inputs in the same replacer run.

Returns: A new `Replacer` that uses the given function for whitelisting.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.forCustomRecipeSet(function as BiPredicate<WrapperRecipe,IRecipeManager>) as Replacer

Replacer.forCustomRecipeSet(myPredicate);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| function | BiPredicate&lt;[WrapperRecipe](/vanilla/api/recipe/WrapperRecipe),[IRecipeManager](/vanilla/api/managers/IRecipeManager)&gt; | The custom whitelisting function. |


:::

:::group{name=forEverything}

Creates a `Replacer` that will perform replacements globally. <br />  <br />  In other words, the replacer will perform ingredient replacement on <strong>every</strong> recipe manager in <br />  the game, as long as it supports replacement.

Returns: A new global `Replacer`.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.forEverything() as Replacer

Replacer.forEverything();
```

:::

:::group{name=forMods}

Creates a `Replacer` that targets only the given mods. <br />  <br />  In other words, the replacer will perform ingredient replacement across <strong>all</strong> <br />  [IRecipeManager](/vanilla/api/managers/IRecipeManager)s, targeting <strong>only</strong> the recipes added by the specified mods.

Returns: A new `Replacer` that targets only the specified mods.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.forMods(mods as string[]) as Replacer

Replacer.forMods("minecraft");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| mods | string[] | The mods whose recipes should be targeted by the replacer. It must be at least one. |


:::

:::group{name=forOutput}

Creates a `Replacer` that will perform replacement only on recipes with the given output, optionally <br />  restricted to a set of whitelisted managers. <br />  <br />  The passed in whitelist may also be empty, in which case it'll be treated as meaning every possible recipe <br />  manager. If the whitelist is not empty, on the other hand, only the selected recipe managers will be considered <br />  when replacing ingredients.

Returns: A new `Replacer` for recipes with the given output and an optional whitelist.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.forOutput(output as IIngredient, whitelist as IRecipeManager[]) as Replacer

Replacer.forOutput(<tag:items:forge:rods/wooden>, stoneCutter);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| output | [IIngredient](/vanilla/api/items/IIngredient) | The output that should be matched. |
| whitelist | [IRecipeManager](/vanilla/api/managers/IRecipeManager)[] | An optional list of managers that should be whitelisted in the replacement. |


:::

:::group{name=forRecipes}

Creates a `Replacer` that targets only the specified [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)s. <br />  <br />  In other words, the replacer will perform ingredient replacement <strong>only</strong> on the recipes that <br />  are given in this list.

Returns: A new `Replacer` that targets only the specified recipes.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.forRecipes(recipes as WrapperRecipe[]) as Replacer

Replacer.forRecipes(craftingTable.getRecipeByName("minecraft:emerald_block"));
```

| Parameter | Type | Description |
|-----------|------|-------------|
| recipes | [WrapperRecipe](/vanilla/api/recipe/WrapperRecipe)[] | The recipes that should be targeted by the replacer. It must be at least one. |


:::

:::group{name=forRegexRecipes}

Creates a `Replacer` that will perform replacement on all recipes whose names match the given regular <br />  expression.

Returns: A new `Replacer` for recipes that satisfy the given regular expression.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.forRegexRecipes(regex as string) as Replacer

Replacer.forRegexRecipes("\\d_\\d");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | The regular expression that should be used for matching. |


:::

:::group{name=forRegexTypes}

Creates a `Replacer` that will perform replacement on all [IRecipeManager](/vanilla/api/managers/IRecipeManager)s that match the given <br />  regular expression. <br />  <br />  The managers will be matched on their bracket identifier, which corresponds to their bracket expression <br />  stripped of `<recipetype:` and `>`. E.g., a manager obtained in a script via <br />  `<recipetype:minecraft:crafting>` will be matched on `minecraft:crafting` only.

Returns: A new `Replacer` for managers that satisfy the given regular expression.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.forRegexTypes(regex as string) as Replacer

Replacer.forRegexTypes("^minecraft:[a-z]*ing");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| regex | string | The regular expression that should be used for matching. |


:::

:::group{name=forTypes}

Creates a `Replacer` that targets only the specified [IRecipeManager](/vanilla/api/managers/IRecipeManager)s. <br />  <br />  In other words, the replacer will perform ingredient replacement <strong>only</strong> on the managers that <br />  are given in this list.

Returns: A new `Replacer` that targets only the specified managers.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.forTypes(managers as IRecipeManager[]) as Replacer

Replacer.forTypes(smithing);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| managers | [IRecipeManager](/vanilla/api/managers/IRecipeManager)[] | The managers that will be targeted by the replacer. It must be at least one. |


:::

## Methods

:::group{name=excluding}

Excludes a set of managers from undergoing replacement.

Returns: A Replacer that excludes the given set of recipe managers.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.excluding(managers as IRecipeManager[]) as Replacer

Replacer.forEverything().excluding(stoneCutter);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| managers | [IRecipeManager](/vanilla/api/managers/IRecipeManager)[] | The list of managers that should be excluded. |


:::

:::group{name=excluding}

Excludes a set of recipes, identified by their name, from undergoing replacement.

Returns: A Replacer that excludes the given set of recipes.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.excluding(recipes as MCResourceLocation[]) as Replacer

Replacer.forEverything().excluding(<resource:minecraft:comparator>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| recipes | [MCResourceLocation](/vanilla/api/util/MCResourceLocation)[] | The list of recipes that should be excluded. |


:::

:::group{name=excludingMods}

Excludes all recipes that are under the given modids from undergoing replacement.

Returns: A Replacer that excludes the given set of modids.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.excludingMods(modids as string[]) as Replacer

Replacer.forEverything().excludingMods("mekanism");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| modids | string[] | The list of modids that should be excluded. |


:::

:::group{name=execute}

Executes all replacements that have been queued on this replacer, if any.

Return Type: void

```zenscript
// Replacer.execute() as void

Replacer.forEverything().execute();
```

:::

:::group{name=explicitlyRename}

Indicates that the recipe with the given `oldName` should be renamed to the `newName`.

 This rename will only be applied if a replacement is carried out. Moreover, the given new name will also be
 fixed according to [NameUtils](/vanilla/api/util/NameUtils)#fixing(String).

Returns: A Replacer that will rename the recipe according to the specified rule.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.explicitlyRename(oldName as MCResourceLocation, newName as string) as Replacer

Replacer.forEverything().explicitlyRename(<resource:minecraft:birch_sign>, "damn_hard_birch_sign");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| oldName | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | The [MCResourceLocation](/vanilla/api/util/MCResourceLocation) of the name of the recipe that should be renamed. |
| newName | string | The new name of the recipe. |


:::

:::group{name=replace}

Replaces every match of the `from` [IIngredient](/vanilla/api/items/IIngredient) with the one given in `to`.

 This replacement behavior is recursive, meaning that any `IIngredient` that gets found is looped
 recursively trying to identify matches. As an example, attempting to replace `<item:minecraft:stone>` with
 `<item:minecraft:diamond>` will perform this replacement even in compound ingredients, such as `<item:minecraft:stone> | <item:minecraft:gold_ingot>` or `<tag:items:minecraft:stones>` (supposing that
 `minecraft:stones` is a tag that contains `minecraft:stone` among other items).

 If this behavior is not desired, refer to [this](.)#replaceFully(IIngredient, IIngredient) instead.

 This method is a specialized by [this](.)#replace(IItemStack, IIngredient) for [IItemStack](/vanilla/api/items/IItemStack)s and should
 be preferred in these cases.

Returns: A Replacer that will carry out the specified operation.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.replace(from as IIngredient, to as IIngredient) as Replacer

Replacer.forEverything().replace(<tag:items:forge:storage_blocks/redstone>, <item:minecraft:diamond_block>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| from | [IIngredient](/vanilla/api/items/IIngredient) | An [IIngredient](/vanilla/api/items/IIngredient) that will be used to match stacks that need to be replaced. |
| to | [IIngredient](/vanilla/api/items/IIngredient) | The replacement [IIngredient](/vanilla/api/items/IIngredient). |


:::

:::group{name=replace}

Replaces every match of the `from` [IItemStack](/vanilla/api/items/IItemStack) with the one given in `to`.

 This replacement behavior is recursive, meaning that any `IIngredient` that gets found is looped
 recursively trying to identify matches. As an example, attempting to replace `<item:minecraft:stone>` with
 `<item:minecraft:diamond>` will perform this replacement even in compound ingredients, such as `<item:minecraft:stone> | <item:minecraft:gold_ingot>` or `<tag:items:minecraft:stones>` (supposing that
 `minecraft:stones` is a tag that contains `minecraft:stone` among other items).

 If this behavior is not desired, refer to [this](.)#replaceFully(IIngredient, IIngredient) instead.

 This method is a specialization of [this](.)#replace(IIngredient, IIngredient) for [IItemStack](/vanilla/api/items/IItemStack)s and
 should be preferred in these cases.

Returns: A Replacer that will carry out the specified operation.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.replace(from as IItemStack, to as IIngredient) as Replacer

Replacer.forEverything().replace(<item:minecraft:coal_block>, <item:minecraft:diamond_block>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| from | [IItemStack](/vanilla/api/items/IItemStack) | An [IItemStack](/vanilla/api/items/IItemStack) that will be used to match stacks that need to be replaced. |
| to | [IIngredient](/vanilla/api/items/IIngredient) | The replacement [IIngredient](/vanilla/api/items/IIngredient). |


:::

:::group{name=replaceFully}

Replaces every instance of the target `from` [IIngredient](/vanilla/api/items/IIngredient) with the `to` one.

 This replacement behavior is not recursive, meaning that the `IIngredient`s will be matched closely
 instead of recursively. As an example, attempting to replace fully `<item:minecraft:stone>` will only
 replace ingredients that explicitly specify `<item:minecraft:stone>` as an input, while compound
 ingredients such as `<item:minecraft:stone> | <item:minecraft:gold_ingot>` won't be replaced.

 If this behavior is not desired, refer to [this](.)#replace(IIngredient, IIngredient) instead.

Returns: A Replacer that will carry out the specified operation.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.replaceFully(from as IIngredient, to as IIngredient) as Replacer

Replacer.forEverything().replaceFully(<tag:items:minecraft:anvil>, <tag:items:minecraft:flowers>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| from | [IIngredient](/vanilla/api/items/IIngredient) | An [IIngredient](/vanilla/api/items/IIngredient) that will be used to match to specify the ingredient to replace. |
| to | [IIngredient](/vanilla/api/items/IIngredient) | The replacement [IIngredient](/vanilla/api/items/IIngredient). |


:::

:::group{name=suppressWarnings}

Suppresses warnings that arise when trying to replace unsupported recipes.

 Additional warnings will not be suppressed. Note that it is suggested to keep this disabled while testing and
 enable it only if excluding the problematic recipes via [this](.)#excluding(ResourceLocation...) would prove to be
 too cumbersome.

Returns: A Replacer with replacement warnings suppressed.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.suppressWarnings() as Replacer

Replacer.forEverything().suppressWarnings();
```

:::

:::group{name=useForRenaming}

Specifies the BiFunction&lt;T,U,R&gt; that will be used for renaming all recipes.

 The first argument to the function is the [MCResourceLocation](/vanilla/api/util/MCResourceLocation) that uniquely identifies its name, whereas
 the second represents the default name for the recipe according to the default replacement rules. The return
 value of the function will then represent the new name of the recipe.

Returns: A Replacer that will use the given function for renaming.  
Return Type: [Replacer](/vanilla/api/recipe/Replacer)

```zenscript
// Replacer.useForRenaming(function as BiFunction<MCResourceLocation,string,string>) as Replacer

Replacer.forEverything().useForRenaming(myFunction);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| function | BiFunction&lt;[MCResourceLocation](/vanilla/api/util/MCResourceLocation),string,string&gt; | The renaming function. |


:::


