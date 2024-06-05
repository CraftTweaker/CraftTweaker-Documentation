# RecipeHolder

Holds [Recipe](/vanilla/api/recipe/type/Recipe)&lt;C&gt; recipe and a [ResourceLocation](/vanilla/api/resource/ResourceLocation) id.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.type.RecipeHolder;
```


## Extending Record

RecipeHolder extends Record. That means all methods available in Record are also available in RecipeHolder

## Casters

|                                        Result Type                                         | Is Implicit |
|--------------------------------------------------------------------------------------------|-------------|
| [Recipe](/vanilla/api/recipe/type/Recipe)&lt;[Container](/vanilla/api/world/Container)&gt; | true        |
| [ResourceLocation](/vanilla/api/resource/ResourceLocation)                                 | true        |

## Properties

| Name  |                                            Type                                            | Has Getter | Has Setter |             Description              |
|-------|--------------------------------------------------------------------------------------------|------------|------------|--------------------------------------|
| id    | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                                 | true       | false      | Gets the id of this holder           |
| value | [Recipe](/vanilla/api/recipe/type/Recipe)&lt;[Container](/vanilla/api/world/Container)&gt; | true       | false      | Gets the recipe held by this holder. |

