# Supporto Livel-Lock

## PSA:

Questa funzione funziona per annullare l'evento Level-Up in Reskillable. Alcune mod che chiamano il livelloSu(); il metodo direttamente bypassare i blocchi! Questo include mod come Scavenge: Reskillable e TogetherForever!

## Supporto Livel-Lock

Level-Lock Support è una caratteristica strana che è venuto da una battuta che Skysom ha fatto in un DM un giorno. Questa caratteristica è interamente per quelli abbastanza sadico da implementarla! Questo cancella la progressione al livello impostato non il "andare da" quel livello!

CTSkill = [Skill-Bracket Handler](/Mods/CompatSkills/Supports/Reskillable/BracketHandlers/)

### Sintassi:

    // Esempio vuoto:
    mods.compatskills.SkillLocks.addLevelLock(CTSkill skill, int level, String... defaultRequirements);
    
    // Esempio di prova:
    mods.compatskills.SkillLocks.addLevelLock(<skill:reskillable:agility>, 11, "reskillable:collecting", 3, "adv<unk> minecraft:husbandry/plant_seed");