# LootTable

A loot table is used to determine what is dropped when the game needs to drop loot.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.LootTable;
```


## Methods

:::group{name=fill}

Fills the given container with loot rolled by this table.

```zenscript
LootTable.fill(container as Container, params as LootParams, seed as long)
```

| Parameter |                    Type                    |                                 Description                                  | Optional | Default Value |
|-----------|--------------------------------------------|------------------------------------------------------------------------------|----------|---------------|
| container | [Container](/vanilla/api/world/Container)  | The container to fill.                                                       | false    |               |
| params    | [LootParams](/vanilla/api/loot/LootParams) | The params that will be used to generate the loot.                           | false    |               |
| seed      | long                                       | An Optional seed used to generate the loot, defaults to `0` if not supplied. | true     | 0             |


:::

:::group{name=getId}

Gets the ID of this loot table.

Returns: The ID of this loot table.  
Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// LootTable.getId() as ResourceLocation

lootTables.getTable(<resource:minecraft:gameplay/cat_morning_gift>).getId();
```

:::

:::group{name=getParamSet}

Gets the param set that this table uses.

Returns: The param set that this table uses.  
Return Type: [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet)

```zenscript
// LootTable.getParamSet() as LootContextParamSet

lootTables.getTable(<resource:minecraft:gameplay/cat_morning_gift>).getParamSet();
```

:::

:::group{name=getRandomItems}

Rolls this table and returns the rolled items in a list.

 NOTE: The provided [LootContext](/vanilla/api/loot/LootContext) should not be reused from a loot modifier, if you want to reuse a context, look at **invalid**#copy(LootContext).

Returns: A list containing all the rolled items.  
Return Type: stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;

```zenscript
// LootTable.getRandomItems(context as LootContext) as stdlib.List<IItemStack>

lootTables.getTable(<resource:minecraft:gameplay/cat_morning_gift>).getRandomItems(new LootContextBuilder(level).withParameter<Vec3>(LootContextParams.origin(), player.position).withParameter<Entity>(LootContextParams.thisEntity(), player).create(LootContextParamSets.gift()));
```

| Parameter |                     Type                     |                  Description                   |
|-----------|----------------------------------------------|------------------------------------------------|
| context   | [LootContext](/vanilla/api/loot/LootContext) | The context that this loot was generated with. |


:::

:::group{name=getRandomItems}

Rolls this table and returns the rolled items in a list.

 NOTE: The provided [LootContext](/vanilla/api/loot/LootContext) should not be reused from a loot modifier, if you want to reuse a context, look at **invalid**#copy(LootContext).

Returns: A list containing all the rolled items.  
Return Type: stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;

```zenscript
LootTable.getRandomItems(params as LootParams) as stdlib.List<IItemStack>
```

| Parameter |                    Type                    |                  Description                  |
|-----------|--------------------------------------------|-----------------------------------------------|
| params    | [LootParams](/vanilla/api/loot/LootParams) | The params that this loot was generated with. |


:::

:::group{name=getRandomItems}

Rolls this table and passes all the rolled items to the given `Consumer<[IItemStack](/vanilla/api/item/IItemStack)>`

 NOTE: This method does respect max stack sizes
 NOTE: The provided [LootContext](/vanilla/api/loot/LootContext) should not be reused from a loot modifier, if you want to reuse a context, look at **invalid**#copy(LootContext).

```zenscript
// LootTable.getRandomItems(context as LootContext, stackConsumer as Consumer<IItemStack>)

lootTables.getTable(<resource:minecraft:gameplay/cat_morning_gift>).getRandomItems(new LootContextBuilder(level).withParameter<Vec3>(LootContextParams.origin(), player.position).withParameter<Entity>(LootContextParams.thisEntity(), player).create(LootContextParamSets.gift()), (stack) => {

 println(stack.commandString);
 });
```

|   Parameter   |                            Type                            |               Description                |
|---------------|------------------------------------------------------------|------------------------------------------|
| context       | [LootContext](/vanilla/api/loot/LootContext)               | The context that will generate the loot. |
| stackConsumer | Consumer&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | A consumer to act on the rolled stacks.  |


:::

:::group{name=getRandomItemsRaw}

Rolls this table and passes all the rolled items to the given `Consumer<[IItemStack](/vanilla/api/item/IItemStack)>`

 NOTE: This method does not respect max stack sizes!
 NOTE: The provided [LootContext](/vanilla/api/loot/LootContext) should not be reused from a loot modifier, if you want to reuse a context, look at **invalid**#copy(LootContext).

```zenscript
// LootTable.getRandomItemsRaw(context as LootContext, stackConsumer as Consumer<IItemStack>)

lootTables.getTable(<resource:minecraft:gameplay/cat_morning_gift>).getRandomItemsRaw(new LootContextBuilder(level).withParameter<Vec3>(LootContextParams.origin(), player.position).withParameter<Entity>(LootContextParams.thisEntity(), player).create(LootContextParamSets.gift()), (stack) => {

 println(stack.commandString);
 });
```

|   Parameter   |                            Type                            |               Description                |
|---------------|------------------------------------------------------------|------------------------------------------|
| context       | [LootContext](/vanilla/api/loot/LootContext)               | The context that will generate the loot. |
| stackConsumer | Consumer&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | A consumer to act on the rolled stacks.  |


:::


## Properties

|   Name   |                                Type                                | Has Getter | Has Setter |               Description                |
|----------|--------------------------------------------------------------------|------------|------------|------------------------------------------|
| id       | [ResourceLocation](/vanilla/api/resource/ResourceLocation)         | true       | false      | Gets the ID of this loot table.          |
| paramSet | [LootContextParamSet](/vanilla/api/loot/param/LootContextParamSet) | true       | false      | Gets the param set that this table uses. |

