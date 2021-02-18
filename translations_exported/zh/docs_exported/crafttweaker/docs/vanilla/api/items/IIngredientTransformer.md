# IIngredientTransformer&LT;T : IIngredient&GT;

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.IIngredientTransformer;
```


## 方法

### getCommandString

Return Type: string

```zenscript
IIngredientTransformer.getCommandString(transformedIngredient as T) as string
```

| 参数                    | 类型 | 描述                      |
| --------------------- | -- | ----------------------- |
| transformedIngredient | T  | No Description Provided |


### transform

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
IIngredientTransformer.transform(stack as IItemStack) as IItemStack
```

| 参数    | 类型                                          | 描述                      |
| ----- | ------------------------------------------- | ----------------------- |
| stack | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |



