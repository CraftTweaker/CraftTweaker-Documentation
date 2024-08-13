# AdventureModePredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.AdventureModePredicate;
```


## Static Methods

:::group{name=of}

Return Type: [AdventureModePredicate](/vanilla/api/item/component/AdventureModePredicate)

```zenscript
AdventureModePredicate.of(predicates as stdlib.List<BlockPredicate>, showInTooltip as boolean) as AdventureModePredicate
```

|   Parameter   |                                    Type                                    |
|---------------|----------------------------------------------------------------------------|
| predicates    | stdlib.List&lt;[BlockPredicate](/vanilla/api/predicate/BlockPredicate)&gt; |
| showInTooltip | boolean                                                                    |


:::

:::group{name=ofBlocks}

Return Type: [AdventureModePredicate](/vanilla/api/item/component/AdventureModePredicate)

```zenscript
AdventureModePredicate.ofBlocks(predicates as stdlib.List<Block>, showInTooltip as boolean) as AdventureModePredicate
```

|   Parameter   |                         Type                         |
|---------------|------------------------------------------------------|
| predicates    | stdlib.List&lt;[Block](/vanilla/api/block/Block)&gt; |
| showInTooltip | boolean                                              |


:::

:::group{name=ofTags}

Return Type: [AdventureModePredicate](/vanilla/api/item/component/AdventureModePredicate)

```zenscript
AdventureModePredicate.ofTags(predicates as stdlib.List<KnownTag<Block>>, showInTooltip as boolean) as AdventureModePredicate
```

|   Parameter   |                                                  Type                                                  |
|---------------|--------------------------------------------------------------------------------------------------------|
| predicates    | stdlib.List&lt;[KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Block](/vanilla/api/block/Block)&gt;&gt; |
| showInTooltip | boolean                                                                                                |


:::

## Methods

:::group{name=withTooltip}

Return Type: [AdventureModePredicate](/vanilla/api/item/component/AdventureModePredicate)

```zenscript
AdventureModePredicate.withTooltip(tooltip as boolean) as AdventureModePredicate
```

| Parameter |  Type   |
|-----------|---------|
| tooltip   | boolean |


:::


## Properties

|     Name      |  Type   | Has Getter | Has Setter |
|---------------|---------|------------|------------|
| showInTooltip | boolean | true       | false      |

