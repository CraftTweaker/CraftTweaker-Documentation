# WorldTick

The WorldTick Event is fired each tick for each world on both client and server.

## Event-Klasse
You will need to cast the event in the function header as this class:  
`crafttweaker.event.WorldTickEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen
WorldTick Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ITickEvent](/Vanilla/Events/Events/ITickEvent/)

## ZenGetter
The following additional information can be retrieved from the event:

| ZenGetter | Rückgabetyp                      |
| --------- | -------------------------------- |
| `world`   | [IWorld](/Vanilla/World/IWorld/) |
