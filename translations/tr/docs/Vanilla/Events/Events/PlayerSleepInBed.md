# PlayerSleepInBed

The PlayerSleepInBed Event is fired whenever a player sleeps. This event can control whether the player is able to sleep by setting `result`.

## Event Class

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSleepInBedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions

PlayerSleepInBed Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

* [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
* [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## Result Types

* NOT_POSSIBLE_HERE 
* NOT_POSSIBLE_NOW 
* NOT_SAFE 
* OK 
* OTHER_PROBLEM 
* TOO_FAR_AWAY 

## ZenGetters

The following information can be retrieved from the event:

| ZenGetter | Return Type                          |
| --------- | ------------------------------------ |
| `x`       | int                                  |
| `y`       | int                                  |
| `z`       | int                                  |
| `player`  | [IPlayer](/Vanilla/Players/IPlayer/) |
| `result`  | string (possible values are above)   |

## ZenSetters

The following can be set in the event:

| ZenSetter | Parameter Type                     |
| --------- | ---------------------------------- |
| `result`  | string (possible values are above) |