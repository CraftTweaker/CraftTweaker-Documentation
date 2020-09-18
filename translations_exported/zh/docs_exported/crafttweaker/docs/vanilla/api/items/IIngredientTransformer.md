# IngredientTransformer

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstruer.api.item.IIngredientTransformer
```

## 方法
### getCommandString

返回类型：字符串

```zenscript
myIIngredientTransformer.getCommandString(成分为 T)；
```

| 参数  | 类型 | 描述                      |
| --- | -- | ----------------------- |
| 成分： | T  | No description provided |


### 匹配

返回类型：布尔值

```zenscript
myIIngredientTransformer.matches(堆栈为 craftbiner.api.item.IItemStack);
```

| 参数    | 类型                                                                | 描述                      |
| ----- | ----------------------------------------------------------------- | ----------------------- |
| 堆栈... | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |



