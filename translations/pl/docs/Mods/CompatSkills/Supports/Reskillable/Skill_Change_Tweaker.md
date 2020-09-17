# Umiejętność_Zmień słabszy

## Funkcja:

Ta funkcja pozwoli ci jako gracz ustawić grupę poleceń, które chcesz uruchomić po odblokowaniu/zablokowaniu cechy lub osiągnięciu określonego poziomu umiejętności.

## Składnia:

    Puste przykłady:
    mods.compatskills.SkillChange.addLevelUpCommands(CTSkill, int level, String... komendy);
    mods.compatskills.SkillChange.addUnlockableUnlockUnCommands(Odblokowywalne Ciągi... komendy);
    mods.compatskills.SkillChange.addUnlockableLockCommands(CTunlockable unlockable, String... komendy);
    
    mods.compatskills.SkillChange.addLevelUpCommands(<skill:reskillable:attack>, 5, "/give @e minecraft:stone 1");
    mods.compatskills.SkillChange. ddUnlockableUnlockCommands(<trait:reskillable:battle_spirit>, "/give @e minecraft:stone 1", "/give @e minecraft:stone 2");
    mods.compatskills.SkillChange. ddUnlockableLockCommands(<trait:reskillable:battle_spirit>, "/give @e minecraft:stone 1", "/give @e minecraft:stone 2", "/give @e minecraft:stone 3");