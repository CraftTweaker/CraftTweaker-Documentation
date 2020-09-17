# 累积函数单一

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftbinefer.api.recipe.RecipeFunctionSingle
```

## 函数接口

此类是一个功能接口。 这意味着您可以使用 lambda 符号来创建一个实例。 Lambda 符号如下所示：
```zenscript
(平常关闭，输入) => <item:minecraft:dirt>
```
## 方法
### 进程

返回类型： [craftbiner.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myRecipeFunctionSingle.process(usualOut as craftbiner.api.item.IItemStack, input as craftbiner.api.item.IItemStack);
```

| 参数     | 类型                                                                | 描述                      |
| ------ | ----------------------------------------------------------------- | ----------------------- |
| 常用退出   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |
| inputs | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |



