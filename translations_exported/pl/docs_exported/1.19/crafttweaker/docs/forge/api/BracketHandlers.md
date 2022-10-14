# ForgeBracketHandlers

This class contains the "simple" Forge Bracket handlers from CraftTweaker.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.bracket.ForgeBracketHandlers;
```


## Static Methods

:::group{name=getFluidStack}

Gets the fluid Stack based on registry name. Throws an error if it can't find the fluid.

Returns: A stack of the liquid with amount == 1mb  
Return Type: [IFluidStack](/forge/api/fluid/IFluidStack)

```zenscript
<fluid:minecraft:water>

// ForgeBracketHandlers.getFluidStack(tokens as string) as IFluidStack

ForgeBracketHandlers.getFluidStack("minecraft:water");
```

| Parameter | Type   | Description                   |
| --------- | ------ | ----------------------------- |
| tokens    | string | The Fluid's resource location |


:::

:::group{name=getToolType}

Return Type: [ToolAction](/forge/api/tool/ToolAction)

```zenscript
ForgeBracketHandlers.getToolType(tokens as string) as ToolAction
```

| Parameter | Type   |
| --------- | ------ |
| tokens    | string |


:::

