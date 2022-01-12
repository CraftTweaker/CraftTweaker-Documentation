# BlockPredicateBuilder

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.BlockPredicateBuilder;
```


## 使用方式

:::group{name=blocks}

Return Type: [BlockPredicateBuilder](/vanilla/api/predicate/builder/BlockPredicateBuilder)

```zenscript
BlockPredicateBuilder.blocks(blocks as Block[]) as BlockPredicateBuilder
```

| 参数     | 类型                                  | 描述                      |
| ------ | ----------------------------------- | ----------------------- |
| blocks | [Block](/vanilla/api/block/Block)[] | No Description Provided |


:::

:::group{name=build}

Return Type: [BlockPredicate](/vanilla/api/predicate/BlockPredicate)

```zenscript
// BlockPredicateBuilder.build() as BlockPredicate

myBlockPredicateBuilder.build();
```

:::

:::group{name=nbt}

Return Type: [BlockPredicateBuilder](/vanilla/api/predicate/builder/BlockPredicateBuilder)

```zenscript
BlockPredicateBuilder.nbt(tag as IData) as BlockPredicateBuilder
```

| 参数      | 类型                                   | 描述                      |
| ------- | ------------------------------------ | ----------------------- |
| tag #标签 | [IData #数据](/vanilla/api/data/IData) | No Description Provided |


:::

:::group{name=nbt}

Return Type: [BlockPredicateBuilder](/vanilla/api/predicate/builder/BlockPredicateBuilder)

```zenscript
BlockPredicateBuilder.nbt(tag as MapData) as BlockPredicateBuilder
```

| 参数      | 类型                                         | 描述                      |
| ------- | ------------------------------------------ | ----------------------- |
| tag #标签 | [MapData #地图数据](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=properties}

Return Type: [BlockPredicateBuilder](/vanilla/api/predicate/builder/BlockPredicateBuilder)

```zenscript
BlockPredicateBuilder.properties(predicate as StatePropertiesPredicate) as BlockPredicateBuilder
```

| 参数        | 类型                                                                          | 描述                      |
| --------- | --------------------------------------------------------------------------- | ----------------------- |
| predicate | [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate) | No Description Provided |


:::

:::group{name=properties}

Return Type: [BlockPredicateBuilder](/vanilla/api/predicate/builder/BlockPredicateBuilder)

```zenscript
BlockPredicateBuilder.properties(predicate as StatePropertiesPredicateBuilder) as BlockPredicateBuilder
```

| 参数        | 类型                                                                                                | 描述                      |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| predicate | [StatePropertiesPredicateBuilder](/vanilla/api/predicate/builder/StatePropertiesPredicateBuilder) | No Description Provided |


:::

:::group{name=tag}

Return Type: [BlockPredicateBuilder](/vanilla/api/predicate/builder/BlockPredicateBuilder)

```zenscript
BlockPredicateBuilder.tag(tag as MCTag<Block>) as BlockPredicateBuilder
```

| 参数      | 类型                                                                                   | 描述                      |
| ------- | ------------------------------------------------------------------------------------ | ----------------------- |
| tag #标签 | [MCTag](/vanilla/api/tag/MCTag)&lt;[Block](/vanilla/api/block/Block)&gt; | No Description Provided |


:::


