# MCLivingHurtEvent

This event is fired just before an entity is hurt. This allows you to modify the damage received, cancel the attack, or run additional effects.

The event is cancelable.

If the event is canceled, the entity is not hurt

The event does not have a result.



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.MCLivingHurtEvent;
```


## Extending MCLivingEvent

MCLivingHurtEvent extends [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent). That means all methods available in [MCLivingEvent](/vanilla/api/event/entity/MCLivingEvent) are also available in MCLivingHurtEvent

## 使用方式

:::group{name=getAmount}

Gets the amount of damage.

Returns: The amount of damage.  
Return Type: float

```zenscript
// MCLivingHurtEvent.getAmount() as float

event.getAmount();
```

:::

:::group{name=getSource}

Gets the source of the damage.

Returns: The source of the damage.  
Return Type: [DamageSource](/vanilla/api/util/DamageSource)

```zenscript
// MCLivingHurtEvent.getSource() as DamageSource

event.getSource();
```

:::

:::group{name=setAmount}

Sets the amount of damage.

Return Type: void

```zenscript
// MCLivingHurtEvent.setAmount(amount as float) as void

event.setAmount(0.5);
```

| 参数     | 类型    | 描述                    |
| ------ | ----- | --------------------- |
| amount | float | The amount of damage. |


:::


## 参数

| 名称     | 类型                                             | 可获得  | 可设置   | 描述                             |
| ------ | ---------------------------------------------- | ---- | ----- | ------------------------------ |
| amount | float                                          | true | true  | Gets the amount of damage.     |
| 来源     | [DamageSource](/vanilla/api/util/DamageSource) | true | false | Gets the source of the damage. |

