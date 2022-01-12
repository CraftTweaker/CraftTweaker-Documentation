# IIngredientCondition&LT;T : IIngredient&GT;

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.ingredient.condition.IIngredientCondition;
```


## Metodi

:::group{name=getCommandString}

Return Type: string

```zenscript
IIngredientCondition.getCommandString(ingredient as T) as string
```

| Parametro  | Tipo | Descrizione             |
| ---------- | ---- | ----------------------- |
| ingredient | T    | No Description Provided |


:::

:::group{name=matches}

Return Type: boolean

```zenscript
IIngredientCondition.matches(stack as IItemStack) as boolean
```

| Parametro | Tipo                                       | Descrizione             |
| --------- | ------------------------------------------ | ----------------------- |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | No Description Provided |


:::


