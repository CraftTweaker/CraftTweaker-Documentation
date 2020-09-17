# 阶段锁定

## 阶段锁定

GameStages支持的这一部分允许您锁定一个特定的阶段，以满足一组要求。 这意味着，如果一个玩家在解锁舞台时不符合为舞台设置的要求。 它将取消解锁并向聊天室发送错误消息。 这条聊天消息不是全服务器的，而是针对玩家的。

### 语法：

    // 空白示例：
    mods.compatskills.GameStageLocks.addGameStageLock(String gamestage, String... 默认要求)；
    
    // 测试示例：
    mods.compatskilless.GameStageLocks.addGameStageLock("i", "reskillable:agility|10")；
    mods.compatskills.GameStageLocks.addGameStageLock("lik", "reskillable:agility|11")；
    mods.compatskills.GameStageLock("banana", "reskillable:ility|12")；
    mods.compatskillats.GameStageks.addGameStageLocks.GameStageks.("pancakes", "reskillable:agility|13")；