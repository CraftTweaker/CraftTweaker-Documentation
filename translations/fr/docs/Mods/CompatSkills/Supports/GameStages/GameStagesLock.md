# Verrou de l'étape

## Verrouillage par étapes

Cette partie du support GameStages vous permet de verrouiller une étape spécifique derrière un ensemble de conditions. Cela signifie que si un joueur ne correspond pas aux conditions définies pour l'étape lors du déblocage de l'étape, il annulera le déverrouillage et publiera un message d'erreur dans le chat. Ce message de chat n'est pas spécifique au serveur mais au joueur.

### Syntaxe :

    // Exemple:
    mods.compatskills.GameStageLocks.addGameStageLock(String gamestage, String... defaultRequirements);
    
    // Test Exemple:
    mods.compatskills.GameStageLocks.addGameStageLock("i", "reskillable:agility|10");
    mods.compatskills.GameStageLocks.addGameStageLock("comme", "reskillable:agility|11");
    mods.compatskills.GameStageLocks.addGameStageLock("banana", "reskillable:agility|12");
    mods.compatskills.GameStageLocks.addGameStageLock("pancakes", "reskillable:agility|13");