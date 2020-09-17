# LivingDestroyBlock

当凋灵或末影龙试图摧毁方块时，或当僵尸试图打破门时，就会发射这个事件。 此事件是 **可取消**, 如果取消, 方块将不会被损坏。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.LivingDestroyBlockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
LivingDestrroyBlock 事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
以下信息可以在事件中检索/设置：

| ZenGetter | ZenSetter | 类型                                          |
| --------- | --------- | ------------------------------------------- |
| `state`   |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |

