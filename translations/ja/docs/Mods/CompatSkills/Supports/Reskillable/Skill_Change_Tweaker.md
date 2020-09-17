# Skill_Change Tweaker

## 機能:

この機能を使用すると、プレイヤーがトレイトのロックを解除/ロックを解除したり、特定のレベルに達する際に実行したいコマンドのグループを設定できます。

## 構文

    空白の例:
    mods.compatskills.SkillChange.addLevelUpCommands(CTSkill skill, int level, String... commands);
    mods.compatskills.SkillChange.addUnlockableUnlockCommands(CTUnlockable unlockable, String... commands);
    mods.compatskills.SkillChange.addUnlockableLockCommands(CTUnlockable unlockable, String... commands);
    
    mods.compatskills.SkillChange.addLevelUpCommands(<skill:reskillable:attack>, 5, "/give @e minecraft:stone 1");
    mods.compatskills.SkillChange.addUnlockableUnlockCommands(<trait:reskillable:battle_spirit>, "/give @e minecraft:stone 1", "/give @e minecraft:stone 2");
    mods.compatskills.SkillChange.addUnlockableLockCommands(<trait:reskillable:battle_spirit>, "/give @e minecraft:stone 1", "/give @e minecraft:stone 2", "/give @e minecraft:stone 3");