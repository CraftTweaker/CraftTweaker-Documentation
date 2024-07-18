# TooltipContext

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tooltip.TooltipContext;
```


## Static Methods

:::group{name=of}

Return Type: [TooltipContext](/vanilla/api/tooltip/TooltipContext)

```zenscript
TooltipContext.of(level as Level?) as TooltipContext
```

| Parameter |                Type                |
|-----------|------------------------------------|
| level     | [Level](/vanilla/api/world/Level)? |


:::

## Methods

:::group{name=mapData}

Return Type: **invalid**?

```zenscript
TooltipContext.mapData(var1 as MapId) as invalid?
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| var1      | [MapId](/vanilla/api/item/component/MapId) |


:::


## Properties

|   Name   | Type  | Has Getter | Has Setter |
|----------|-------|------------|------------|
| tickRate | float | true       | false      |

