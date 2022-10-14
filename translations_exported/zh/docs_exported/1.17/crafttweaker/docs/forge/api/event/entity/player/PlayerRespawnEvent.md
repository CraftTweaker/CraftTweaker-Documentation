# PlayerRespawnEvent

This Event is fired whenever a player respawns due to dying, or due to using the end portal.

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.PlayerRespawnEvent;
```


## Extending PlayerEvent

PlayerRespawnEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in PlayerRespawnEvent

## 使用方式

:::group{name=isEndConquered}

Was this event caused by the player entering the portal in the end?

Return Type: boolean

```zenscript
// PlayerRespawnEvent.isEndConquered() as boolean

myPlayerRespawnEvent.isEndConquered();
```

:::


## 参数

| 名称             | 类型  | 可获得  | 可设置   | 描述                                                                  |
| -------------- | --- | ---- | ----- | ------------------------------------------------------------------- |
| isEndConquered | 布尔值 | true | false | Was this event caused by the player entering the portal in the end? |

