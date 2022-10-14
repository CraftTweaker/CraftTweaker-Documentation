# AnvilUpdateEvent

AnvilUpdateEvent is fired when the inputs (either input stack, or the name) of an anvil are changed. You can listen to this event to add custom anvil recipes.

The event is cancelable.

If the event is canceled, vanilla behavior will not run, and the output will be set to `<item:minecraft:air>`.

If the event is not canceled, but the output is not empty, it will set the output and not run vanilla behavior.

The event does not have a result.



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.AnvilUpdateEvent;
```


## Extending Event

AnvilUpdateEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in AnvilUpdateEvent

## 参数

| 名称         | 类型                                               | 可获得  | 可设置   | 描述                      |
| ---------- | ------------------------------------------------ | ---- | ----- | ----------------------- |
| left       | [IItemstack](/vanilla/api/item/IItemStack)       | true | false | No Description Provided |
| levelCost  | int                                              | true | true  | No Description Provided |
| 材料成本       | int                                              | true | true  | No Description Provided |
| name（名称）   | **invalid**                                      | true | false | No Description Provided |
| output（输出） | [IItemstack](/vanilla/api/item/IItemStack)       | true | true  | No Description Provided |
| player     | [Player](/vanilla/api/entity/type/player/Player) | true | false | No Description Provided |
| right      | [IItemstack](/vanilla/api/item/IItemStack)       | true | false | No Description Provided |

