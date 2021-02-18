# PotionBrewPre

This event is fired directly before vanilla brewing takes place, and, if **cancelled**, will prevent brewing from taking place. If cancelled but the items are modified, then the [PotionBrewPostEvent](/Vanilla/Events/Events/PotionBrewPost/) will be automatically fired. This allows for a simulacrum of "modded" brewing.

**Note**: this event is fired right as the calculations for the recipe are taking place, when the "timer" reaches "maximum progress".

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PotionBrewPreEvent` You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PotionBrewPre Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPotionBrewEvent](/Vanilla/Events/Events/IPotionBrewEvent/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
