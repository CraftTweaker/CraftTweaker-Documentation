# Blocco Danno Entità

## Blocco Danno Entità

Questa funzione consente di bloccare la capacità di attaccare / danneggiare entità specifiche.

### Sintassi:

[Link a IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Esempio vuoto:
    mods.compatskills.EntityDamageLock.addEntityLock(IEntityDefinition definition, String... defaultRequirements);
    
    # Esempio di lavoro:
    mods.compatskills.EntityDamageLock.addEntityLock(<entity:minecraft:zombie>, "reskillable:mining<unk> 5", "reskillable:magic<unk> 7");