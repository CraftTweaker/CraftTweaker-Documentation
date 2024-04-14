# PlayerVisibility 

This event is fired to determine the visibility of a player, i.e., whether or not they are close enough to be noticed by an attacker. The result of this event is used to calculate (with modifiers from Vanilla Minecraft for sneaking, etc) the range a player can get to a creature before that creature sees them.

While this can be used to increase the visibility range (if it were decreased by Minecraft or another mod), it cannot be increased above its maximum value (the standard target distance).

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerVisibilityEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerVisibilityEvent Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters/ZenSetters
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetters                       | Type              |
|-----------------|----------------------------------|-------------------|
| `modifier`      |                                  | double            |

## ZenMethods
`event.modifyVisibility(double value)` -> This value cannot be directly set. 
Calling `modifyVisibility` with a double value will replace the modifier with the result of `modifier * double value`.



## ZenGetters/ZenSetters/ZenMethods from extensions
The following information can be retrieved/set during the event:

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `player`        |                 | [IPlayer](/Vanilla/Players/IPlayer/)              |


## From extension of extension

| ZenGetter       | ZenSetter       | Type                                              |
|-----------------|-----------------|---------------------------------------------------|
| `entityLivingBase`  |             | [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/)   |


