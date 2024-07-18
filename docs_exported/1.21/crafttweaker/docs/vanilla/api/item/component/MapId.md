# MapId

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.MapId;
```


## Extending Record

MapId extends Record. That means all methods available in Record are also available in MapId

## Static Methods

:::group{name=of}

The map id to assign to the new object.

Returns: A new MapId instance.  
Return Type: [MapId](/vanilla/api/item/component/MapId)

```zenscript
MapId.of(value as int) as MapId
```

| Parameter | Type |                         Description                         |
|-----------|------|-------------------------------------------------------------|
| value     | int  | A map id. These are assigned by vanilla on the server side. |


:::

## Properties

| Name | Type | Has Getter | Has Setter |
|------|------|------------|------------|
| id   | int  | true       | false      |

