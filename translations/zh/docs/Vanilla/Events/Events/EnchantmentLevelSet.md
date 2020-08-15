# 附魔等级设置事件

当附魔表生成三个潜在附魔表中的附魔级别时，将触发附魔等级集活动。

## 注

`event.enchantRow` 列出附魔台的行 (1-3) ，而 `事件的原定级别` 表示该行的原始水平。 `event.power` 是附魔塔周围书架的累积值，而 `event.items` 是正在附魔的项目。

`event.level` 可以任意修改为 0 & 30之间的值。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.EnchantmentLevelSetEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
附属级别设置事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

| ZenGetter | ZenSetter | 返回值类型                                    |
| --------- | --------- | ---------------------------------------- |
| `世界`      |           | [IWorld](/Vanilla/World/IWorld/)         |
| `附魔行`     |           | int                                      |
| `功率`      |           | 整数                                       |
| `项目`      |           | [IItemStack](/Vanilla/Items/IItemStack/) |
| `原始级别`    |           | 整数                                       |
| `关卡`      | `关卡`      | 整数                                       |
