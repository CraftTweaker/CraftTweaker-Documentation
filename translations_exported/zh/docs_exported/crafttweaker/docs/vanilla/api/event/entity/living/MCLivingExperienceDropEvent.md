# MCLivingExperienceDropEvent



The event is cancelable.

If the event is canceled, the experience will not drop.

The event does not have a result.



## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingExperienceDropEvent;
```


## Extending MCLivingEvent

MCLivingExperienceDropEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingExperienceDropEvent

## 参数

| 名称                       | 类型                                                           | 可获得  | 可设置   |
| ------------------------ | ------------------------------------------------------------ | ---- | ----- |
| attackingPlayer          | [MCPlayerEntity #MC玩家实体](/vanilla/api/entity/MCPlayerEntity) | true | false |
| droppedExperience        | int                                                          | true | true  |
| originalExperiencePoints | int                                                          | true | false |

