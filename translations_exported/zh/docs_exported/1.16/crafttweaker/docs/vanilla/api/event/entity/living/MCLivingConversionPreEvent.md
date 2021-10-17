# MCLivingConversionPreEvent

The event is triggered when an entity is trying to replace itself with another entity. This event may trigger every tick even if it was cancelled last tick for entities like Zombies and Hoglins.

The event is cancelable.

If the event is canceled, the replacement will not occur

The event does not have a result.



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.MCLivingConversionPreEvent;
```


## 使用方式

:::group{name=setConversionTimer}

Sets the conversion timer, by changing this it prevents the event being triggered every tick Do note the timer of some of the entities are increments, but some of them are decrements Not every conversion is applicable for this

Return Type: void

```zenscript
MCLivingConversionPreEvent.setConversionTimer(ticks as int) as void
```

| 参数    | 类型  | 描述                      |
| ----- | --- | ----------------------- |
| ticks | int | No Description Provided |


:::


## 参数

| 名称      | 类型                                                         | 可获得  | 可设置   | 描述                      |
| ------- | ---------------------------------------------------------- | ---- | ----- | ----------------------- |
| outcome | [MCEntityType #MC实体类型](/vanilla/api/entities/MCEntityType) | true | false | No Description Provided |

