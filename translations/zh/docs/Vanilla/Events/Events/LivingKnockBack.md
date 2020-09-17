# LivingKnockback

一旦一个实体被击退，这个事件就会被发射。 事件是 **可取消** ，并且这样做会阻止实体被击退。 或者，除了X和Z比率外，还可以调整击退的强度。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.LivingKnockBackEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
LivingKnockBackEvents 实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
以下信息可以在事件中检索/设置：

| ZenGetter | ZenSetter | 类型                                    |
| --------- | --------- | ------------------------------------- |
| `攻击者`     | `攻击者`     | [IEntity](/Vanilla/Entities/IEntity/) |
| `原始攻击者`   |           | [IEntity](/Vanilla/Entities/IEntity/) |
| `强度`      | `强度`      | float                                 |
| `原始强度`    |           | 浮点数                                   |
| `比率`      | `比率`      | 双精度                                   |
| `比率`      | `比率`      | 双精度                                   |
| `原始比率`    |           | 双精度                                   |
| `原始比率`    |           | 双精度                                   |

## 注

当事件到达时， `个攻击者` `实力`, 或各种 `比率`s已被修改。 您可以在 `原始*` 变量中找到这些值。
