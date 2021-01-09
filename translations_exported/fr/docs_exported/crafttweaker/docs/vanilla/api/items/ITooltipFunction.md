# ITooltipFunction

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.tooltip.ITooltipFunction;
```


## Methods

### appliquer

Return Type: void

```zenscript
ITooltipFunction.apply(stack as IItemStack, tooltip as stdlib.List<MCTextComponent>, isAdvanced as boolean) as void
```
| Parameter  | Type                                                                                     | Description             |
| ---------- | ---------------------------------------------------------------------------------------- | ----------------------- |
| stack      | [IItemStack](/vanilla/api/items/IItemStack)                                              | No Description Provided |
| infobulle  | stdlib.List&lt;[MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | No Description Provided |
| isAdvanced | boolean                                                                                  | No Description Provided |


