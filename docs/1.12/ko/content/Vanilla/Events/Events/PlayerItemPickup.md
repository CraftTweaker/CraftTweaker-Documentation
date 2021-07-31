# PlayerItemPickup

The PlayerItemPickup Event is fired after a player has interacted with an entity item and an item or amount of an item has been picked up. This event takes place after [PlayerPickupItem](/Vanilla/Events/Events/PlayerPickupItem/) has been fired.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerItemPickupEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
PlayerItemPickup Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters
다음 정보들은 이벤트를 통해서 얻을 수 있습니다.

| ZenGetter        | 반환 타입                                         |
| ---------------- | --------------------------------------------- |
| `stackCopy`      | [IItemStack](/Vanilla/Items/IItemStack/)      |
| `originalEntity` | [IEntityItem](/Vanilla/Entities/IEntityItem/) |

## Notes

`stackCopy` is a copy of the item contained inside of the original entity item, representing what was picked up and placed into the player's inventory. `originalEntity` is the item entity with any remaining amount of the item stack (if the player didn't pick up the full amount).
