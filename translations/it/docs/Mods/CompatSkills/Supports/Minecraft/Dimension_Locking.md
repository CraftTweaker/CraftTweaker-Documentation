# Blocco Dimensione

## Blocco Dimensione

Questa funzione consente di bloccare la capacità di viaggiare a specifiche dimensioni a meno che non siano soddisfatti i requisiti!

### Sintassi

    Esempio vuoto:
    mods.compatskills.DimensionLock.addDimensionLock(int dimension, String... defaultRequirements);
    
    Esempio di lavoro:
    mods.compatskills.DimensionLock.addDimensionLock(-1, "reskillable:mining<unk> 5", "reskillable:magic<unk> 7");