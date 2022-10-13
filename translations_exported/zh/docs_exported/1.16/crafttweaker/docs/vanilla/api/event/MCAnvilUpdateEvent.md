# MCAnvilUpdateEvent

AnvilUpdateEvent is fired when the inputs (either input stack, or the name) of an anvil are changed. You can listen to this event to add custom anvil recipes.

The event is cancelable.

If the event is canceled, vanilla behavior will not run, and the output will be set to `<item:minecraft:air>`.

If the event is not canceled, but the output is not empty, it will set the output and not run vanilla behavior.

The event does not have a result.



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.MCAnvilUpdateEvent;
```


## Extending MCEvent

MCAnvilUpdateEvent extends [MCEvent](/vanilla/api/event/MCEvent). That means all methods available in [MCEvent](/vanilla/api/event/MCEvent) are also available in MCAnvilUpdateEvent

## 参数

| 名称         | 类型                                                    | 可获得  | 可设置   | 描述                      |
| ---------- | ----------------------------------------------------- | ---- | ----- | ----------------------- |
| left       | [IItemstack](/vanilla/api/items/IItemStack)           | true | false | No Description Provided |
| levelCost  | int                                                   | true | true  | No Description Provided |
| 材料成本       | int                                                   | true | true  | No Description Provided |
| name（名称）   | string?                                               | true | false | No Description Provided |
| output（输出） | [IItemstack](/vanilla/api/items/IItemStack)           | true | true  | No Description Provided |
| player     | [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)? | true | false | No Description Provided |
| right      | [IItemstack](/vanilla/api/items/IItemStack)           | true | false | No Description Provided |

