# EntityLivingDeathDrops

L'evento EntityLivingDeathDrops è sparato quando la morte di un'Entità provoca la comparsa di oggetti caduti.  
Può essere annullato per impedire all'entità di rilasciare qualsiasi cosa.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. ntityLivingDeathDropsEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

Gli eventi PlayerDeathDrops implementano le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter       | Tipo Di Reso                                                  |
| --------------- | ------------------------------------------------------------- |
| `gocce`         | [`Elenco<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `damageSource`  | [IDamageSource](/Vanilla/Damage/IDamageSource/)               |
| `isRecentlyHit` | bool                                                          |
| `lootingLevel`  | int                                                           |

## Modificare la caduta dell'elemento

È possibile aggiungere al droplist o completamente sostituirlo con uno nuovo:

```zenscript
event.drops = //riferimento a IEntityItem list.

//event.addItem(IItemStack item);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.world, event.player.position));
```