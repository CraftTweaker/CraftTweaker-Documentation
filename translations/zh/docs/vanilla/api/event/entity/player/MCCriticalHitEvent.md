# MCCriticalHit事件

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.event.entity.player.MCCriticalHitEvent
```

## Constructor #构造函数
```zenscript
新 craftminstrer.api.event.entity.player.MCCriticalHitEvent(处理程序作为函数。消费者<crafttweaker.api.event.entity.player.MCCriticalHitEvent>)；
```
| 参数      | 类型                                                                                                                       | 描述                      |
| ------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| handler | Consumer<[craftmiliter.api.event.entity.player.MCCriticalHitEvent](/vanilla/api/event/entity/player/MCCriticalHitEvent)> | No description provided |



## 方法
### getDamageModifier

命中的伤害修饰符。<br> 默认值为 1.5F，普通命中值为 1F。

返回浮点数

```zenscript
myMCCriticalHitEvent.getDamageModifier();
```

### getEntityPlayer

返回 [craftbinstruer.api.entity.player.MCPlayerEnty](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getEntityPlayer();
```

### getOldDamageModifier

命中的伤害修饰器会使任何更改发生。<br> 对于马戏团命名是1.5F，对于普通命中是1F。

返回浮点数

```zenscript
myMCCriticalHitEvent.getOldDamageModifier();
```

### getPlayer

返回： `玩家`

返回 [craftbinstruer.api.entity.player.MCPlayerEnty](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getPlayer();
```

### 突然结果

确定此事件是否需要一个重要的结果值。 注意： HasResult 注解中的事件将会自动添加此方法以返回 true。

返回为布尔值

```zenscript
a. myMCCriticalHitEvent.hasResult()；
```

### 可取消

确定此函数是否可以取消。 返回： `如果应该允许访问 setcanced
 注意：
 取消批注事件将自动添加此方法以返回 true。`

返回为布尔值

```zenscript
myMCCriticalHitEvent.isCancelable();
```

### 已取消

确定此事件是否被取消并应停止执行。 返回： `当前取消的状态`

返回为布尔值

```zenscript
a. myMCCriticalHitEvent.iscanceled();
```

### isVanillaCritical

返回真，如果这次攻击是由原版批评的

返回为布尔值

```zenscript
a. myMCCriticalHitEvent.isVanillaCritical()；
```

### 已取消

```zenscript
myMCCriticalHitEvent.setcanceled(cancel as boolean)；
```

| 参数 | 类型      | 描述                      |
| -- | ------- | ----------------------- |
| 取消 | boolean | No description provided |


### setDamageModifier

这为命中的伤害设置了乘数。 如果你将其设置为 0，则粒子仍然生成，但不会造成伤害。

```zenscript
myMCCriticalHitEvent.setDamageModifier(mod as float)；
```

| 参数  | 类型  | 描述                      |
| --- | --- | ----------------------- |
| mod | 浮点数 | No description provided |



