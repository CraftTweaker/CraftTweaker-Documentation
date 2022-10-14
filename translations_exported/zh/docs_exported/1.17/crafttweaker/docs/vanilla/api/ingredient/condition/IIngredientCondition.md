# IIngredientCondition&LT;T : IIngredient&GT;

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.ingredient.condition.IIngredientCondition;
```


## 使用方式

:::group{name=getCommandString}

Return Type: string

```zenscript
IIngredientCondition.getCommandString(ingredient as T) as string
```

| 参数         | 类型 | 描述                      |
| ---------- | -- | ----------------------- |
| ingredient | T  | No Description Provided |


:::

:::group{name=matches}

Return Type: boolean

```zenscript
IIngredientCondition.matches(stack as IItemStack) as boolean
```

| 参数 | 类型                                         | 描述                      |
| -- | ------------------------------------------ | ----------------------- |
| 堆叠 | [IItemstack](/vanilla/api/item/IItemStack) | No Description Provided |


:::


