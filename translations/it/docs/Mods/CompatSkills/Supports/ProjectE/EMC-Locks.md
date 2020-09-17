# ProjectE

## Blocchi EMC

A partire da 1.5.0 Compatibilità le abilità supportano EMC Locks per gli oggetti.

## AVVISO

A partire da 1.9.0 EMC Locks è stato modificato:

    Supporto ProjectE modificato per bloccare l'apprendimento della trasmutazione e la moltiplicazione dei condensatori.
    La sintassi è la stessa di prima mods.compatskills.EMCLock.addEMCLock(int emc, String... requisiti);
    I giocatori saranno in grado di utilizzare oggetti che non soddisfano il blocco emc ma non saranno in grado di imparare o duplicare quell'elemento. Imparare e duplicare ora richiede anche al giocatore di soddisfare tutti i requisiti che l'oggetto ha su di esso.
    Nota: Per inserire gli elementi nella tabella di trasmutazione si otterrà ancora l'emc ma non sarà in grado di ottenere l'oggetto indietro.
    

### Sintassi:

    // Esempio vuoto:
    mods.compatskills.EMCLock.addEMCLock(int emc, String... bloccato)
    
    // Esempio:
    mods.compatskills.EMCLock.addEMCLock(8192, "reskillable:mining<unk> 5", "reskillable:magic<unk> 7")