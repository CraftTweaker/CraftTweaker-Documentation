# 睡眠定位检查

当检查一个睡眠玩家是否可以继续在当前位置睡觉时，此事件将被触发。 如果有 **个结果** 决定了该动作。

结果：
- **默认**, 返回在 Bed Tile entity 中发现的默认Vanilla 响应
- **允许**, 允许玩家继续睡觉，无论是否显示
- **拒绝** 是具体 ***在这个实例中忽略了*** 而没有做任何事情。

因此，此事件允许您让玩家睡觉，但它不允许您绕过默认的床逻辑。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.SleepingLocationCheck`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
SleepingLocationCheck 事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)
- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
