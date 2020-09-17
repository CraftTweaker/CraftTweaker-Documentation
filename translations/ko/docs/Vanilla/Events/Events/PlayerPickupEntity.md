# PlayerPickupEntity

The PlayerPickupEntity Event is fired whenever a player interacts with an Entity.

## Event Class

You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerPickupEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## ZenGetters

다음 정보들은 이벤트를 통해서 얻을 수 있습니다.

| ZenGetter   | 반환 타입                                 |
| ----------- | ------------------------------------- |
| `canceled`  | boolean                               |
| `processed` | boolean                               |
| `player`    | [IPlayer](/Vanilla/Players/IPlayer/)  |
| `entity`    | [IEntity](/Vanilla/Entities/IEntity/) |

## ZenMethods

- `event.cancel()` sets the event as cancelled.
- `event.process()` sets the event as processed.