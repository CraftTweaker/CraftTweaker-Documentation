# IEntityDefinition

This sounds scary, so what does it mean?
Basically, it is a reference to an entity registered in the game, so it is a reference to, say a mob in the game.

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.IEntityDefinition;`

## Calling an IEntityDefinition Object
```
//These return an IEntityDefinition Object
val test = <entity:minecraft:sheep>;
val test2 = game.getEntity("sheep");

```

## Functions
So, this is where it gets interesting:
What can we do with it, now that we created that thing?

### id

Returns the ID as string
```
//returns "net.minecraft.entity.passive.EntitySheep"
<entity:minecraft:sheep>.id;
```

### name

Returns the name as string
```
//returns "Sheep"
<entity:minecraft:sheep>.name;
```

### create entity
The first method only creates an entity on the given location.  
The second one also spawns it.
```
<entity:minecraft:sheep>.createEntity(world);
<entity:minecraft:sheep>.spawnEntity(world, blockPos);
```

`world` is an [IWorld](/Vanilla/World/IWorld/) object.  
`blockPos` is an [IBlockPos](/Vanilla/World/IBlockPos/) object.


## Drops

We can even add and/or remove mob drops, isn't that great?

### Add normal Drop

This adds a normal drop, a drop that can occur whenever the mob is killed by whatever means.
```
val entity = <entity:minecraft:sheep>;

//addDrop(item,min,max,chance);
entity.addDrop(<minecraft:apple>);

//addDrop(weightedItem, min, max);
entity.addDrop(<minecraft:stone> % 20);
```

`item` is the item to be added as drop and an [IItemStack](/Vanilla/Items/IItemStack/) or a [WeightedItemStack](/Vanilla/Items/WeightedItemStack/).  
`min` is the minimum amount that is dropped and an Integer. This is optional.  
`max` is the maximum amount that is dropped and an Integer. This is optional.  
`chance` is the drop chance. This is optional. Not needed if you use a [weightedItemStack](/Vanilla/Items/WeightedItemStack/) instead as `item`

### Add playeronly drop

Same as normal drops, but only if the entity was killed by a player.
```
//addPlayerOnlyDrop(item,min,max,chance);
entity.addPlayerOnlyDrop(<minecraft:gold_ingot>, 10,64);

//addPlayerOnlyDrop(weightedItem, min, max);
entity.addPlayerOnlyDrop(<minecraft:iron_ingot> % 20, 1, 3);
```

### Add drop Function

A drop function is called whenever the associated Entity is killed. You can use this if you need to check requirements for before you drop something, like only dropping in a certain biome and stuff.  
You will need an [IEntityDropFunction](/Vanilla/Entities/IEntityDropFunction/):
```
<entity:minecraft:sheep>.addDropFunction(function(entity, dmgSource) {
	return <minecraft:iron_ingot> * 10;
	});
```


### Remove

This removes a drop.
```
val entity = <entity:minecraft:sheep>;

//removeDrop(item);
entity.removeDrop(<minecraft:wool>);
```
`item` is the item to be removed from being a drop and an [IItemStack](/Vanilla/Items/IItemStack/).

### Clear Drops

This removes all drops.
```
val entity = <entity:minecraft:sheep>;

//clearDrops
entity.clearDrops;
```

### Get

This returns all drops that were added via CT as list of [IEntityDrop](/Vanilla/Entities/IEntityDrop/) Objects.
```
val entity = <entity:minecraft:sheep>;

//getDrops();
val dropList = entity.getDrops();
```
