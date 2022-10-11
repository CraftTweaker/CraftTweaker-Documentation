::since{version=10.0.0}
# ManagerFilteringRule

Filters recipes based on their [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;T&gt;.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.replacement.type.ManagerFilteringRule;
```


## Implemented Interfaces
ManagerFilteringRule implements the following interfaces. That means all methods defined in these interfaces are also available in ManagerFilteringRule

- [IFilteringRule](/vanilla/api/recipe/replacement/IFilteringRule)

## Static Methods

:::group{name=of since="10.0.0"}

Creates a new rule filtering recipes based on the given managers.

Returns: A new rule carrying out the specified operation.  
Return Type: [IFilteringRule](/vanilla/api/recipe/replacement/IFilteringRule)

```zenscript
ManagerFilteringRule.of(managers as IRecipeManager[]) as IFilteringRule
```

| Parameter |                              Type                              |              Description              |
|-----------|----------------------------------------------------------------|---------------------------------------|
| managers  | [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)[] | The managers that should be filtered. |


:::

