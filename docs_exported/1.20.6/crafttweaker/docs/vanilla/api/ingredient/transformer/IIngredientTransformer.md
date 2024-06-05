# IIngredientTransformer

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.ingredient.transformer.IIngredientTransformer;
```


## Methods

:::group{name=getCommandString}

Return Type: string

```zenscript
IIngredientTransformer.getCommandString(base as string) as string
```

| Parameter |  Type  |
|-----------|--------|
| base      | string |


:::

:::group{name=transform}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
IIngredientTransformer.transform(stack as IItemStack) as IItemStack
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) |


:::


