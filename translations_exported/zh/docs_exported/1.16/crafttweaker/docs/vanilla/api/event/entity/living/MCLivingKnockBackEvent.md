# MCLivingKnockBackEvent



The event is cancelable.

If the event is canceled, the entity is not knocked back.

The event does not have a result.



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.MCLivingKnockBackEvent;
```


## Extending MCLivingEvent

MCLivingKnockBackEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingKnockBackEvent

## 参数

| 名称             | 类型  | 可获得  | 可设置   | 描述                      |
| -------------- | --- | ---- | ----- | ----------------------- |
| originRatioX   | 双精度 | true | false | No Description Provided |
| originRatioZ   | 双精度 | true | false | No Description Provided |
| originStrength | 浮点数 | true | false | No Description Provided |
| ratioX         | 双精度 | true | true  | No Description Provided |
| ratioZ         | 双精度 | true | true  | No Description Provided |
| strength       | 浮点数 | true | true  | No Description Provided |

