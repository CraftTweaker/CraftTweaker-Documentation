# AdvancementEvent

This event is fired every time the player earns an advancement. This happens after the advancement has already been earned, so it can not be prevented.

The event is not cancelable.

The event does not have a result.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.player.AdvancementEvent;
```


## Extending PlayerEvent

AdvancementEvent extends [PlayerEvent](/forge/api/event/entity/player/PlayerEvent). That means all methods available in [PlayerEvent](/forge/api/event/entity/player/PlayerEvent) are also available in AdvancementEvent

## 使用方式

:::group{name=getAdvancement}

Gets the advancement being unlocked.

Returns: The advancement being unlocked by the player.  
Return Type: [Advancement](/vanilla/api/advancement/Advancement)

```zenscript
// AdvancementEvent.getAdvancement() as Advancement

event.getAdvancement();
```

:::


## 参数

| 名称          | 类型                                                  | 可获得  | 可设置   | 描述                                   |
| ----------- | --------------------------------------------------- | ---- | ----- | ------------------------------------ |
| advancement | [Advancement](/vanilla/api/advancement/Advancement) | true | false | Gets the advancement being unlocked. |

