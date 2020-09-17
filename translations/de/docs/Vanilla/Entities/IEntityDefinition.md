# IEntityDefinition

Das klingt beängstigend, was heißt es also? Grundsätzlich ist es ein Verweis auf eine im Spiel registrierte Entität, so dass es eine Referenz ist, sagen wir, ein Mob im Spiel.

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere crafttweaker.entity.IEntityDefinition;`

## Aufruf eines IEntityDefinition-Objekts

```zenscript
//Diese geben ein IEntityDefinition-Objekt
val test = <entity:minecraft:sheep>;
val test2 = game.getEntity("Schaf");

```

## Funktionen

So, this is where it gets interesting: What can we do with it, now that we created that thing?

### id

Gibt die ID als String zurück

```zenscript
//gibt "net.minecraft.entity.passive.EntitySheep"
<entity:minecraft:sheep>.id;
```

### name

Gibt den Namen als String zurück

```zenscript
//gibt "Schaf"
<entity:minecraft:sheep>.name;
```

### erstelle Entität

Die erste Methode erzeugt nur eine Entität an der angegebenen Position.  
Die zweite erzeugt sie ebenfalls.

```zenscript
<entity:minecraft:sheep>.createEntity(world);
<entity:minecraft:sheep>.spawnEntity(world, blockPos);
```

`Welt` ist ein [IWorld](/Vanilla/World/IWorld/) Objekt.  
`blockPos` ist ein [IBlockPos](/Vanilla/World/IBlockPos/) Objekt.

## Tropfen

Wir können sogar Mob-Drops hinzufügen und/oder entfernen, nicht so groß?

### Normales Drop hinzufügen

Dies fügt einen normalen Tropfen hinzu, einen Tropfen, der auftreten kann, wenn der Mob mit welchen Mitteln auch immer getötet wird.

```zenscript
val entity = <entity:minecraft:sheep>;

//addDrop(item,min,max,chance);
entity.addDrop(<minecraft:apple>);

//addDrop(weightedItem, min, max);
entity.addDrop(<minecraft:stone> % 20);
```

`Element` ist das Element, das als Drop hinzugefügt werden soll und ein [IItemStack](/Vanilla/Items/IItemStack/) oder ein [Gewichteter Artikel](/Vanilla/Items/WeightedItemStack/).  
`min` ist der abgesetzte Mindestbetrag und eine Ganzzahl. Dies ist optional.  
`max` ist der maximale Betrag, der fallen gelassen wird und eine Ganzzahl. Dies ist optional.  
`Chance` ist die Drop-Chance. Dies ist optional. Nicht erforderlich, wenn Sie einen [gewichteten Artikel](/Vanilla/Items/WeightedItemStack/) stattdessen als `Element verwenden`

### Nur Player hinzufügen

Gleiche wie normale Tropfen, aber nur, wenn die Entität von einem Spieler getötet wurde.

```zenscript
//addPlayerOnlyDrop(item,min,max,chance);
entity.addPlayerOnlyDrop(<minecraft:gold_ingot>, 10,64);

//addPlayerOnlyDrop(weightedItem, min, max);
entity.addPlayerOnlyDrop(<minecraft:iron_ingot> % 20, 1, 3);
```

### Drop-Funktion hinzufügen

Eine Drop-Funktion wird aufgerufen, wenn die zugehörige Entität beendet wird. Sie können dies verwenden, wenn Sie die Anforderungen überprüfen müssen, bevor Sie etwas fallen lassen, wie nur in einem bestimmten Biom und Sachen.  
Sie benötigen eine [IEntityDropFunktion](/Vanilla/Entities/IEntityDropFunction/):

```zenscript
<entity:minecraft:sheep>.addDropFunction(function(entity, dmgSource) {
    return <minecraft:iron_ingot> * 10;
});
```

### Entfernen

Dies entfernt einen Drop.

```zenscript
val entity = <entity:minecraft:sheep>;

//removeDrop(item);
entity.removeDrop(<minecraft:wool>);
```

`Element` ist das zu entfernende Element und ein [IItemStack](/Vanilla/Items/IItemStack/).

### Drops löschen

Dies entfernt alle Drops.

```zenscript
val Entität = <entity:minecraft:sheep>;

//clearDrops
entity.clearDrops();
```

### Erhalten

Dies gibt alle Drops zurück, die über CT als Liste von [IEntityDrop](/Vanilla/Entities/IEntityDrop/) Objekten hinzugefügt wurden.

```zenscript
val Entität = <entity:minecraft:sheep>;

//Drops;
val dropList = entity.drops;
```