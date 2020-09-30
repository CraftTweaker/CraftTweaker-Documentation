# PotionBrewPost

This event is fired immediately after a potion has been "brewed" by the brewing stand tile entity, when the output items have already been replaced. If the [PotionBrewPreEvent](/Vanilla/Events/Events/PotionBrewPre/) has been cancelled but the itemstacks within the brewing stand have been modified, this event will also be fired.

If the pre-event is cancelled without modifying itemstacks, this event will **not** be fired.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PotionBrewPostEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PotionBrewPost Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPotionBrewEvent](/Vanilla/Events/Events/IPotionBrewEvent/)
