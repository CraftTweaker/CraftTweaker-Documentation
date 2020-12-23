# IIngredientTransformer&LT;T : IIngredient&GT;

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.item.IIngredientTransformer;
```


## Methods

### getCommandString

Return Type: String

```zenscript
IIngredientTransformer.getCommandString(transformedIngredient as T) as String
```
| Parameter | Type | Description |
|-----------|------|-------------|
| transformedIngredient | T | No Description Provided |
### transform

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IIngredientTransformer.transform(stack as IItemStack) as IItemStack
```
| Parameter | Type | Description |
|-----------|------|-------------|
| stack | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |

