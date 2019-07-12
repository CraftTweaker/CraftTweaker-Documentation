# PlayerDestroyItem

The PlayerDestroyItem Event is fired whenever a player destroys an item.

## Event-Klasse

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerDestroyItemEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen

PlayerDestroyItem Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter      | Rückgabetyp                              |
| -------------- | ---------------------------------------- |
| `player`       | [IPlayer](/Vanilla/Players/IPlayer/)     |
| `originalItem` | [IItemStack](/Vanilla/Items/IItemStack/) |
| `hand`         | string                                   |