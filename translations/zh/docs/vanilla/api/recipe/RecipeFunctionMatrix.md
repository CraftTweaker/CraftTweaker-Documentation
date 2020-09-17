# 矩阵功能

这个类由 mod-id 为 `crafttweaker` 的模组添加. 此类由具有mod-id的mod添加 `crafttweaker`.

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
制作工具.api.配方。矩阵功能
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
myRecipeFunctionMatrix.process(usualOut as craftbiner.api.item.IItemStack, input as craftbiner.api.item.IItemStack[]);
```

| 参数     | 返回值类型                                                                 | 描述                      |
| ------ | --------------------------------------------------------------------- | ----------------------- |
| 常用退出   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)     | 未提供说明                   |
| inputs | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[][] | No description provided |



