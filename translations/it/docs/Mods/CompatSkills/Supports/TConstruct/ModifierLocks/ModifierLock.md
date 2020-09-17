# Blocchi Materiale

## Material-Lock

Con l'implementazione del supporto TConstruct in CompatSkills 1.5.0. Ora hai la possibilità di bloccare:

    - Aggiunta Modificatore
    

Per specifici modificatori di Tinker Costrutt.

### Sintassi:

    // Esempio vuoto:
    mods.compatskills.ModifierLock.addModifierLock(Identificatore string, String... requisiti);
    
    // Esempio:
    mods.compatskills.ModifierLock.addModifierLock("harvestwidth", "reskillable:mining<unk> 5", "reskillable:magic<unk> 7");