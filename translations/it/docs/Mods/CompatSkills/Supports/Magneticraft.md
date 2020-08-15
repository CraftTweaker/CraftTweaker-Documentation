# Magneticraft

## Spiegazione:

Il supporto Magneticraft attualmente consiste di:

- Un comando per scaricare il nome della stringa di tutti i Multiblock Magneticraft. 
    - Comando è: /ct magMultiBlocks
- Multiblock Gating utilizzando una sintassi basata su Crt.

### Sintassi:

    Esempio vuoto:
    mods.compatskills.MagMultiBlockGates.addGate(String multiBlockName, String failureMessage, Stringa... defaultRequirements);
    
    Esempio di lavoro:
    mods.compatskills.MagMultiBlockGates.addGate("solar_mirror", "Temo che questo sia troppo complesso per un idiota come te!", "reskillable:building<unk> 15", "reskillable:magic<unk> 7", "adv<unk> minecraft:husbandry/plant_seed", "stage<unk> test");