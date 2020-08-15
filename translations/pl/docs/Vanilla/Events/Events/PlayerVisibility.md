# PlayerVisibility

This event is fired to determine the visibility of a player, i.e., whether or not they are close enough to be noticed by an attacker. The result of this event is used to calculate (with modifiers from Vanilla Minecraft for sneaking, etc) the range a player can get to a creature before that creature sees them.

While this can be used to increase the visibility range (if it were decreased by Minecraft or another mod), it cannot be increased above its maximum value (the standard target distance).

## Klasa wydarzenia
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerVisibilityEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Rozszerzenia interfejsu zdarzenia
PlayerVisibilityEvent Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters/ZenSetters
Następujące informacje mogą być pobierane/ustawione podczas wydarzenia:

| ZenGetter    | ZenSetter          | Typ       |
| ------------ | ------------------ | --------- |
| `visibility` |                    | podwójne  |
|              | `modifyVisibility` | See note. |

## Note

This value cannot be directly set. Calling `modifyVisibility` with a double value will replace the modifier with the result of `modifiy * double value`.
