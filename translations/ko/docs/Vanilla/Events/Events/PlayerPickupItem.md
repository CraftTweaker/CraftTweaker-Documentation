# PlayerPickupItem

The PlayerPickupItem Event is fired whenever a player interacts with an Entity.

## Event Class

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerPickupItemEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions

PlayerPickupItem Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters

다음 정보들은 이벤트를 통해서 얻을 수 있습니다.

| ZenGetter | 반환 타입                                         |
| --------- | --------------------------------------------- |
| `item`    | [IEntityItem](/Vanilla/Entities/IEntityItem/) |
| `player`  | [IPlayer](/Vanilla/Players/IPlayer/)          |