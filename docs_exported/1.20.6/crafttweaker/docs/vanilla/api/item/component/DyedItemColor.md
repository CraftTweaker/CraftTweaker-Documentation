# DyedItemColor

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.DyedItemColor;
```


## Extending Record

DyedItemColor extends Record. That means all methods available in Record are also available in DyedItemColor

## Static Methods

:::group{name=of}

Return Type: [DyedItemColor](/vanilla/api/item/component/DyedItemColor)

```zenscript
DyedItemColor.of(rgb as int, showInTooltip as boolean) as DyedItemColor
```

|   Parameter   |  Type   |
|---------------|---------|
| rgb           | int     |
| showInTooltip | boolean |


:::

## Methods

:::group{name=withTooltip}

Return Type: [DyedItemColor](/vanilla/api/item/component/DyedItemColor)

```zenscript
DyedItemColor.withTooltip(tooltip as boolean) as DyedItemColor
```

| Parameter |  Type   |
|-----------|---------|
| tooltip   | boolean |


:::


## Properties

|     Name      |  Type   | Has Getter | Has Setter |
|---------------|---------|------------|------------|
| rgb           | int     | true       | false      |
| showInTooltip | boolean | true       | false      |

