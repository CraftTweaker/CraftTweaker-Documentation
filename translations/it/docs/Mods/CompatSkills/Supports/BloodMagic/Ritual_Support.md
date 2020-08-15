# Supporto Rituale

## Rituali:

Questo annullerà l'attivazione di un rituale se i requisiti specifici non sono soddisfatti per l'attivazione dei rituali.

### Comando:

Attualmente esiste un comando in gioco per scaricare tutte le corde rituali per l'uso da parte del Ritual Handler. Il comando è: /ct ritualDump e produrrà tutte le stringhe rituali al "CraftTweaker.log".

### Pre-1.4.0:

#### Sintassi:

    Esempio vuoto:
    mods.compatskills.RitualHandler.addRitualLock(String failureMessage, String ritual, String... requisiti)
    
    Esempio di prova:
    mods.compatskills.RitualHandler.addRitualLock("As the ritual activates, you don't achieve the expected result", "ritualCrushing", "reskillable:building<unk> 15", "reskillable:magic<unk> 7", "stage<unk> test", "adv<unk> minecraft:husbandry/plant_seed")
    

### Post-1.4.0:

A partire da CompatSkills 1.4.0 sono stati aggiunti alcuni nuovi ZenMethods e alcuni cambiamenti sono stati fatti alla sintassi esistente. Abbiamo anche risolto un problema che ha reso il supporto rituale e vincolante non funziona correttamente!

#### Sintassi:

    Esempio vuoto:
    mods.compatskills.RitualHandler.addRitualLock(String ritual, String... requisiti);
    mods.compatskills.RitualHandler.addRitualCostLock(int activationCost, String... requisiti);
    mods.compatskills.RitualHandler.addRitualCrystalLock(int crystalLevel, String... requisiti);
    
    Esempio di prova:
    mods.compatskills.RitualHandler.addRitualLock("ritualCrushing", "reskillable:magic<unk> 7");
    mods.compatskills.RitualHandler.addRitualCostLock(500, "reskillable:magic<unk> 7";
    mods.compatskills.RitualHandler.addRitualCrystalLock(1, "reskillable:magic<unk> 7");
    

#### Messaggio Di Errore

Come con il supporto per l'associazione, il messaggio di errore è stato spostato in una stringa localizzabile invece di una stringa impostata nel metodo CrT. Questo lo renderà così gli autori del pacchetto di risorse possono localizzare e cambiare le stringhe come vorrebbero molto più facile.

    compatskills.bloodmagic.ritualError=As the ritual activates, you don't achieve the expected result
    

Alcune altre modifiche sono ad esempio che il messaggio di errore predefinito ora viene visualizzato come parte di un messaggio di conversazione di stato per il giocatore. Questo significa che il messaggio viene mostrato solo al giocatore e non stampato in chat per tutti da vedere. Questo significa anche che ora verrà visualizzato accanto ai requisiti nella chat. Il che rende più facile per il giocatore identificare ciò che manca dalla serratura.