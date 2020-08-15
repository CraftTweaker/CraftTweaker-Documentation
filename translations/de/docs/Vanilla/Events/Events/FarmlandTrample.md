# FarmlandTrampleEvent

The FarmlandTrample Event is fired whenever a farmland is about to be trampled. Canceling the event will prevent the block from being trampled.

## Notizen

`event.fallDistance` contains the distance fallen before hitting the farmland.

## Event-Klasse
You will need to cast the event in the function header as this class:  
`crafttweaker.event.FarmlandTrampleEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen
FarmlandTrample Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetter
Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter      | ZenSetter | Type                                  |
| -------------- | --------- | ------------------------------------- |
| `entity`       |           | [IEntity](/Vanilla/Entities/IEntity/) |
| `fallDistance` |           | float                                 |
