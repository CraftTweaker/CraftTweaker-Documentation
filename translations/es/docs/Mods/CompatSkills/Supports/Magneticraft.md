# Magneticraft

## Explicación:

El soporte de Magneticraft consiste actualmente:

- Un comando para volcar el nombre de la cadena de todos los Multiblocks de Magneticraft. 
    - El comando es: /ct magMultiBlocks
- Multiblock Gating usando una sintaxis basada en Crt.

### Sintaxis:

    Ejemplo en blanco:
    mods.compatskills.MagMultiBlockGates.addGate(String multiBlockName, String failureMessage, String... defaultRequirements);
    
    Ejemplo de trabajo:
    mods.compatskills.MagMultiBlockGates.addGate("solar_mirror", "Me temo que esto es demasiado complejo para un idiota como tú!", "reskillable:building|15", "reskillable:magic|7", "adv|minecraft:husbandry/plant_seed", "stage|test");