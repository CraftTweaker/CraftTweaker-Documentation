# IIngredientTransformer&LT;T : IIngredient&GT;

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.ingredient.transform.IIngredientTransformer;
```


## Metodi

:::group{name=getCommandString}

Return Type: string

```zenscript
IIngredientTransformer.getCommandString(transformedIngredient as T) as string
```

| Parametro             | Tipo | Descrizione             |
| --------------------- | ---- | ----------------------- |
| transformedIngredient | T    | No Description Provided |


:::

:::group{name=transform}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
IIngredientTransformer.transform(stack as IItemStack) as IItemStack
```

| Parametro | Tipo                                       | Descrizione             |
| --------- | ------------------------------------------ | ----------------------- |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::


