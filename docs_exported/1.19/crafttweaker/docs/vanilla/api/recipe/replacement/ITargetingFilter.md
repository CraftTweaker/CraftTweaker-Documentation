::since{version=10.0.0}
# ITargetingFilter

Represents a filter applied to the recipe list.

 This filter is applied to [Replacer](/vanilla/api/recipe/replacement/Replacer) instances and allows for the removal of certain set of recipes from
 being able to be inspected by a replacer, or for additional global executions to be performed. Note that the filter
 is <strong>positive</strong>, meaning that the filter determines which recipes are allowed to be examined by a
 replacer, not the opposite.

 Script writers should refer to [IFilteringRule](/vanilla/api/recipe/replacement/IFilteringRule) instead.

 This is a FunctionalInterface whose functional method is [this](.)#castFilter(Stream).

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.replacement.ITargetingFilter;
```


