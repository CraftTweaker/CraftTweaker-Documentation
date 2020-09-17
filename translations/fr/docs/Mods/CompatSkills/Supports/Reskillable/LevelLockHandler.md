# Support de verrouillage par niveau

## PSA :

Cette fonctionnalité fonctionne sur l'annulation de l'événement Level-Up dans Reskillable. Quelques mods qui appellent le levelUp(); la méthode contourne directement les verrous ! Cela inclut des mods comme le charognard : Reskillable et TogetherForever!

## Support de verrouillage par niveau

Le support du verrouillage par niveaux est une fonctionnalité étrange qui provient d'une blague que Skysom a faite un jour dans un DM. Cette fonctionnalité est entièrement destinée à ceux qui sont assez sadiques pour l'implémenter ! Cela porte la progression vers le niveau défini et non pas le "à partir de" ce niveau!

CTSkill = [Gestionnaire de compétences](/Mods/CompatSkills/Supports/Reskillable/BracketHandlers/)

### Syntaxe :

    // Exemple:
    mods.compatskills.SkillLocks.addLevelLock(CTSkill skill, int level, String... defaultRequirements);
    
    // Test Exemple:
    mods.compatskills.SkillLocks.addLevelLock(<skill:reskillable:agility>, 11, "reskillable:gathering", 3, "adv|minecraft:husbandry/plant_seed");