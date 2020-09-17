# MutableItemStack

可变物品堆栈是一个特殊的 [IItemStack](/Vanilla/Items/IItemStack/) 对象，只能从 [ICTPlayers](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/)中检索。  
这意味着所有 [IItemStack](/Vanilla/Items/IItemStack/)的方法和 [内容](/Vanilla/Variable_Types/IIngredient/)！

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 mods.contenttweiner.MutableItemStack；`

## ZenMethods

### 数量

堆栈的数量是该堆栈中的物品数量！

| ZenMethod（ZenMethod） | 参数类型 | 描述                 |
| -------------------- | ---- | ------------------ |
| 设置计数(计数)             | 整型   | 将堆栈的计数设置为提供的 `计数`  |
| 增长(计数)               | int  | 通过提供 `计数` 来增加堆栈的计数 |
| 缩减(计数)               | 整数   | 减少所提供的 `计数`        |

### 伤害

`伤害(整数, ICTPlayer 玩家)`

参数：

- 整数型变量→ 给物品的伤害点量
- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) 播放器 → 玩家/实体损坏物品