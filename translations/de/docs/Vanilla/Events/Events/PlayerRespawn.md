# PlayerRespawn

The PlayerRespawn Event is fired whenever a player respawns.

## Event-Klasse

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerRespawnEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen

PlayerRespawn Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetter

Die folgenden Informationen lassen sich von diesem Event (Ereignis) abrufen:

| ZenGetter        | Rückgabetyp                                               |
| ---------------- | --------------------------------------------------------- |
| `player`         | [IPlayer](/Vanilla/Players/IPlayer/)                      |
| `isEndConquered` | bool (states if the respawn is because of the end portal) |