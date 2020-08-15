# PlayerItemPickup

The PlayerItemPickup Event is fired after a player has interacted with an entity item and an item or amount of an item has been picked up. This event takes place after [PlayerPickupItem](/Vanilla/Events/Events/PlayerPickupItem/) has been fired.

## Klasa wydarzenia
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerItemPickupEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Rozszerzenia interfejsu zdarzenia
PlayerItemPickup Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [Wydarzenie IPlayer](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
Z wydarzenia można uzyskać następujące informacje:

| ZenGetter        | Typ zwrotu                                    |
| ---------------- | --------------------------------------------- |
| `stackCopy`      | [IItemStack](/Vanilla/Items/IItemStack/)      |
| `originalEntity` | [IEntityItem](/Vanilla/Entities/IEntityItem/) |

## Uwagi

`stackCopy` is a copy of the item contained inside of the original entity item, representing what was picked up and placed into the player's inventory. `originalEntity` is the item entity with any remaining amount of the item stack (if the player didn't pick up the full amount).
