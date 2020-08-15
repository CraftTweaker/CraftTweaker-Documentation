# _Изменить настройки

## Свойство:

Эта функция позволит вам как игроку установить группу команд, которую вы хотите запустить при открытии или блокировании черты или достижении определенного уровня навыка.

## Синтаксис:

    Пустые примеры:
    mods.compatskills.SkillChange.addLevelUpCommands(CTSkill skill, int level, String... команд);
    mods.compatskills.SkillChange.addUnlockableUnlockCommands(CTUnlockable unlockable, String... команд);
    mods.compatskills.SkillChange.addUnlockableLockCommands(CTUnlockable unlockable, String... команд);
    
    mods.compatskills.SkillChange.addLevelUpCommands(<skill:reskillable:attack>, 5, "/give @e minecraft:stone 1");
    mods.compatskills.SkillChange. ddUnlockableUnlockCommands(<trait:reskillable:battle_spirit>, "/give @e minecraft:stone 1", "/give @e minecraft:stone 2");
    mods.compatskills.SkillChange. ddUnlockableLockCommands(<trait:reskillable:battle_spirit>, "/give @e minecraft:stone 1", "/give @e minecraft:stone 2", "/give @e minecraft:stone 3");