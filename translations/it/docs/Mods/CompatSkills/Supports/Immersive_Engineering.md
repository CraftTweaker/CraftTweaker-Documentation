# Ingegneria Immersiva

## Crediti:

I crediti vanno a Skysom per aiutarmi a guidarmi attraverso questo e per avermi permesso di rielaborare alcuni dei suoi codici da Multiblockstages!

## Spiegazione:

Immersive Engineering-Support attualmente consiste di:

- Un comando per il dumping del nome della stringa di tutti i Multiblock IE. 
    - Comando è: /ct ieMultiBlocks
- Multiblock Gating utilizzando una sintassi basata su Crt.

### Sintassi:

    Esempio vuoto:
    mods.compatskills.IEMultiBlockGate.addGate(String multiBlockName, String failureMessage, Stringa... defaultRequirements);
    
    Esempio di lavoro:
    mods.compatskills.IEMultiBlockGate.addGate("IE:DieselGenerator", "Temo che questo sia troppo complesso per un idiota come te!", "reskillable:building<unk> 15", "reskillable:magic<unk> 7", "stage<unk> test", "adv<unk> minecraft:husbandry/plant_seed");