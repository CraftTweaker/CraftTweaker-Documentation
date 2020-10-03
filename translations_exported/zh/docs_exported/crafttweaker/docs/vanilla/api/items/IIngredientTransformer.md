# IngredientTransformer

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstruer.api.item.IIngredientTransformer
```

## 方法
### getCommandString

Return type: String

```zenscript
myIIngredientTransformer.getCommandString(成分为 T)；
```

| 参数         | 类型 | 描述                      |
| ---------- | -- | ----------------------- |
| ingredient | T  | No description provided |


### matches

Return type: boolean

```zenscript
myIIngredientTransformer.matches(堆栈为 craftbiner.api.item.IItemStack);
```

| 参数    | 类型                                                                | 描述                      |
| ----- | ----------------------------------------------------------------- | ----------------------- |
| stack | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |



