# ToolRule

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.ToolRule;
```


## Extending Record

ToolRule extends Record. That means all methods available in Record are also available in ToolRule

## Static Methods

:::group{name=deniesDrops}

Return Type: [ToolRule](/vanilla/api/item/component/ToolRule)

```zenscript
ToolRule.deniesDrops(tag as KnownTag<Block>) as ToolRule
```

| Parameter |                                        Type                                         |
|-----------|-------------------------------------------------------------------------------------|
| tag       | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Block](/vanilla/api/block/Block)&gt; |


:::

:::group{name=minesAndDrops}

Return Type: [ToolRule](/vanilla/api/item/component/ToolRule)

```zenscript
ToolRule.minesAndDrops(blocks as stdlib.List<Block>, speed as float) as ToolRule
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| blocks    | stdlib.List&lt;[Block](/vanilla/api/block/Block)&gt; |
| speed     | float                                                |


:::

:::group{name=minesAndDrops}

Return Type: [ToolRule](/vanilla/api/item/component/ToolRule)

```zenscript
ToolRule.minesAndDrops(tag as KnownTag<Block>, speed as float) as ToolRule
```

| Parameter |                                        Type                                         |
|-----------|-------------------------------------------------------------------------------------|
| tag       | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Block](/vanilla/api/block/Block)&gt; |
| speed     | float                                                                               |


:::

:::group{name=overrideSpeed}

Return Type: [ToolRule](/vanilla/api/item/component/ToolRule)

```zenscript
ToolRule.overrideSpeed(blocks as stdlib.List<Block>, speed as float) as ToolRule
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| blocks    | stdlib.List&lt;[Block](/vanilla/api/block/Block)&gt; |
| speed     | float                                                |


:::

:::group{name=overrideSpeed}

Return Type: [ToolRule](/vanilla/api/item/component/ToolRule)

```zenscript
ToolRule.overrideSpeed(tag as KnownTag<Block>, speed as float) as ToolRule
```

| Parameter |                                        Type                                         |
|-----------|-------------------------------------------------------------------------------------|
| tag       | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Block](/vanilla/api/block/Block)&gt; |
| speed     | float                                                                               |


:::

## Properties

|          Name          |                         Type                         | Has Getter | Has Setter |
|------------------------|------------------------------------------------------|------------|------------|
| blocks                 | stdlib.List&lt;[Block](/vanilla/api/block/Block)&gt; | true       | false      |
| correctToolForDrops    | boolean                                              | true       | false      |
| hasCorrectToolForDrops | boolean                                              | true       | false      |
| speed                  | float??                                              | true       | false      |

