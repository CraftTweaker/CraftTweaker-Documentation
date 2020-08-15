# PlayerDeathDrops

L'evento PlayerDeathDrops viene sparato ogni volta che gli oggetti di un giocatore cadono a terra a causa della morte del giocatore.

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. layerDeathDropsEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

Gli eventi PlayerDeathDrops implementano le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter      | Tipo Di Reso                                                  |
| -------------- | ------------------------------------------------------------- |
| `giocatore`    | [IPlayer](/Vanilla/Players/IPlayer/)                          |
| `elementi`     | [`Elenco<IEntityItem>`](/Vanilla/Entities/IEntityItem/) |
| `damageSource` | [IDamageSource](/Vanilla/Damage/IDamageSource/)               |

## Modificare la caduta dell'elemento

È possibile aggiungere al droplist o completamente sostituirlo con uno nuovo:

```zenscript
event.items = //riferimento a IEntityItem list.

//event.addItem(IItemStack item);
event.addItem(<minecraft:iron_ingot>);

//event.addItem(IEntityItem iten);
event.addItem(<minecraft:iron_ingot>.createEntityItem(event.player.world, event.player.position));
```