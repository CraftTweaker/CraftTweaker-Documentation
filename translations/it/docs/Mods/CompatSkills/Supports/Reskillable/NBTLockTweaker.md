# NBT-Lock Tweaker

## NBT-Locking

Le NBT-Locks sono specifiche per CompatSkills 1.4.0+ e attualmente è la funzione più potente. È possibile bloccare specifici NBT-Tags o limitato a un dato mod-id o su ogni elemento del gioco.

Ciò significa che qualsiasi elemento trovato a contenere che NBT-tag avrà il blocco applicato ad esso.

### Sintassi:

    // Esempio vuoto:
    mods.compatskills.NBTLock.addGenericNBTLock(tag IData, String... bloccato)
    mods.compatskills.NBTLock.addModNBTLock(String modId, IData tag, String... locked)
    
    //// Esempio di lavoro:
    // Locks Silk-Touch
    addGenericNBTLock({ench:[{id: 33 as short}]}, "reskillable:magic<unk> 10");
    
    // Blocca ininterrottamente (nessun livello specificato)
    addModNBTLock("minecraft", {ench:[{id: 34 as short}]}, "reskillable:collecting<unk> 6");
    

Questo ha alcune implicazioni potenti. Ciò significa, per esempio, che come un pack-maker può bloccare:

- Materiali Tinker
- Modificatori Tinker
- Incantesimi
- Valori Energetici

E molto altro ancora, finché conosci il NBT-tag che usa!