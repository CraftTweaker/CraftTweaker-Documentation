# Stage-Locks

## Stage-Lock

Questa parte del supporto GameStages-consente di bloccare una fase specifica dietro una serie di requisiti. Ciò significa che se un giocatore non corrisponde ai requisiti impostati per il palcoscenico al momento dello sblocco, annullerà lo sblocco e pubblicherà un messaggio di errore in chat. Questo messaggio di chat non è tutto il server ma specifico per il giocatore.

### Sintassi:

    // Esempio vuoto:
    mods.compatskills.GameStageLocks.addGameStageLock(String gamestage, String... defaultRequirements);
    
    // Esempio di prova:
    mods.compatskills.GameStageLocks.addGameStageLock("i", "reskillable:agility<unk> 10");
    mods.compatskills.GameStageLocks.addGameStageLock("likke", "reskillable:agility<unk> 11");
    mods.compatskills.GameStageLocks.addGameStageLock("banana", "reskillable:agility<unk> 12");
    mods.compatskills.GameStageLocks.addGameStameStageLock("pancakes", "reskillable:agility<unk> 13");