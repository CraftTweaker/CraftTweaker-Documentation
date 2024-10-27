# RandomizableContainer

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.RandomizableContainer;
```


## Implemented Interfaces
RandomizableContainer implements the following interfaces. That means all methods defined in these interfaces are also available in RandomizableContainer

- [Container](/vanilla/api/world/Container)

## Methods

:::group{name=getLootTable}

Gets the loot table used by the container.

Returns: The loot table used by the container.  
Return Type: [ResourceKey](/vanilla/api/resource/ResourceKey)&lt;T&gt;?

```zenscript
// RandomizableContainer.getLootTable() as ResourceKey<T>?

myRandomizableContainer.getLootTable();
```

:::

:::group{name=getLootTableSeed}

Gets the seed used by the loot table.

Returns: The seed used by the loot table.  
Return Type: long

```zenscript
// RandomizableContainer.getLootTableSeed() as long

myRandomizableContainer.getLootTableSeed();
```

:::

:::group{name=setLootTable}

Sets the loot table used by the container.

```zenscript
RandomizableContainer.setLootTable(lootTable as ResourceKey<LootTable>)
```

| Parameter |                                               Type                                               |                 Description                  |
|-----------|--------------------------------------------------------------------------------------------------|----------------------------------------------|
| lootTable | [ResourceKey](/vanilla/api/resource/ResourceKey)&lt;[LootTable](/vanilla/api/loot/LootTable)&gt; | The new loot table for the container to use. |


:::

:::group{name=setLootTable}

Sets the loot table used by the container.

```zenscript
RandomizableContainer.setLootTable(lootTable as ResourceLocation)
```

| Parameter |                            Type                            |                 Description                  |
|-----------|------------------------------------------------------------|----------------------------------------------|
| lootTable | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The new loot table for the container to use. |


:::

:::group{name=setLootTable}

Sets the loot table used by the container.

```zenscript
RandomizableContainer.setLootTable(lootTable as ResourceKey<LootTable>, seed as long)
```

| Parameter |                                               Type                                               |                 Description                  |
|-----------|--------------------------------------------------------------------------------------------------|----------------------------------------------|
| lootTable | [ResourceKey](/vanilla/api/resource/ResourceKey)&lt;[LootTable](/vanilla/api/loot/LootTable)&gt; | The new loot table for the container to use. |
| seed      | long                                                                                             | The seed for the loot table to use.          |


:::

:::group{name=setLootTable}

Sets the loot table used by the container.

```zenscript
RandomizableContainer.setLootTable(lootTable as ResourceLocation, seed as long)
```

| Parameter |                            Type                            |                 Description                  |
|-----------|------------------------------------------------------------|----------------------------------------------|
| lootTable | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The new loot table for the container to use. |
| seed      | long                                                       | The seed for the loot table to use.          |


:::

:::group{name=setLootTableSeed}

Sets the seed used by the loot table.

```zenscript
RandomizableContainer.setLootTableSeed(seed as long)
```

| Parameter | Type |             Description             |
|-----------|------|-------------------------------------|
| seed      | long | The seed for the loot table to use. |


:::


## Properties

|   Name    |                            Type                            | Has Getter | Has Setter |                Description                 |
|-----------|------------------------------------------------------------|------------|------------|--------------------------------------------|
| lootSeed  | long                                                       | true       | true       | Gets the seed used by the loot table.      |
| lootTable | [ResourceKey](/vanilla/api/resource/ResourceKey)&lt;T&gt;? | true       | true       | Gets the loot table used by the container. |

