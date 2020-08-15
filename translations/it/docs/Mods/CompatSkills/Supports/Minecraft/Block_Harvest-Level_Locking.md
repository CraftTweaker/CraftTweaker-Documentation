# Blocco Raccolta-Livello Blocco

## Caratteristica:

Questo blocco lo rende così il giocatore non può rompere un blocco con il set Harvest-Level a meno che non sia soddisfatta una serie di requisiti. Ad esempio sotto puoi vedere che i blocchi con un livello di raccolta di 3 possono essere rotti solo nella Fine. Questo esempio non è davvero così grande in pratica, ma mostra che cosa questo tipo di serratura è in grado di fare.

## Sintassi:

    mods.compatskills.HarvestLock.addBlockLevelLock(int level, String... requisiti);
    
    mods.compatskills.HarvestLock.addBlockLevelLock(3, "dim<unk> 1");