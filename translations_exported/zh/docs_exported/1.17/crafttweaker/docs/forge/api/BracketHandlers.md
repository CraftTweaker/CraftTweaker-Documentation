# Expansion for BracketHandlers

This class contains the "simple" Forge Bracket handlers from CraftTweaker.

## Static Methods

:::group{name=getFluidStack}

Gets the fluid Stack based on registry name. Throws an error if it can't find the fluid.

Returns: A stack of the liquid with amount == 1mb  
Return Type: [IFluidStack](/forge/api/fluid/IFluidStack)

```zenscript
// BracketHandlers.getFluidStack(tokens as string) as IFluidStack

BracketHandlers.getFluidStack("minecraft:water");
```

| 参数     | 类型     | 描述                            |
| ------ | ------ | ----------------------------- |
| tokens | string | The Fluid's resource location |


:::

:::group{name=getToolType}

Return Type: [ToolAction](/forge/api/tool/ToolAction)

```zenscript
BracketHandlers.getToolType(tokens as string) as ToolAction
```

| 参数     | 类型     | 描述                      |
| ------ | ------ | ----------------------- |
| tokens | string | No Description Provided |


:::

