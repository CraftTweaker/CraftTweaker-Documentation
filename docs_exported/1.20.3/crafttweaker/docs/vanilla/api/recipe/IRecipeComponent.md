::since{version=10.0.0}
# IRecipeComponent&LT;T : Object&GT;

Represents a part of a recipe after it has been decomposed.

 Recipe components in a recipe are associated with a list of data, whose type varies depending on the component.
 The data indicates what the component is made up of, allowing for introspection and selective editing of any recipe
 that can be decomposed and then recomposed, without requiring explicit support for every type of change.

 Obtaining an instance of a recipe component in a script can be done through the usage of the
 `<recipecomponent>` bracket handler. Integration writers can instead refer to the `find` method.

 Every recipe component must be registered to the registry through a plugin to be able to be used effectively and
 discovered by script writers. New recipe components can be created with either `simple` or `composite`. A
 set of common components is already provided by CraftTweaker.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.IRecipeComponent;
```


## Implemented Interfaces
IRecipeComponent implements the following interfaces. That means all methods defined in these interfaces are also available in IRecipeComponent

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)

