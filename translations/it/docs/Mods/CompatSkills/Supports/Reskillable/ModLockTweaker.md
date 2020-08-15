# Mod-Lock Tweaker

## Mod-Locking

Questo è stato aggiunto come una funzionalità per le configurazioni in 1.2.0 e ora ha un CrT ZenMethod implementato per supportarlo. Questo può essere realizzato anche attraverso le configurazioni come precedentemente menzionate.

Mod-Locks consente di bloccare tutti gli ItemStack da una mod specifica dietro un blocco specifico.

### Sintassi:

    // Esempio vuoto
    mods.compatskills.ModLock.addModLock(String modId, String... bloccato);
    
    // Esempio di lavoro:
    mods.compatskills.ModLock.addModLock("minecraft", "reskillable:building<unk> 4");
    
    Il blocco sopra bloccherà tutto dalla mod "minecraft" dietro una serratura di "edificio 4"