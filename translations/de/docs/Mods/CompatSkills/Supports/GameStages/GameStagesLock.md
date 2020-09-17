# Stage-Sperren

## Stufensperre

Dieser Teil der GameStages-Unterstützung ermöglicht es Ihnen, eine bestimmte Phase hinter einer Reihe von Anforderungen zu sperren. Dies bedeutet, dass, wenn ein Spieler nicht den festgelegten Anforderungen für die Bühne beim Entsperren der Bühne entspricht es wird das Entsperren abbrechen und eine Fehlermeldung im Chat veröffentlichen. Diese Chat-Nachricht ist nicht serverweit, sondern spielerspezifisch.

### Syntax:

    // Leeres Beispiel:
    mods.compatskills.GameStageLocks.addGameStageLock(String gamestage, String... defaultRequirements);
    
    // Beispiel testen:
    mods.compatskills.GameStageLocks.addGameStageLock("i", "reskillable:agility|10");
    mods.compatskills.GameStageLocks.addGameStageLock("like", "reskillable:agility|11");
    mods.compatskills.GameStageLocks.addGameStageLock("banana", "reskillable:agility|12");
    mods.compatskills.GameStageLocks.addGameStageLock("pancakes", "reskillable:agility|13");