# IEntityDefinition

Это звучит страшно, что же это значит? В основном, это ссылка на сущность, зарегистрированную в игре, так что это ссылка, на, скажем, моба в игре.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.entity.IEntityDefinition;`

## Вызов объекта IEntityDefinition

```zenscript
//Это все возвращает объекты IEntityDefinition
val test = <entity:minecraft:sheep>;
val test2 = game.getEntity("sheep");

```

## Функции

So, this is where it gets interesting: What can we do with it, now that we created that thing?

### id

Возвращает ID как строку.

```zenscript
//возвращает "net.minecraft.entity.passive.EntitySheep"
<entity:minecraft:sheep>.id;
```

### name

Возвращает имя как строку.

```zenscript
//возвращает "Sheep"
<entity:minecraft:sheep>.name;
```

### createEntity

The first method only creates an entity on the given location.  
The second one also spawns it.

```zenscript
<entity:minecraft:sheep>.createEntity(world);
<entity:minecraft:sheep>.spawnEntity(world, blockPos);
```

`world` is an [IWorld](/Vanilla/World/IWorld/) object.  
`blockPos` is an [IBlockPos](/Vanilla/World/IBlockPos/) object.

## Дроп

Мы даже можем добавлять и/или удалять дроп моба, разве это не прекрасно?

### addDrop

This adds a normal drop, a drop that can occur whenever the mob is killed by whatever means.

```zenscript
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

### addPlayerOnlyDrop

Same as normal drops, but only if the entity was killed by a player.

```zenscript
//addPlayerOnlyDrop(item,min,max,chance);
entity.addPlayerOnlyDrop(<minecraft:gold_ingot>, 10,64);

//addPlayerOnlyDrop(weightedItem, min, max);
entity.addPlayerOnlyDrop(<minecraft:iron_ingot> % 20, 1, 3);
```

### addDropFunction

A drop function is called whenever the associated Entity is killed. You can use this if you need to check requirements for before you drop something, like only dropping in a certain biome and stuff.  
You will need an [IEntityDropFunction](/Vanilla/Entities/IEntityDropFunction/):

```zenscript
<entity:minecraft:sheep>.addDropFunction(function(entity, dmgSource) {
    return <minecraft:iron_ingot> * 10;
    });
```

### removeDrop

Удаляет дроп.

```zenscript
val entity = <entity:minecraft:sheep>;

//removeDrop(item);
entity.removeDrop(<minecraft:wool>);
```

`item` is the item to be removed from being a drop and an [IItemStack](/Vanilla/Items/IItemStack/).

### clearDrops

Удаляет весь дроп.

```zenscript
val entity = <entity:minecraft:sheep>;

//clearDrops
entity.clearDrops();
```

### getDrops

This returns all drops that were added via CT as list of [IEntityDrop](/Vanilla/Entities/IEntityDrop/) Objects.

```zenscript
val entity = <entity:minecraft:sheep>;

//drops;
val dropList = entity.drops;
```