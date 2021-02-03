# IIngredientTransformer&LT;T : IIngredient&GT;

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.IIngredientTransformer;
```


## Methods

### getCommandString

Return Type: string

```zenscript
IIngredientTransformer.getCommandString(transformedIngredient as T) as string
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



