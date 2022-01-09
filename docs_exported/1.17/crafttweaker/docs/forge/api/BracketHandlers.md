# Expansion for BracketHandlers

This class contains the "simple" Forge Bracket handlers from CraftTweaker.

## Static Methods

:::group{name=getFluidStack}

Gets the fluid Stack based on registry name. Throws an error if it can't find the fluid.

Returns: A stack of the liquid with amount == 1mb  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// BracketHandlers.getFluidStack(tokens as string) as IFluidStack

BracketHandlers.getFluidStack("minecraft:water");
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tokens | string | The Fluid's resource location |


:::

:::group{name=getToolType}

Return Type: [ToolAction](/forge/api/tool/ToolAction)

```zenscript
BracketHandlers.getToolType(tokens as string) as ToolAction
```

| Parameter | Type | Description |
|-----------|------|-------------|
| tokens | string | No Description Provided |


:::

