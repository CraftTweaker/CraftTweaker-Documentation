# ForgeBracketHandlers

Этот класс содержит «простые» обработчики скобок Forge из Crafttweaker.

## Импорт класса

Может потребоваться импортировать пакет, если вы столкнулись с какими-либо проблемами вроде приведения типа массива, поэтому в качестве меры предосторожности лучше добавить импорт в самый верх файла:
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

| Параметр | Тип    | Описание                      |
| -------- | ------ | ----------------------------- |
| tokens   | string | The Fluid's resource location |


:::

:::group{name=getToolType}

Return Type: [ToolAction](/forge/api/tool/ToolAction)

```zenscript
ForgeBracketHandlers.getToolType(tokens as string) as ToolAction
```

| Параметр | Тип    |
| -------- | ------ |
| tokens   | string |


:::

