# SeededContainerLoot

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.SeededContainerLoot;
```


## Extending Record

SeededContainerLoot extends Record. That means all methods available in Record are also available in SeededContainerLoot

## Static Methods

:::group{name=of}

Return Type: [SeededContainerLoot](/vanilla/api/item/component/SeededContainerLoot)

```zenscript
SeededContainerLoot.of(lootTable as ResourceKey<LootTable>, seed as long) as SeededContainerLoot
```

| Parameter |                                               Type                                               |
|-----------|--------------------------------------------------------------------------------------------------|
| lootTable | [ResourceKey](/vanilla/api/resource/ResourceKey)&lt;[LootTable](/vanilla/api/loot/LootTable)&gt; |
| seed      | long                                                                                             |


:::

## Properties

|   Name    |                                               Type                                               | Has Getter | Has Setter |
|-----------|--------------------------------------------------------------------------------------------------|------------|------------|
| lootTable | [ResourceKey](/vanilla/api/resource/ResourceKey)&lt;[LootTable](/vanilla/api/loot/LootTable)&gt; | true       | false      |
| seed      | long                                                                                             | true       | false      |

