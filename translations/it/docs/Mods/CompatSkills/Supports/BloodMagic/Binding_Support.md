# Supporto Di Associazione

## Legatura:

Questo annullerà l'Obbligazione per detto elemento specifico se il giocatore non soddisfa i requisiti.

### Pre-1.4.0:

#### Sintassi:

    Esempio vuoto:
    mods.compatskills.BindHandler.addBindLock(String failureMessage, IItemStack stack, String... requisiti);
    
    Esempio di prova:
    mods.compatskills.BindHandler.addBindLock("Untold Dark Energies ruotano intorno a te e poi si sottomettono", <bloodmagic:blood_orb>.withTag({orb: "bloodmagic:weak"}), "reskillable:building<unk> 15", "reskillable:magic<unk> 7", "stage<unk> test", "adv<unk> minec
    

### Post-1.4.0

A partire da CompatSkills 1.4.0 il bloccaggio di rilegatura è stato ora inserito come parte di ItemStack-Locking. Ciò significa che non c'è più una sintassi di script dedicata per aggiungere un blocco di associazione a un elemento.

Questo cambiamento è anche venuto con alcuni altri cambiamenti. Ad esempio, il messaggio di errore predefinito visualizzato è stato modificato in alcuni punti:

- Ora viene visualizzato accanto ai requisiti nella chat come un messaggio di stato solo giocatore
- Il messaggio di errore è ora una stringa localizzabile: 

    compatskills.bloodmagic.bindingError=Untold Dark Energies ruotano intorno a te e poi si abbassano
    

Ciò significa che gli autori del pacchetto di risorse possono ora localizzare il messaggio di errore in qualsiasi lingua desiderata. Questo significa anche che è possibile utilizzare mod come ResourceLoader o Base (Con ContentTweaker presente) per modificare la stringa di errore.