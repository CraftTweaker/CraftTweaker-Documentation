# 技能变换器

## 功能：

此功能将允许您作为玩家设置一组命令你想要运行在玩家解锁/锁定特性或达到特定的技能等级。

## 语法：

    空白示例：
    mods.compatskills.SkillChange.addLevelUpCommands(Ctask skill技能, int level, String... 命令);
    mods.compatskills.SkillChange.addUnlockableUnlockCommands(CTC 解锁可解锁，字符串... 命令);
    mods.compatskills.SkillChange.addUnlockableLockCommands(Ctrus 解锁可解锁，字符串... 命令);
    
    mods.compatskills.Skillange.addLevelUpCommands(<skill:reskillable:attack>, 5, "/give @e minecraft:stone 1");
    mods.compatskills.Skills.Skiller. ddUnlockableUnlockCommands(<trait:reskillable:battle_spirit>, "/given @e minecraft:stone 1", "/given @e minecraft:stone 2");
    mods.compatskills.Skills Change. ddUnlockableLockCommands(<trait:reskillable:battle_spirit>, "/given @e minecraft:stone 1", "/given @e minecraft:stone 2", "/given @e minecraft:stone 3");