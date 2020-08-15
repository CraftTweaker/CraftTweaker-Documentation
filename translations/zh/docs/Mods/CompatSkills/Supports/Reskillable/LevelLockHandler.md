# Level-Lock 支持

## PSA：

此功能可用于取消可重置的升级事件。 一些调用levelUp(); 方法会直接绕过锁! 这包括模组，如Scavenge：可重置和共用的模组！

## Level-Lock 支持

Level-Lock Support 是一个令人厌倦的功能，来自Skysom 一天在 DM 中做的笑话。 这个功能完全是为了那些有足够的伤情来实现它！ 这个关卡将升级到设定的关卡而不是“从”这个关卡的关卡！

CTSkill = [技能约束处理器](/Mods/CompatSkills/Supports/Reskillable/BracketHandlers/)

### 语法：

    // 空白示例：
    mods.compatskills.Skillocks.addLevelLock(CTTS技能, int level, String... 默认要求;
    
    // 测试示例:
    mods.compatskill.Locks.addLevelLock(<skill:reskillable:agility>, 11, "reskillable:collection", 3, "adv|minecraft:harmry/plant_seed");