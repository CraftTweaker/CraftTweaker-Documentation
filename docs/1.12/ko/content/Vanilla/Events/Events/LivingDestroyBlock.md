# LivingDestroyBlock

This event is fired whenever a Wither or Ender Dragon attempts to destroy blocks, or when a zombie attempts to break a door. This event is **cancelable**, and if canceled, the block will not be broken.

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.LivingDestroyBlockEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Event interface extensions
LivingDestroyBlock Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)
- [IEventCancelable](/Vanilla/Events/Events/IEventCancelable/)
- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)


## ZenGetters/ZenSetters
The following information can be retrieved/set during the event:

| ZenGetter | ZenSetter | Type                                        |
| --------- | --------- | ------------------------------------------- |
| `state`   |           | [IBlockState](/Vanilla/Blocks/IBlockState/) |

