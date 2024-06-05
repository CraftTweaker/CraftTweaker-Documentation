# BlockPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.BlockPredicate;
```


## Extending Record

BlockPredicate extends Record. That means all methods available in Record are also available in BlockPredicate

## Static Methods

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

| Parameter |                Type                 |
|-----------|-------------------------------------|
| blocks    | [Block](/vanilla/api/block/Block)[] |


:::

:::group{name=create}

Return Type: [BlockPredicateBuilder](/vanilla/api/predicate/builder/BlockPredicateBuilder)

```zenscript
BlockPredicate.create(tag as KnownTag<Block>) as BlockPredicateBuilder
```

| Parameter |                                        Type                                         |
|-----------|-------------------------------------------------------------------------------------|
| tag       | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Block](/vanilla/api/block/Block)&gt; |


:::

