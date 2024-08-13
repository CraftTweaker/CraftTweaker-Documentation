# Tool

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.Tool;
```


## Extending Record

Tool extends Record. That means all methods available in Record are also available in Tool

## Static Methods

:::group{name=of}

Return Type: [Tool](/vanilla/api/item/component/Tool)

```zenscript
Tool.of(rules as stdlib.List<ToolRule>, defaultMiningSpeed as float, damagePerBlock as int) as Tool
```

|     Parameter      |                                Type                                 |
|--------------------|---------------------------------------------------------------------|
| rules              | stdlib.List&lt;[ToolRule](/vanilla/api/item/component/ToolRule)&gt; |
| defaultMiningSpeed | float                                                               |
| damagePerBlock     | int                                                                 |


:::

## Methods

:::group{name=getMiningSpeed}

Return Type: float

```zenscript
Tool.getMiningSpeed(state as BlockState) as float
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| state     | [BlockState](/vanilla/api/block/BlockState) |


:::

:::group{name=isCorrectForDrops}

Return Type: boolean

```zenscript
Tool.isCorrectForDrops(state as BlockState) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| state     | [BlockState](/vanilla/api/block/BlockState) |


:::


## Properties

|        Name        |                                Type                                 | Has Getter | Has Setter |
|--------------------|---------------------------------------------------------------------|------------|------------|
| damagePerBlock     | int                                                                 | true       | false      |
| defaultMiningSpeed | float                                                               | true       | false      |
| rules              | stdlib.List&lt;[ToolRule](/vanilla/api/item/component/ToolRule)&gt; | true       | false      |

