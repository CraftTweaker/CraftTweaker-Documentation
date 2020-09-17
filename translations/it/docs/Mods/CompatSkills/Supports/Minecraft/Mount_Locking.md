# Monta Blocco

## Monta Blocchi

Questa funzione consente di aggiungere un blocco requisito per il montaggio di entità specifiche!

### Sintassi

[Link a IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Esempio vuoto:
    mods.compatskills.AnimalTameLock.addTameLock(IEntityDefinition definition, String... defaultRequirements)
    
    # Esempio di lavoro:
    mods.compatskills.AnimalTameLock.addTameLock(<entity:minecraft:pig>, "reskillable:mining<unk> 5", "reskillable:magic<unk> 7")