# Affaiblissement de la compétence

## Caractéristique:

Cette fonction vous permettra en tant que joueur de définir un groupe de commandes que vous voulez exécuter à un joueur pour déverrouiller/verrouiller un trait ou atteindre un niveau de compétence spécifique.

## Syntaxe :

    Exemples vierges :
    mods.compatskills.SkillChange.addLevelUpCommands(CTSkill, niveau d'unité, chaîne... commands);
    mods.compatskills.SkillChange.addUnlockableUnlockCommands(CTUnlockable unlockable, String... commands);
    mods.compatskills.SkillChange.addUnlockableLockCommands(CTUnlockable unlockable, String... commands);
    
    mods.compatskills.SkillChange.addLevelUpCommands(<skill:reskillable:attack>, 5, "/give @e minecraft:stone 1");
    mods.compatskills.SkillChange. ddUnlockableUnlockCommands(<trait:reskillable:battle_spirit>, "/give @e minecraft:stone 1", "/give @e minecraft:stone 2");
    mods.compatskills.SkillChange. ddUnlockableLockCommands(<trait:reskillable:battle_spirit>, "/give @e minecraft:stone 1", "/give @e minecraft:stone 2", "/give @e minecraft:stone 3");