# FarmlandTrampleEvent

The FarmlandTrample Event is fired whenever a farmland is about to be trampled. Canceling the event will prevent the block from being trampled.

## Notes

`event.fallDistance` contains the distance fallen before hitting the farmland.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.FarmlandTrampleEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
FarmlandTrample Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [IBlockEvent](/Vanilla/Events/Events/IBlockEvent/)

## ZenGetters
다음 정보들은 이벤트를 통해서 얻을 수 있습니다.

| ZenGetter      | ZenSetter | Type                                  |
| -------------- | --------- | ------------------------------------- |
| `entity`       |           | [IEntity](/Vanilla/Entities/IEntity/) |
| `fallDistance` |           | float                                 |
