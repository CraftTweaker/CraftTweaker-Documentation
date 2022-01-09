# PlayerSleepInBed

当玩家睡觉时，玩家会被发射。 此事件可以通过设置 `结果` 来控制玩家是否能够睡觉。

## Event Class
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerSleepInBedEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.


## Event interface extensions
PlayerSleepInBed Events implement the following interfaces and are able to call all of their methods/getters/setters as well:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)
- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)


## 结果类型
* NOT_POSSIBLE_HERE
* NOT_POSSIBLE_NOW
* NOT_SAFE
* 好的
* OTHER_PROBLEM
* TOO_FOR_AWAY


## ZenGetters
The following information can be retrieved from the event:

| ZenGetter | 返回值类型                                |
| --------- | ------------------------------------ |
| `x`       | int                                  |
| `y`       | int                                  |
| `z`       | int                                  |
| `player`  | [IPlayer](/Vanilla/Players/IPlayer/) |
| `result`  | 字符串 (上面可能的值)                         |

## ZenSetters
以下可以在事件中设置：

| ZenSetter | 参数类型         |
| --------- | ------------ |
| `result`  | 字符串 (上面可能的值) |

