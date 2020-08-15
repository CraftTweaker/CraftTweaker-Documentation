# LivingDestroyBlock

This event is fired whenever a Wither or Ender Dragon attempts to destroy blocks, or when a zombie attempts to break a door. This event is **cancelable**, and if canceled, the block will not be broken.

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.LivingDestroyBlockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
LivingDestroyBlock Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
以下信息可以在事件中检索/设置：

| ZenGetter | ZenSetter | 类型                                          |
| --------- | --------- | ------------------------------------------- |
| `state`   |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |

