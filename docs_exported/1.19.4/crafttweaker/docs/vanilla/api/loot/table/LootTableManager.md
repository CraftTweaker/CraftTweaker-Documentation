# LootTableManager

Manager for loot tables.

 An instance of this manager can be obtained via the [LootManager](/vanilla/api/loot/LootManager).

 These methods can only be called from the server side, so ensure that all calls are inside a `level.isClientSide` check or a `#onlyIf side server` preprocessor!

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.table.LootTableManager;
```


## Enum Constants

LootTableManager is an enum. It has 1 enum constants. They are accessible using the code below.

```zenscript
LootTableManager.INSTANCE
```
## Methods

:::group{name=getIds}

Gets the ids of all registered loot tables.

Returns: The ids of all registered loot tables.  
Return Type: Set&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

```zenscript
// LootTableManager.getIds() as Set<ResourceLocation>

loot.tables.getIds();
```

:::

:::group{name=getTable}

Gets a table with the given name.

 If no table is registered with the name, an empty table will be returned.

Returns: The found table or an empty table if not found.  
Return Type: [LootTable](/vanilla/api/loot/LootTable)

```zenscript
// LootTableManager.getTable(name as ResourceLocation) as LootTable

loot.tables.getTable(<resource:minecraft:gameplay/cat_morning_gift>);
```

| Parameter |                            Type                            |          Description          |
|-----------|------------------------------------------------------------|-------------------------------|
| name      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The name of the table to get. |


:::


## Properties

| Name |                                 Type                                  | Has Getter | Has Setter |                 Description                 |
|------|-----------------------------------------------------------------------|------------|------------|---------------------------------------------|
| ids  | Set&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt; | true       | false      | Gets the ids of all registered loot tables. |

