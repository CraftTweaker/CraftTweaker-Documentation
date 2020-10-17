# ITooltipFunction

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftbiner.api.item.tooltip.ITooltipfunction
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(stack, tooltip, isAdvanced) => {}
```
## 方法
### 应用

```zenscript
myITooltipFunction.apply(stack as crafttweaker.api.item.IItemStack, tooltip as List<crafttweaker.api.util.text.MCTextComponent>, isAdvanced as boolean);
```

| 参数         | 类型                                                                                                         | 描述                      |
| ---------- | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| stack      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                          | No description provided |
| 工具提示       | 列表&lt;[craftmiliter.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | No description provided |
| isAdvanced | boolean                                                                                                    | No description provided |



