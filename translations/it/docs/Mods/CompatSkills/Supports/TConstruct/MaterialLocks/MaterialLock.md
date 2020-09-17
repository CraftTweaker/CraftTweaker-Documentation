# Blocchi Materiale

## Material-Lock

Con l'implementazione del supporto TConstruct in CompatSkills 1.5.0. Ora hai la possibilità di bloccare:

    - Creazione utensili
    - Creazione parte
    - Sostituzione parte
    

Per specifici Materiali di Costruzione di Tinker.

### Sintassi:

    // Esempio vuoto:
    mods.compatskills.MaterialLock.addMaterialLock(Identificatore string, String... requisiti);
    
    // Esempio:
    mods.compatskills.MaterialLock.addMaterialLock("wood", "reskillable:mining<unk> 5", "reskillable:magic<unk> 7");