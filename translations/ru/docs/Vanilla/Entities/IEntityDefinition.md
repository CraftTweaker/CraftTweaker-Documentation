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

Итак, здесь интересно: Что мы можем с ним сделать, теперь, когда мы создали это?

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

Первый метод создает сущность в указанном месте.  
Второй метод также создает её.

```zenscript
<entity:minecraft:sheep>.createEntity(world);
<entity:minecraft:sheep>.spawnEntity(world, blockPos);
```

`Мир` это объект [IWorld](/Vanilla/World/IWorld/) .  
`blockPos` является [IBlockPos](/Vanilla/World/IBlockPos/) объектом.

## Дроп

Мы даже можем добавлять и/или удалять дроп моба, разве это не прекрасно?

### addDrop

Это добавляет нормальный капель, капель, которая может возникнуть всякий раз, когда моб убивает какими бы то ни было средствами.

```zenscript
val entity = <entity:minecraft:sheep>;

//addDrop(item,min,max,chance);
entity.addDrop(<minecraft:apple>);

//addDrop(weightedItem, min, max);
entity.addDrop(<minecraft:stone> % 20);
```

`Элемент` — это предмет, который будет добавлен в качестве трофея и [IItemStack](/Vanilla/Items/IItemStack/) или [взвешенный ItemStack](/Vanilla/Items/WeightedItemStack/).  
`мин.` - это минимальное количество выпавших и целых чисел. Это опционально.  
`max` это максимальная сумма, которая будет отклонена и целое число. Это опционально.  
`шанс` это шанс выброса. Это опционально. Не нужно, если вы используете [взвешенный ItemStack](/Vanilla/Items/WeightedItemStack/) вместо ``

### addPlayerOnlyDrop

То же, что и в обычной капельнице, но только если сущность была убита игроком.

```zenscript
//addPlayerOnlyDrop(item,min,max,chance);
entity.addPlayerOnlyDrop(<minecraft:gold_ingot>, 10,64);

//addPlayerOnlyDrop(weightedItem, min, max);
entity.addPlayerOnlyDrop(<minecraft:iron_ingot> 20, 1, 3);
```

### addDropFunction

Попадающая функция вызывается всякий раз, когда связанная сущность убивается. Вы можете использовать это, если вам нужно проверить требования прежде, чем вы что-то упадете, например, только в определенном биоме и предмете.  
Вам понадобится [IEntityDropFunction](/Vanilla/Entities/IEntityDropFunction/):

```zenscript
<entity:minecraft:sheep>.addDropFunction(function(entity, dmgSource) {
    return <minecraft:iron_ingot> * 10;
});
```

### removeDrop

Удаляет дроп.

```zenscript
val сущность = <entity:minecraft:sheep>;

//removeDrop(item);
entity.removeDrop(<minecraft:wool>);
```

`Элемент` является предметом, который должен быть удален из капли и [IItemStack](/Vanilla/Items/IItemStack/).

### clearDrops

Удаляет весь дроп.

```zenscript
val entity = <entity:minecraft:sheep>;

//clearDrops
entity.clearDrops();
```

### getDrops

Это возвращает все капли, которые были добавлены в CT как список [IEntityDrop](/Vanilla/Entities/IEntityDrop/) объектов.

```zenscript
val entity = <entity:minecraft:sheep>;

//drops;
val dropList = entity.drops;
```