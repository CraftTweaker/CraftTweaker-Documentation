# BlockPredicate

## Importing the class

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

## Methods

:::group{name=matches}

Return Type: boolean

```zenscript
BlockPredicate.matches(level as ServerLevel, pos as BlockPos) as boolean
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| level     | [ServerLevel](/vanilla/api/world/ServerLevel) |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos)   |


:::


