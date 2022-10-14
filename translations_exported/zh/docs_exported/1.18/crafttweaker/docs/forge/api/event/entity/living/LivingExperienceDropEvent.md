# LivingExperienceDropEvent



The event is cancelable.

If the event is canceled, the experience will not drop.

The event does not have a result.



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.LivingExperienceDropEvent;
```


## Extending LivingEvent

LivingExperienceDropEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingExperienceDropEvent

## 使用方式

:::group{name=getAttackingPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// LivingExperienceDropEvent.getAttackingPlayer() as Player

myLivingExperienceDropEvent.getAttackingPlayer();
```

:::

:::group{name=getDroppedExperience}

Return Type: int

```zenscript
// LivingExperienceDropEvent.getDroppedExperience() as int

myLivingExperienceDropEvent.getDroppedExperience();
```

:::

:::group{name=getDroppedExperience}

```zenscript
LivingExperienceDropEvent.getDroppedExperience(value as int)
```

| 参数    | 类型  |
| ----- | --- |
| value | int |


:::

:::group{name=getOriginalExperiencePoints}

Return Type: int

```zenscript
// LivingExperienceDropEvent.getOriginalExperiencePoints() as int

myLivingExperienceDropEvent.getOriginalExperiencePoints();
```

:::


## 参数

| 名称                       | 类型                                               | 可获得  | 可设置   |
| ------------------------ | ------------------------------------------------ | ---- | ----- |
| attackingPlayer          | [Player](/vanilla/api/entity/type/player/Player) | true | false |
| droppedExperience        | int                                              | true | true  |
| originalExperiencePoints | int                                              | true | false |

