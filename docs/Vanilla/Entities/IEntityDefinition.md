# IEntityDefinition

This sounds scary, so what does it mean?
Basically, it is a reference to an entity registered in the game, so it is a reference to, say a mob in the game.

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

`item` is the item to be added as drop and an IItemStack or a WeightedItemStack.  
`min` is the minimum amount that is dropped and an Integer. This is optional.  
`max` is the maximum amount that is dropped and an Integer. This is optional.
`chance` is the drop chance. This is optional. Not needed if you use a weightedItemStack instead as `item`

### Add playeronly drop

Same as normal drops, but only if the entity was killed by a player.
```
//addPlayerOnlyDrop(item,min,max,chance);
entity.addPlayerOnlyDrop(<minecraft:gold_ingot>, 10,64);

//addPlayerOnlyDrop(weightedItem, min, max);
entity.addPlayerOnlyDrop(<minecraft:iron_ingot> % 20, 1, 3);
```

### Remove

This removes a drop.
```
val entity = <entity:minecraft:sheep>;

//remove(item);
entity.remove(<minecraft:wool>);
```
`item` is the item to be removed from being a drop and an IItemStack.


### Get

This returns all drops that were added via CT as list of [IEntityDrop](IEntityDrop) Objects.
```
val entity = <entity:minecraft:sheep>;

//getDrops();
val dropList = entity.getDrops();
```