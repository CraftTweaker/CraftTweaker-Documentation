# MapItemColor

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.MapItemColor;
```


## Extending Record

MapItemColor extends Record. That means all methods available in Record are also available in MapItemColor

## Static Methods

:::group{name=defaultColor}

Return Type: [MapItemColor](/vanilla/api/item/component/MapItemColor)

```zenscript
// MapItemColor.defaultColor() as MapItemColor

MapItemColor.defaultColor();
```

:::

:::group{name=of}

Return Type: [MapItemColor](/vanilla/api/item/component/MapItemColor)

```zenscript
MapItemColor.of(rgb as int) as MapItemColor
```

| Parameter | Type |
|-----------|------|
| rgb       | int  |


:::

## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| rgb  | int  | true       | false      |

