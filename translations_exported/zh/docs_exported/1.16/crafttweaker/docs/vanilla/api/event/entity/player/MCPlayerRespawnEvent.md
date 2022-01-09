# MCPlayerRespawnEvent

This Event is fired whenever a player respawns due to dying, or due to using the end portal.

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.MCPlayerRespawnEvent;
```


## Extending MCPlayerEvent

MCPlayerRespawnEvent extends [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent). That means all methods available in [MCPlayerEvent](/vanilla/api/event/entity/player/MCPlayerEvent) are also available in MCPlayerRespawnEvent

## 使用方式

:::group{name=isEndConquered}

Was this event caused by the player entering the portal in the end?

Return Type: boolean

```zenscript
// MCPlayerRespawnEvent.isEndConquered() as boolean

myMCPlayerRespawnEvent.isEndConquered();
```

:::


## 参数

| 名称           | 类型  | 可获得  | 可设置   | 描述                                                                  |
| ------------ | --- | ---- | ----- | ------------------------------------------------------------------- |
| endConquered | 布尔值 | true | false | Was this event caused by the player entering the portal in the end? |

