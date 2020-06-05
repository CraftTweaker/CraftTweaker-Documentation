# RecipeFunctionArray

这个类由 mod-id 为 `crafttweaker` 的模组添加. 此类由具有mod-id的mod添加 `crafttweaker`.

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.recipe.RecipeFunctionArray
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(usualOut, inputs) => <item:minecraft:dirt>
```
## 方法
### process

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myRecipeFunctionArray.process(usualOut as crafttweaker.api.item.IItemStack, inputs as crafttweaker.api.item.IItemStack[]);
```

| 参数       | 返回值类型                                                               | 描述                      |
| -------- | ------------------------------------------------------------------- | ----------------------- |
| usualOut | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | 未提供说明                   |
| inputs   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |



