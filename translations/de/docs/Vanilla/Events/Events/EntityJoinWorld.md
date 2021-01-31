# EntityJoinWorld

EntityJoinWorldEvent is fired when an Entity joins the world. If this event is canceled, the Entity is not added to the world.

## Event-Klasse
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityJoinWorldEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Erweiterte Event-Schnittellen
EntityJoinWorld Event implements the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEntityEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetter/ZenSetter
The following information can be retrieved/set during the event:

| ZenGetter | Rückgabetyp                      |
| --------- | -------------------------------- |
| `world`   | [IWorld](/Vanilla/World/IWorld/) |
