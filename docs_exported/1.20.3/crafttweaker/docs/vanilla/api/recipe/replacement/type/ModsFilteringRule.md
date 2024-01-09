::since{version=10.0.0}
# ModsFilteringRule

Filters recipes that have been created by the given set of mods.

 Every mod is identified according to its mod id. Recipes have been created by a mod if their name as determined
 by [RecipeHolderRecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;#id() has that mod id as the namespace.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.replacement.type.ModsFilteringRule;
```


## Implemented Interfaces
ModsFilteringRule implements the following interfaces. That means all methods defined in these interfaces are also available in ModsFilteringRule

- [IFilteringRule](/vanilla/api/recipe/replacement/IFilteringRule)

## Static Methods

:::group{name=of since="10.0.0"}

Creates a new rule filtering recipes based on the given mod ids.

Returns: A rule carrying out what has been specified.  
Return Type: [IFilteringRule](/vanilla/api/recipe/replacement/IFilteringRule)

```zenscript
ModsFilteringRule.of(modIds as string[]) as IFilteringRule
```

| Parameter |   Type   |        Description        |
|-----------|----------|---------------------------|
| modIds    | string[] | The mod ids to check for. |


:::

:::group{name=of since="10.0.0"}

Creates a new rule filtering recipes based on the ids of the given [Mod](/vanilla/api/mod/Mod)s.

Returns: A rule carrying out what has been specified.  
Return Type: [IFilteringRule](/vanilla/api/recipe/replacement/IFilteringRule)

```zenscript
ModsFilteringRule.of(mods as Mod[]) as IFilteringRule
```

| Parameter |             Type              |      Description       |
|-----------|-------------------------------|------------------------|
| mods      | [Mod](/vanilla/api/mod/Mod)[] | The mods to check for. |


:::

