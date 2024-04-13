# CriticalHitEvent

The CriticalHit Event is fired whenever a player attacks another creature. It has a **result** which determines whether or not default crit behaviour occurs:

- **allow**: the attack is forced to be a critical
- **deny**: the attack is prevented from being a critical
- **default**: the attack uses default Vanilla behaviour to determine if it's a crit.

You can also adjust the damage modifier for the critical hit.

## Notes

`event.oldDamageModifier` contains the original damage modifier of the event, while `event.isVanillaCrit` is a boolean value that determines whether or not this is actually already a critical hit.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.CriticalHitEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
CriticalHit Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters/ZenSetters
The following information can be retrieved from the event:

| ZenGetter           | ZenSetter        | Return Type                                                        |
|---------------------|------------------|--------------------------------------------------------------------|
| `target`            |                  | [IEntity](/Vanilla/Entities/IEntity/)                              |
| `oldDamageModifier` |                  | float                                                              |
| `damageModifier`    | `damageModifier` | float                                                              |
| `isVanillaCrit`     |                  | boolean                                                            |

## ZenMethods

- `event.deny()` sets the result to deny.
- `event.allow()` sets the result to allow.
- `event.default()` sets the result to default.

## ZenGetters/ZenSetters/ZenMethodes from extensions

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `player`        |                 | [IBlockPos](/Vanilla/Player/IPlayer/)             |
