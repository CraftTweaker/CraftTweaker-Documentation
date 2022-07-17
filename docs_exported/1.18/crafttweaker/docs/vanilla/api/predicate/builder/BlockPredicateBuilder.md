# BlockPredicateBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.BlockPredicateBuilder;
```


## Methods

:::group{name=blocks}

Return Type: [BlockPredicateBuilder](/vanilla/api/predicate/builder/BlockPredicateBuilder)

```zenscript
BlockPredicateBuilder.blocks(blocks as Block[]) as BlockPredicateBuilder
```

| Parameter |                Type                 |
|-----------|-------------------------------------|
| blocks    | [Block](/vanilla/api/block/Block)[] |


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

| Parameter |               Type               |
|-----------|----------------------------------|
| tag       | [IData](/vanilla/api/data/IData) |


:::

:::group{name=nbt}

Return Type: [BlockPredicateBuilder](/vanilla/api/predicate/builder/BlockPredicateBuilder)

```zenscript
BlockPredicateBuilder.nbt(tag as MapData) as BlockPredicateBuilder
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| tag       | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=properties}

Return Type: [BlockPredicateBuilder](/vanilla/api/predicate/builder/BlockPredicateBuilder)

```zenscript
BlockPredicateBuilder.properties(predicate as StatePropertiesPredicate) as BlockPredicateBuilder
```

| Parameter |                                    Type                                     |
|-----------|-----------------------------------------------------------------------------|
| predicate | [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate) |


:::

:::group{name=properties}

Return Type: [BlockPredicateBuilder](/vanilla/api/predicate/builder/BlockPredicateBuilder)

```zenscript
BlockPredicateBuilder.properties(predicate as StatePropertiesPredicateBuilder) as BlockPredicateBuilder
```

| Parameter |                                               Type                                                |
|-----------|---------------------------------------------------------------------------------------------------|
| predicate | [StatePropertiesPredicateBuilder](/vanilla/api/predicate/builder/StatePropertiesPredicateBuilder) |


:::

:::group{name=tag}

Return Type: [BlockPredicateBuilder](/vanilla/api/predicate/builder/BlockPredicateBuilder)

```zenscript
BlockPredicateBuilder.tag(tag as KnownTag<Block>) as BlockPredicateBuilder
```

| Parameter |                                        Type                                         |
|-----------|-------------------------------------------------------------------------------------|
| tag       | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Block](/vanilla/api/block/Block)&gt; |


:::


