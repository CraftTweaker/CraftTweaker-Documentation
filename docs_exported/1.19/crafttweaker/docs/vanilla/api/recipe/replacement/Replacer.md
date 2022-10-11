::since{version=10.0.0}
# Replacer

Handles the replacement of [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt;s for [Recipe](/vanilla/api/recipe/type/Recipe)&lt;C&gt;s.

 Due to the expensive nature of the replacing process, once the replacer is created, it is not immediately executed
 like with other calls, but rather the user needs to determine when the execution should occur with the
 [this](.)#execute() method. It is suggested to chain as many replacements as possible in a single invocation to avoid
 too big performance hits.

 A replacer instance can be created through [this](.)#create() and various filters specified through
 [this](.)#filter(IFilteringRule). Note that all filters are <strong>positive</strong>, meaning that they specify the
 set of recipes the replacer should target. Replacements can then be specified with the various `replace`
 methods. Refer to their documentation for more information.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.replacement.Replacer;
```


## Static Methods

:::group{name=create since="10.0.0"}

Creates a new replacer instance.

Returns: A new replacer instance.  
Return Type: [Replacer](/vanilla/api/recipe/replacement/Replacer)

```zenscript
// Replacer.create() as Replacer

Replacer.create();
```

:::

## Methods

:::group{name=execute since="10.0.0"}

Executes the replacer, carrying out all replacements determined up until now.

 After this method is called, the replacer will be exhausted, meaning that a new replacer will be needed to
 carry out additional replacements.

```zenscript
// Replacer.execute()

Replacer.create().execute();
```

:::

:::group{name=filter since="10.0.0"}

Specifies an [IFilteringRule](/vanilla/api/recipe/replacement/IFilteringRule) that the replacer must follow.

 Note that the rules are <strong>positive</strong>, meaning that they specify the recipes that the replacer
 should act upon.

 You can specify as many filters as you want. Note that they will all be applied at the same time. For example,
 filtering for mod `"crafttweaker"` and with recipe type `<recipetype:minecraft:crafting>` will
 indicate that only recipes added by you to the crafting table will be targeted.

 A replacer cannot be modified after execution.

Returns: This for chaining.  
Return Type: [Replacer](/vanilla/api/recipe/replacement/Replacer)

```zenscript
Replacer.filter(rule as IFilteringRule) as Replacer
```

| Parameter |                               Type                               |           Description            |
|-----------|------------------------------------------------------------------|----------------------------------|
| rule      | [IFilteringRule](/vanilla/api/recipe/replacement/IFilteringRule) | The rule that should be applied. |


:::

:::group{name=replace since="10.0.0"}

Specifies a replacement that should be carried out by this replacer.

 In particular, the given [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt; will be used to query the recipe and alter exactly what has
 been specified. The first element is then used to determine what needs to be replaced and the second element
 indicates what the element should be replaced by. In other words, any instance of `toReplace` will be
 replaced by `with`.

 The replacement strategy used will be default one, so the components will be checked directly, without
 examining the various elements in detail. For example, a
 [IIngredient](/vanilla/api/ingredient/IIngredient) like
 `<item:minecraft:dirt> | <item:minecraft:diamond>` will be considered like a single entity. Attempting to
 replace only dirt, for example, won't work.

 A replacer cannot be modified after execution.

Returns: This replacer for chaining.  
Return Type: [Replacer](/vanilla/api/recipe/replacement/Replacer)

```zenscript
Replacer.replace<T : Object>(component as IRecipeComponent<T>, toReplace as T, with as T) as Replacer
```

| Parameter |                               Type                                |                                                Description                                                |
|-----------|-------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| component | [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt; | The [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt; indicating what should be targeted. |
| toReplace | T                                                                 | The oracle representing the element that needs to be replaced.                                            |
| with      | T                                                                 | The element which will replace the oracle as needed.                                                      |
| T         | Object                                                            | The type of elements targeted by the component.                                                           |


:::

:::group{name=replace since="10.0.0"}

Specifies a replacement that should be carried out by this replacer.

 In particular, the given [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt; will be used to query the recipe and alter exactly what has
 been specified. The predicate will be used to determine whether a specific target needs to be replaced, whereas
 the function will determine what the element should be replaced by. In other words, any instance that makes
 `toReplace` return `true` will be replaced by the result of the execution of `with`.

 The strategy used can be determined by you, allowing for example to consider each element in detail instead of
 directly. For example, a [IIngredient](/vanilla/api/ingredient/IIngredient) like
 `<item:minecraft:dirt> | <item:minecraft:diamond>` can also be considered as two separate ingredients and
 thus replacing only dirt can happen.

 A replacer cannot be modified after execution.

Returns: This replacer for chaining.  
Return Type: [Replacer](/vanilla/api/recipe/replacement/Replacer)

```zenscript
Replacer.replace<T : Object>(component as IRecipeComponent<T>, strategy as ITargetingStrategy, toReplace as Predicate<T>, with as Function<T,T>) as Replacer
```

| Parameter |                                   Type                                   |                                                                                                                                                             Description                                                                                                                                                             |
|-----------|--------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| component | [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt;        | The [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt; indicating what should be targeted.                                                                                                                                                                                                                           |
| strategy  | [ITargetingStrategy](/vanilla/api/recipe/replacement/ITargetingStrategy) | The [ITargetingStrategy](/vanilla/api/recipe/replacement/ITargetingStrategy) that will be used to target components.                                                                                                                                                                                                                |
| toReplace | Predicate&lt;T&gt;                                                       | A Predicate&lt;T&gt; determining whether a specific element should be replaced or not. The <br />                   argument given to it is the target that might have to be replaced.                                                                                                                                              |
| with      | Function&lt;T,T&gt;                                                      | A Function&lt;T,R&gt; that determines the replacement for elements that `toReplace` deems <br />                   necessary of replacement. The argument given to the function is the target that needs to be <br />                   replaced. The function can then determine freely how the replacement should be carried out. |
| T         | Object                                                                   | The type of elements targeted by the component.                                                                                                                                                                                                                                                                                     |


:::

:::group{name=replace since="10.0.0"}

Specifies a replacement that should be carried out by this replacer.

 In particular, the given [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt; will be used to query the recipe and alter exactly what has
 been specified. The first element is then used to determine what needs to be replaced and the second element
 will determine what the element should be replaced by. In other words, any instance of `toReplace` will be
 replaced by the result of the execution of `with`.

 The strategy used can be determined by you, allowing for example to consider each element in detail instead of
 directly. For example, a [IIngredient](/vanilla/api/ingredient/IIngredient) like
 `<item:minecraft:dirt> | <item:minecraft:diamond>` can also be considered as two separate ingredients and
 thus replacing only dirt can happen.

 A replacer cannot be modified after execution.

Returns: This replacer for chaining.  
Return Type: [Replacer](/vanilla/api/recipe/replacement/Replacer)

```zenscript
Replacer.replace<T : Object>(component as IRecipeComponent<T>, strategy as ITargetingStrategy, toReplace as T, with as Function<T,T>) as Replacer
```

| Parameter |                                   Type                                   |                                                                                                                                      Description                                                                                                                                       |
|-----------|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| component | [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt;        | The [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt; indicating what should be targeted.                                                                                                                                                                              |
| strategy  | [ITargetingStrategy](/vanilla/api/recipe/replacement/ITargetingStrategy) | The [ITargetingStrategy](/vanilla/api/recipe/replacement/ITargetingStrategy) that will be used to target components.                                                                                                                                                                   |
| toReplace | T                                                                        | The oracle representing the element that needs to be replaced.                                                                                                                                                                                                                         |
| with      | Function&lt;T,T&gt;                                                      | A Function&lt;T,R&gt; that determines the replacement for `toReplace`. The argument given to <br />                   the function is the target that needs to be replaced. The function can then determine freely how <br />                   the replacement should be carried out. |
| T         | Object                                                                   | The type of elements targeted by the component.                                                                                                                                                                                                                                        |


:::

:::group{name=replace since="10.0.0"}

Specifies a replacement that should be carried out by this replacer.

 In particular, the given [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt; will be used to query the recipe and alter exactly what has
 been specified. The first element is then used to determine what needs to be replaced and the second element
 indicates what the element should be replaced by. In other words, any instance of `toReplace` will be
 replaced by `with`.

 The strategy used can be determined by you, allowing for example to consider each element in detail instead of
 directly. For example, a [IIngredient](/vanilla/api/ingredient/IIngredient) like
 `<item:minecraft:dirt> | <item:minecraft:diamond>` can also be considered as two separate ingredients and
 thus replacing only dirt can happen.

 A replacer cannot be modified after execution.

Returns: This replacer for chaining.  
Return Type: [Replacer](/vanilla/api/recipe/replacement/Replacer)

```zenscript
Replacer.replace<T : Object>(component as IRecipeComponent<T>, strategy as ITargetingStrategy, toReplace as T, with as T) as Replacer
```

| Parameter |                                   Type                                   |                                                     Description                                                      |
|-----------|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| component | [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt;        | The [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt; indicating what should be targeted.            |
| strategy  | [ITargetingStrategy](/vanilla/api/recipe/replacement/ITargetingStrategy) | The [ITargetingStrategy](/vanilla/api/recipe/replacement/ITargetingStrategy) that will be used to target components. |
| toReplace | T                                                                        | The oracle representing the element that needs to be replaced.                                                       |
| with      | T                                                                        | The element which will replace the oracle as needed.                                                                 |
| T         | Object                                                                   | The type of elements targeted by the component.                                                                      |


:::


