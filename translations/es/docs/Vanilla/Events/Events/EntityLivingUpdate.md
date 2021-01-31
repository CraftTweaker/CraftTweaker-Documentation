# EntityLivingUpdate

EntityLivingUpdateEvent is fired when an Entity is updated. If this event is canceled, the Entity does not update.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EntityLivingUpdateEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
EntityLivingUpdateEvent implements the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
