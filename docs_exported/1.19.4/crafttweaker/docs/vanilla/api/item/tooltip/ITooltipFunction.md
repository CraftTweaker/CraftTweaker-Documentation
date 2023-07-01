# ITooltipFunction

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.tooltip.ITooltipFunction;
```


## Methods

:::group{name=apply}

```zenscript
ITooltipFunction.apply(stack as IItemStack, tooltip as stdlib.List<Component>, flag as TooltipFlag)
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack)                  |
| tooltip   | stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt; |
| flag      | [TooltipFlag](/vanilla/api/item/TooltipFlag)                |


:::


