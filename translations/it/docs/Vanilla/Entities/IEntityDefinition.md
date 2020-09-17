# IEntityDefinition

Questo sembra spaventoso, quindi che cosa significa? Fondamentalmente, si tratta di un riferimento a un'entità registrata nel gioco, quindi è un riferimento, ad esempio un mob nel gioco.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.entity.IEntityDefinition;`

## Chiamare un oggetto IEntityDefinition

```zenscript
//Questi restituiscono un oggetto IEntityDefinition
val test = <entity:minecraft:sheep>;
val test2 = game.getEntity("sheep");

```

## Funzioni

Quindi, è qui che diventa interessante: Che cosa possiamo fare con esso, ora che abbiamo creato quella cosa?

### id

Restituisce l'ID come stringa

```zenscript
//restituisce "net.minecraft.entity.passive.EntitySheep"
<entity:minecraft:sheep>.id;
```

### nome

Restituisce il nome come stringa

```zenscript
//returns "Sheep"
<entity:minecraft:sheep>.name;
```

### crea entità

Il primo metodo crea solo un'entità nella posizione specificata.  
Anche il secondo lo genera.

```zenscript
<entity:minecraft:sheep>.createEntity(world);
<entity:minecraft:sheep>.spawnEntity(world, blockPos);
```

`world` is an [IWorld](/Vanilla/World/IWorld/) object.  
`blockPos` is an [IBlockPos](/Vanilla/World/IBlockPos/) object.

## Gocce

Possiamo anche aggiungere e/o rimuovere gocce di mob, non è così grande?

### Aggiungi goccia normale

Questo aggiunge una goccia normale, una goccia che può verificarsi ogni volta che il mob viene ucciso con qualsiasi mezzo.

```zenscript
val entity = <entity:minecraft:sheep>;

//addDrop(item,min,max,chance);
entity.addDrop(<minecraft:apple>);

//addDrop(weightedItem, min, max);
entity.addDrop(<minecraft:stone> % 20);
```

`elemento` è l'elemento da aggiungere come goccia e un [IItemStack](/Vanilla/Items/IItemStack/) o un [WeightedItemStack](/Vanilla/Items/WeightedItemStack/).  
`min` è l'importo minimo che viene abbandonato e un Intero. Questo è opzionale.  
`max` è la quantità massima che viene abbandonata e un Integer. Questa opzione è opzionale.  
`possibilità` è la possibilità di rilascio. Questo è facoltativo. Non necessario se si utilizza un [weightedItemStack](/Vanilla/Items/WeightedItemStack/) invece come `elemento`

### Aggiungi goccia solo giocatore

Come gocce normali, ma solo se l'entità è stata uccisa da un giocatore.

```zenscript
//addPlayerOnlyDrop(item,min,max,chance);
entity.addPlayerOnlyDrop(<minecraft:gold_ingot>, 10,64);

//addPlayerOnlyDrop(weightedItem, min, max);
entity.addPlayerOnlyDrop(<minecraft:iron_ingot> % 20, 1, 3);
```

### Aggiungi funzione goccia

Una funzione goccia viene chiamata ogni volta che l'Entità associata viene uccisa. È possibile utilizzare questo se è necessario controllare i requisiti per prima di rilasciare qualcosa, come solo cadere in un certo bioma e roba.  
Avrai bisogno di un [IEntityDropFunction](/Vanilla/Entities/IEntityDropFunction/):

```zenscript
<entity:minecraft:sheep>.addDropFunction(function(entity, dmgSource) {
    return <minecraft:iron_ingot> * 10;
});
```

### Rimuovi

Questo rimuove una goccia.

```zenscript
val entity = <entity:minecraft:sheep>;

//removeDrop(item);
entity.removeDrop(<minecraft:wool>);
```

`item` is the item to be removed from being a drop and an [IItemStack](/Vanilla/Items/IItemStack/).

### Cancella Le Gocce

Questo rimuove tutte le gocce.

```zenscript
val entity = <entity:minecraft:sheep>;

//clearDrops
entity.clearDrops();
```

### Ottieni

Questo restituisce tutte le gocce che sono state aggiunte tramite CT come elenco degli oggetti [IEntityDrop](/Vanilla/Entities/IEntityDrop/).

```zenscript
val entity = <entity:minecraft:sheep>;

//drops;
val dropList = entity.drops;
```