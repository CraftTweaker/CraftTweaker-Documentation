# IEntityDefinition

This sounds scary, wo what does it mean?
Basically, it is a reference to an entity registered in the game, so it is a reference to, say a mob in the game.

```
//This returns an IEntityDefinition Object
val test = <entity:sheep>;

```

## Functions
So, this is where it gets interesting:
What can we do with it, now that we created that thing?

### id

Returns the ID as string
```
<entity:sheep>.id;
```

### name

Returns the name as string
```
<entity:sheep>.name;
```

## Drops

We can even add and/or remove mob drops, isn't that great?

### Add normal Drop

This adds a normal drop, a drop that can occur whenever the mob is killed by whatever means.
```
val entity = <entity:sheep>;

//addDrop(item,min,max);
entity.addDrop(<minecraft:apple>);
```

`item` is the item to be added as drop and an IItemStack.  
`min` is the minimum amount that is dropped and an Integer. This is optional.  
`max` is the maximum amount that is dropped and an Integer. This is optional.

### Add playeronly drop

Same as normal drops, but only if the entity was killed by a player.
```
entity.addPlayerOnlyDrop(<minecraft:gold_ingot>, 10,64);
```

### Remove

This removes a drop.
```
val entity = <entity:sheep>;

//remove(item);
entity.remove(<minecraft:wool>);
```
`item` is the item to be removed from being a drop and an IItemStack.