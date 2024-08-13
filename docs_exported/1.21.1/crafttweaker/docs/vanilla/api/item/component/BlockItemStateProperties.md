# BlockItemStateProperties

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.BlockItemStateProperties;
```


## Extending Record

BlockItemStateProperties extends Record. That means all methods available in Record are also available in BlockItemStateProperties

## Static Methods

:::group{name=of}

Return Type: [BlockItemStateProperties](/vanilla/api/item/component/BlockItemStateProperties)

```zenscript
BlockItemStateProperties.of(properties as string[string]) as BlockItemStateProperties
```

| Parameter  |      Type      |
|------------|----------------|
| properties | string[string] |


:::

## Methods

:::group{name=apply}

Return Type: [BlockState](/vanilla/api/block/BlockState)

```zenscript
BlockItemStateProperties.apply(state as BlockState) as BlockState
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| state     | [BlockState](/vanilla/api/block/BlockState) |


:::

:::group{name=properties}

Return Type: string[string]

```zenscript
// BlockItemStateProperties.properties() as string[string]

myBlockItemStateProperties.properties();
```

:::


## Properties

|  Name   |  Type   | Has Getter | Has Setter |
|---------|---------|------------|------------|
| isEmpty | boolean | true       | false      |

