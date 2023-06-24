::since{version=10.0.0}
# IFilteringRule

Represents an [ITargetingFilter](/vanilla/api/recipe/replacement/ITargetingFilter) that can be applied by the user onto a [Replacer](/vanilla/api/recipe/replacement/Replacer).

 Much like a targeting filter, a filtering rule can remove a set of recipes from being able to be inspected by a
 `Replacer`. The same condition apply, meaning that the filter is <strong>positive</strong>: it specifies which
 recipes the replacer is <strong>allowed</strong> to inspect.

 For example, using a [ModsFilteringRule](/vanilla/api/recipe/replacement/type/ModsFilteringRule) indicates
 that <strong>only the specified mods</strong> will be targeted by the replacer.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.replacement.IFilteringRule;
```


## Implemented Interfaces
IFilteringRule implements the following interfaces. That means all methods defined in these interfaces are also available in IFilteringRule

- [ITargetingFilter](/vanilla/api/recipe/replacement/ITargetingFilter)

