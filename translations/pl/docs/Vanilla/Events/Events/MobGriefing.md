# MobGriefing

This event is fired whenever potential mob griefing is about to occur. It has a **result** which determines whether the default behaviour occurs or not:

- **allow**: the griefing is allowed
- **deny**: the griefing is prevented
- **default**: the griefing occurs according to Vanilla logic.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.MobGriefingEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
MobGriefing Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
