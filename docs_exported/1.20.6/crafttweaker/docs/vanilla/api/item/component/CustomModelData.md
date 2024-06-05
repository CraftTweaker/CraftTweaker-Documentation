# CustomModelData

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.CustomModelData;
```


## Extending Record

CustomModelData extends Record. That means all methods available in Record are also available in CustomModelData

## Static Methods

:::group{name=of}

Return Type: [CustomModelData](/vanilla/api/item/component/CustomModelData)

```zenscript
CustomModelData.of(value as int) as CustomModelData
```

| Parameter | Type |
|-----------|------|
| value     | int  |


:::

## Properties

| Name  | Type | Has Getter | Has Setter |
|-------|------|------------|------------|
| value | int  | true       | false      |

