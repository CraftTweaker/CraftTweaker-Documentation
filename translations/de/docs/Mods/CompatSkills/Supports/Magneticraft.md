# Magneticraft

## Erklärung:

Magneticraft Support besteht derzeit aus:

- Ein Kommando zum Dumpen des String-Namens aller Magneticraft-Multiblöcke. 
    - Befehl ist: /ct MultiBlocks
- Multiblock Gating mit einer Crt-basierten Syntax.

### Syntax:

    Leeres Beispiel:
    mods.compatskills.MagMultiBlockGates.addGate(String multiBlockName, String failureMessage, String... defaultRequirements);
    
    Arbeitsbeispiel:
    mods.compatskills.MagMultiBlockGates.addGate("solar_mirror", "Ich fürchte, das ist einfach zu komplex für einen Idioten wie Sie!", "reskillable:building|15", "reskillable:magic|7", "adv|minecraft:husbandry/plant_seed", "stage|test");