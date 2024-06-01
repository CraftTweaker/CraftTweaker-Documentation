# MapDecorations

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.MapDecorations;
```


## Extending Record

MapDecorations extends Record. That means all methods available in Record are also available in MapDecorations

## Static Methods

:::group{name=of}

Return Type: [MapDecorations](/vanilla/api/item/component/MapDecorations)

```zenscript
MapDecorations.of(decorations as MapDecorationsEntry[string]) as MapDecorations
```

|  Parameter  |                                      Type                                      |
|-------------|--------------------------------------------------------------------------------|
| decorations | [MapDecorationsEntry](/vanilla/api/item/component/MapDecorationsEntry)[string] |


:::

## Methods

:::group{name=withDecoration}

Return Type: [MapDecorations](/vanilla/api/item/component/MapDecorations)

```zenscript
MapDecorations.withDecoration(name as string, entry as MapDecorationsEntry) as MapDecorations
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| name      | string                                                                 |
| entry     | [MapDecorationsEntry](/vanilla/api/item/component/MapDecorationsEntry) |


:::


## Properties

|    Name     |                                      Type                                      | Has Getter | Has Setter |
|-------------|--------------------------------------------------------------------------------|------------|------------|
| decorations | [MapDecorationsEntry](/vanilla/api/item/component/MapDecorationsEntry)[string] | true       | false      |

