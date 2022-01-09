# MCAdvancementEvent

This event is fired every time the player earns an advancement. This happens after the advancement has already been earned so it can not be prevented.

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.MCAdvancementEvent;
```


## Extending MCPlayerEvent

MCAdvancementEvent extends [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent). That means all methods available in [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent) are also available in MCAdvancementEvent

## 使用方式

:::group{name=getId}

Gets the ID of the advancement being unlocked.

Returns: The ID of the advancement being unlocked by the player.  
Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
// MCAdvancementEvent.getId() as MCResourceLocation

event.getId();
```

:::


## 参数

| 名称 | 类型                                                         | 可获得  | 可设置   | 描述                                             |
| -- | ---------------------------------------------------------- | ---- | ----- | ---------------------------------------------- |
| id | [MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true | false | Gets the ID of the advancement being unlocked. |

