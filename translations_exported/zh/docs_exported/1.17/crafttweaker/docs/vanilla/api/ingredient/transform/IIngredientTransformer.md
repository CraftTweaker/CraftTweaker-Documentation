# IIngredientTransformer&LT;T : IIngredient&GT;

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.ingredient.transform.IIngredientTransformer;
```


## 使用方式

:::group{name=getCommandString}

Return Type: string

```zenscript
IIngredientTransformer.getCommandString(transformedIngredient as T) as string
```

| 参数                    | 类型 | 描述                      |
| --------------------- | -- | ----------------------- |
| transformedIngredient | T  | No Description Provided |


:::

:::group{name=transform}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
IIngredientTransformer.transform(stack as IItemStack) as IItemStack
```

| 参数 | 类型                                         | 描述                      |
| -- | ------------------------------------------ | ----------------------- |
| 堆叠 | [IItemstack](/vanilla/api/item/IItemStack) | No Description Provided |


:::


