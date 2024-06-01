# Unbreakable

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.Unbreakable;
```


## Extending Record

Unbreakable extends Record. That means all methods available in Record are also available in Unbreakable

## Static Methods

:::group{name=of}

Return Type: [Unbreakable](/vanilla/api/item/component/Unbreakable)

```zenscript
Unbreakable.of(showInTooltip as boolean) as Unbreakable
```

|   Parameter   |  Type   |
|---------------|---------|
| showInTooltip | boolean |


:::

## Methods

:::group{name=withTooltip}

Return Type: [Unbreakable](/vanilla/api/item/component/Unbreakable)

```zenscript
Unbreakable.withTooltip(showInTooltip as boolean) as Unbreakable
```

|   Parameter   |  Type   |
|---------------|---------|
| showInTooltip | boolean |


:::


## Properties

|     Name      |  Type   | Has Getter | Has Setter |
|---------------|---------|------------|------------|
| showInTooltip | boolean | true       | false      |

