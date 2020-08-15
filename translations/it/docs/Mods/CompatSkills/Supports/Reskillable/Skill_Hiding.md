# Abilità Nascondere / Visibilità Blocco

Questo blocco ti permette di nascondere le Abilità fino al punto in cui un giocatore soddisfa i requisiti per vedere l'abilità. Questo ha alcuni casi d'uso limitati, ad esempio quando si aggiungono abilità di "classe" in Pacchetti Personalizzati dove non si desidera che qualcuno che è un "ingegnere" per vedere o essere in grado di ottenere l'accesso alla pagina di abilità "Mage".

## Sintassi:

    Esempio vuoto:
    mods.compatskills.VisibilityLock.addVisibilityLock(CTSkill skill, String... Requisiti predefiniti);
    
    Esempio di lavoro:
    mods.compatskills.VisibilityLock.addVisibilityLock(<skill:reskillable:attack>, "dim<unk> 1");