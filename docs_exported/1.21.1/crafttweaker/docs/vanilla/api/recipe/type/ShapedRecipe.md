# ShapedRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.type.ShapedRecipe;
```


## Implemented Interfaces
ShapedRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in ShapedRecipe

- [CraftingRecipe](/vanilla/api/recipe/type/CraftingRecipe)

## Methods

:::group{name=getHeight}

Return Type: int

```zenscript
// ShapedRecipe.getHeight() as int

myShapedRecipe.getHeight();
```

:::

:::group{name=getIngredientArray}

Gets the ingredients of this recipe as an array that can be passed into a craftingTable.addShaped method call.

Returns: the ingredients of this recipe as an array that can be passed into a craftingTable.addShaped method call.  
Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)[][]

```zenscript
// ShapedRecipe.getIngredientArray() as IIngredient[][]

myShapedRecipe.getIngredientArray();
```

:::

:::group{name=getWidth}

Return Type: int

```zenscript
// ShapedRecipe.getWidth() as int

myShapedRecipe.getWidth();
```

:::


## Properties

|  Name  | Type | Has Getter | Has Setter |
|--------|------|------------|------------|
| height | int  | true       | false      |
| width  | int  | true       | false      |

