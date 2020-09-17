# Bloqueo-Etapa

## Fase de bloqueo

Esta parte del soporte de GameStages te permite bloquear una etapa específica detrás de un conjunto de requisitos. Esto significa que si un jugador no coincide con los requisitos establecidos para la etapa al desbloquear el escenario, cancelará el desbloqueo y publicará un mensaje de error en el chat. Este mensaje de chat no es amplio en el servidor, sino específico del jugador.

### Sintaxis:

    // Ejemplo en blanco:
    mods.compatskills.GameStageLocks.addGameStageLock(String gamestage, String... defaultRequirements);
    
    // Ejemplo de prueba:
    mods.compatskills.GameStageLocks.addGameStageLock("i", "reskillable:agility|10");
    mods.compatskills.GameStageLocks.addGameStageLock("like", "reskillable:agility|11");
    mods.compatskills.GameStageLocks.addGameStageLock("banana", "reskillable:agility|12");
    mods.compatskills.GameStageLocks.addGameStageLock("pancakes", "reskillable:agility|13");