# Abilità_Cambia Tweaker

## Caratteristica:

Questa funzione ti permetterà come giocatore di impostare un gruppo di comandi che vuoi eseguire su un giocatore sblocca/bloccando un tratto o raggiungendo un livello di abilità specifico.

## Sintassi:

    Esempi vuoti:
    mods.compatskills.SkillChange.addLevelUpCommands(CTSkill skill, int level, String... comandi);
    mods.compatskills.SkillChange.addUnlockableUnlockCommands(CTUnlockable unlockable, String... comandi);
    mods.compatskills.SkillChange.addUnlockableLockCommands(CTUnlockable unlockable, String... comandi);
    
    mods.compatskills.SkillChange.addLevelUpCommands(<skill:reskillable:attack>, 5, "/give @e minecraft:stone 1");
    mods.compatskills.SkillChange. ddUnlockableUnlockCommands(<trait:reskillable:battle_spirit>, "/give @e minecraft:stone 1", "/give @e minecraft:stone 2");
    mods.compatskills.SkillChange. ddUnlockableLockCommands(<trait:reskillable:battle_spirit>, "/give @e minecraft:stone 1", "/give @e minecraft:stone 2", "/give @e minecraft:stone 3");