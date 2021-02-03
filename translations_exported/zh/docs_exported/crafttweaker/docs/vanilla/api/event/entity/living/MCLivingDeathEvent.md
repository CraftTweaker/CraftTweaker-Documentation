# MCLivingDeathEvent

This event is fired just before an entity is killed. This allows you to run additional logic or prevent the death.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingDeathEvent;
```


## Extending MCLivingEvent

MCLivingDeathEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingDeathEvent

## 方法

### getSource

Gets the source of the damage that killed the entity.

Return Type: [DamageSource](/vanilla/api/util/DamageSource)

```zenscript
MCLivingDeathEvent.getSource() as DamageSource
event.getSource();
```


## 参数

| 名称 | 类型                                             | 可获得  | 可设置   |
| -- | ---------------------------------------------- | ---- | ----- |
| 来源 | [DamageSource](/vanilla/api/util/DamageSource) | true | false |

