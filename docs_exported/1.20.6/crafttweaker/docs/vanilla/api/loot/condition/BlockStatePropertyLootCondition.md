# BlockStatePropertyLootCondition

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.BlockStatePropertyLootCondition;
```


## Extending Record

BlockStatePropertyLootCondition extends Record. That means all methods available in Record are also available in BlockStatePropertyLootCondition

## Implemented Interfaces
BlockStatePropertyLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in BlockStatePropertyLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [BlockStatePropertyLootConditionBuilder](/vanilla/api/loot/condition/builder/BlockStatePropertyLootConditionBuilder)

```zenscript
BlockStatePropertyLootCondition.create(block as Block) as BlockStatePropertyLootConditionBuilder
```

| Parameter |               Type                |
|-----------|-----------------------------------|
| block     | [Block](/vanilla/api/block/Block) |


:::

