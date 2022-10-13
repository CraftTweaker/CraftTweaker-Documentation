# RecipeFunctionSingle

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftbinefer.api.recipe.RecipeFunctionSingle
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(usualOut, inputs) => <item:minecraft:dirt>
```
## 使用方式
### process

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myRecipeFunctionSingle.process(usualOut as crafttweaker.api.item.IItemStack, inputs as crafttweaker.api.item.IItemStack);
```

| 参数       | 类型                                                                | 描述                      |
| -------- | ----------------------------------------------------------------- | ----------------------- |
| usualOut | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |
| inputs   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |



