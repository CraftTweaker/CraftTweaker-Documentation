# MCEntityTravelToDimensionEvent

The event is fired before an Entity travels to a dimension.
 <br>
 `dimension` getter is the id of the dimension the entity is traveling to.

The event is cancelable.

If the event is canceled, the Entity will not travel to the dimension.

The event does not have a result.



## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.MCEntityTravelToDimensionEvent;
```


## Extending MCEntityEvent

MCEntityTravelToDimensionEvent extends [MCEntityEvent](/vanilla/api/event/entity/MCEntityEvent). That means all methods available in [MCEntityEvent](/vanilla/api/event/entity/MCEntityEvent) are also available in MCEntityTravelToDimensionEvent

## 参数

| 名称        | 类型                                                         | 可获得  | 可设置   |
| --------- | ---------------------------------------------------------- | ---- | ----- |
| dimension | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true | false |

