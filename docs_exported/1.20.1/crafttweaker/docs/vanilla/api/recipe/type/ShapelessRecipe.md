# ShapelessRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.type.ShapelessRecipe;
```


## Implemented Interfaces
ShapelessRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in ShapelessRecipe

- [CraftingRecipe](/vanilla/api/recipe/type/CraftingRecipe)

## Methods

:::group{name=getIngredientArray}

Gets the ingredients of this recipe as an array that can be passed into a craftingTable.addShapeless method call.

Returns: the ingredients of this recipe as an array that can be passed into a craftingTable.addShapeless method call.  
Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)[]

```zenscript
// ShapelessRecipe.getIngredientArray() as IIngredient[]

myShapelessRecipe.getIngredientArray();
```

:::


