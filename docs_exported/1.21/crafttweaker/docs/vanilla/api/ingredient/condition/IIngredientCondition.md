# IIngredientCondition

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.ingredient.condition.IIngredientCondition;
```


## Methods

:::group{name=getCommandString}

Return Type: string

```zenscript
IIngredientCondition.getCommandString(base as string) as string
```

| Parameter |  Type  |
|-----------|--------|
| base      | string |


:::

:::group{name=matches}

Return Type: boolean

```zenscript
IIngredientCondition.matches(stack as IItemStack) as boolean
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) |


:::


