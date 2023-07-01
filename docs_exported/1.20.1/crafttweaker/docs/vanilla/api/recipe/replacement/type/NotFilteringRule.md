::since{version=10.0.0}
# NotFilteringRule

Inverts a filtering rule.

 This rule should be used sparingly as it incurs a performance loss due to having to loop over all recipes multiple
 times to perform the inversion of the rule.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.replacement.type.NotFilteringRule;
```


## Implemented Interfaces
NotFilteringRule implements the following interfaces. That means all methods defined in these interfaces are also available in NotFilteringRule

- [IFilteringRule](/vanilla/api/recipe/replacement/IFilteringRule)

## Static Methods

:::group{name=of since="10.0.0"}

Inverts the specified rule.

Returns: The inverted rule.  
Return Type: [NotFilteringRule](/vanilla/api/recipe/replacement/type/NotFilteringRule)

```zenscript
NotFilteringRule.of(rule as IFilteringRule) as NotFilteringRule
```

| Parameter |                               Type                               |     Description     |
|-----------|------------------------------------------------------------------|---------------------|
| rule      | [IFilteringRule](/vanilla/api/recipe/replacement/IFilteringRule) | The rule to invert. |


:::

