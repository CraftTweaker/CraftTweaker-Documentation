# Immersive Engineering

## Credits:

Die Credits gehen an Skysom, um mir dabei zu helfen und mir zu ermöglichen, einen Teil seines Codes von MultiblockStages zu überarbeiten!

## Erklärung:

Immersive Engineering-Support besteht derzeit aus:

- Ein Kommando zum Dumpen des String-Namens aller IE Multiblocks. 
    - Befehl ist: /ct ieMultiBlocks
- Multiblock Gating mit einer Crt-basierten Syntax.

### Syntax:

    Leeres Beispiel:
    mods.compatskills.IEMultiBlockGate.addGate(String multiBlockName, String failureMessage, String... defaultRequirements);
    
    Arbeitsbeispiel:
    mods.compatskills.IEMultiBlockGate.addGate("IE:DieselGenerator", "Ich fürchte, das ist einfach zu komplex für einen Idiot wie Sie!", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed");