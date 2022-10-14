# ITooltipFunction

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.tooltip.ITooltipFunction;
```


## 使用方式

:::group{name=apply}

```zenscript
ITooltipFunction.apply(stack as IItemStack, tooltip as stdlib.List<Component>, flag as TooltipFlag)
```

| 参数   | 类型                                                                      |
| ---- | ----------------------------------------------------------------------- |
| 堆叠   | [IItemstack](/vanilla/api/item/IItemStack)                              |
| 工具提示 | stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt; |
| flag | [TooltipFlag](/vanilla/api/item/TooltipFlag)                            |


:::


