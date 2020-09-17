# Skill_Change Tweaker

## Merkmal:

Mit dieser Funktion kannst du als Spieler eine Gruppe von Befehlen festlegen, die du auf einem Spieler ausführen möchtest, der ein Merkmal entsperren/sperrt oder ein bestimmtes Fähigkeitslevel erreicht.

## Syntax:

    Leere Beispiele:
    mods.compatskills.SkillChange.addLevelUpCommands(CTSkill Skill, Int, String... Kommandos);
    mods.compatskills.SkillChange.addUnlockableUnlockCommands(CTUnlockable unlockable, String... Kommandos);
    mods.compatskills.SkillChange.addUnlockableLockCommands(CTUnlockable unlockable, String... Kommandos);
    
    mods.compatskills.SkillChange.addLevelUpCommands(<skill:reskillable:attack>, 5, "/give @e minecraft:stone 1");
    mods.compatskills.SkillChange. ddUnlockableUnlockCommands(<trait:reskillable:battle_spirit>, "/give @e minecraft:stone 1", "/give @e minecraft:stone 2");
    mods.compatskills.SkillChange. ddUnlockableLockCommands(<trait:reskillable:battle_spirit>, "/give @e minecraft:stone 1", "/give @e minecraft:stone 2", "/give @e minecraft:stone 3");