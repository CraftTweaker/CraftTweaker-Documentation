# 玩家可见性

触发此事件是为了确定玩家的可见度，即他们是否接近到攻击者的注意力。 此事件的结果用于计算 (来自原版Minecraft 的修改者用于潜入, 等玩家可以在生物看到它们之前到达生物的范围。

虽然这可以用来提高可见度范围(如果它被Minecraft或其他模式降低), 它不能超过其最大值（标准目标距离）。

## 事件类
You will need to cast the event in the function header as this class:  
`crafttweaker.event.PlayerVisibilityEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## 事件界面扩展
PlayerVisityEvent事件实现了以下接口，并且能够调用他们所有的方法/getter/setter：

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)


## ZenGetters/ZenSetters
以下信息可以在事件中检索/设置：

| ZenGetter | ZenSetter | 类型  |
| --------- | --------- | --- |
| `可见性`     |           | 双精度 |
|           | `修改可见性`   | 见注。 |

## 说明

此值不能直接设置。 调用 `修改可见性` 双值将用 `修改结果* 替换修改者`。
