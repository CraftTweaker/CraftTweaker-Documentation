# SleepingTimeCheck

This event is fired when checking if a sleeping player can continue to sleep at a specified time. If has a **result** which determines the action.

Result:
- **Default**, causes the Vanilla logic of `World::isDaytime` to be consulted.
- **Allow**, allows the player to continue sleeping regardless
- **Deny** is specifically ***ignored*** in this instance and does nothing.

Thus, this event allows you to keep the player sleeping, but it does not allow you to specifically stop them from sleeping.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.SleepingTimeCheck`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
SleepingTimeCheck Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
