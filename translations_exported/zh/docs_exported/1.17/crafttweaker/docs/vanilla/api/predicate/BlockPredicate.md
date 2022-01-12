# BlockPredicate

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.BlockPredicate;
```


## Static Methods

:::group{name=any}

Return Type: [BlockPredicate](/vanilla/api/predicate/BlockPredicate)

```zenscript
// BlockPredicate.any() as BlockPredicate

BlockPredicate.any();
```

:::

:::group{name=create}

Return Type: [BlockPredicateBuilder](/vanilla/api/predicate/builder/BlockPredicateBuilder)

```zenscript
// BlockPredicate.create() as BlockPredicateBuilder

BlockPredicate.create();
```

:::

:::group{name=create}

Return Type: [BlockPredicateBuilder](/vanilla/api/predicate/builder/BlockPredicateBuilder)

```zenscript
BlockPredicate.create(blocks as Block[]) as BlockPredicateBuilder
```

| 参数     | 类型                                  | 描述                      |
| ------ | ----------------------------------- | ----------------------- |
| blocks | [Block](/vanilla/api/block/Block)[] | No Description Provided |


:::

:::group{name=create}

Return Type: [BlockPredicateBuilder](/vanilla/api/predicate/builder/BlockPredicateBuilder)

```zenscript
BlockPredicate.create(tag as MCTag<Block>) as BlockPredicateBuilder
```

| 参数      | 类型                                                                                   | 描述                      |
| ------- | ------------------------------------------------------------------------------------ | ----------------------- |
| tag #标签 | [MCTag](/vanilla/api/tag/MCTag)&lt;[Block](/vanilla/api/block/Block)&gt; | No Description Provided |


:::

