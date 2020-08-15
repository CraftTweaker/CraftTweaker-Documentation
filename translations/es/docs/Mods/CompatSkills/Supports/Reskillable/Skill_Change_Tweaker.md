# Habilidad_Cambiar ajuste

## Característica:

Esta función te permitirá como jugador establecer un grupo de comandos que quieres ejecutar sobre un jugador desbloqueando/bloqueando un rasgo o alcanzando un nivel de habilidad específico.

## Sintaxis:

    Ejemplos en blanco:
    mods.compatskills.SkillChange.addLevelUpCommands(CTSkill Skill, int level, String... comandos);
    mods.compatskills.SkillChange.addUnlockableUnlockCommands(CTUnlockable unlockable, String... comandos);
    mods.compatskills.SkillChange.addUnlockableLockCommands(CTUnlockable unlockable, String... comandos);
    
    mods.compatskills.SkillChange.addLevelUpCommands(<skill:reskillable:attack>, 5, "/give @e minecraft:stone 1");
    mods.compatskillChange. ddUnlockableUnlockCommands(<trait:reskillable:battle_spirit>, "/give @e minecraft:stone 1", "/give @e minecraft:stone 2");
    mods.compatskillChange. ddUnlockableLockCommands(<trait:reskillable:battle_spirit>, "/give @e minecraft:stone 1", "/give @e minecraft:stone 2", "/give @e minecraft:stone 3");