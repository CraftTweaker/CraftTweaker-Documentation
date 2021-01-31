# EntityJoinWorld

EntityJoinWorldEvent is fired when an Entity joins the world. If this event is canceled, the Entity is not added to the world.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityJoinWorldEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
EntityJoinWorld Event implements the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEntityEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)


## ZenGetters/ZenSetters
The following information can be retrieved/set during the event:

| ZenGetter | 返回值类型                            |
| --------- | -------------------------------- |
| `world`   | [IWorld](/Vanilla/World/IWorld/) |
