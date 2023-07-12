::since{version=10.0.0}
# ITargetingStrategy

Represents a way of targeting components for replacement.

 A targeting strategy is thus responsible for determining how [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt;s are treated when dealing
 with replacement. For example, a strategy might determine that all composite components should be decomposed into
 atoms.

 For script writers, a strategy can be obtained with the `<targetingstrategy>` bracket handler.

 For integration writers, an instance of a targeting strategy can be obtained through the `find` method. Any
 newly created strategy must be registered in the CraftTweaker plugin to be available to users.

 This is a [FunctionalInterface](https://docs.oracle.com/javase/8/docs/api/java/lang/FunctionalInterface.html) whose functional method is
 [this](.)#castStrategy(IRecipeComponent, Object, Function).

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.replacement.ITargetingStrategy;
```


## Implemented Interfaces
ITargetingStrategy implements the following interfaces. That means all methods defined in these interfaces are also available in ITargetingStrategy

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)

