# Blocco Domazione

## Blocco Animali-Domazione

Questa funzione consente di aggiungere blocchi di requisito per domare entità specifiche.

### Sintassi

[Link a IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Esempio vuoto:
    mods.compatskills.AnimalTameLock.addTameLock(IEntityDefinition definition, String... defaultRequirements);
    
    # Esempio di lavoro:
    mods.compatskills.AnimalTameLock.addTameLock(<entity:minecraft:wolf>, "reskillable:mining<unk> 5", "reskillable:magic<unk> 7");