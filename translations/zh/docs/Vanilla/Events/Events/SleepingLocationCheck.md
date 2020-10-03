# SleepingLocationCheck

This event is fired when checking if a sleeping player can continue to sleep in the current location. If has a **result** which determines the action.

Result:
- **Default**, returns the default Vanilla response as found in the Bed tile entity
- **Allow**, allows the player to continue sleeping regardless
- **Deny** is specifically ***ignored*** in this instance and does nothing.

Thus, this event allows you to keep the player sleeping, but it does not allow you to bypass the default bed logic.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.SleepingLocationCheck`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
SleepingLocationCheck Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
