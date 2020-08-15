# Ingeniería Inmersiva

## Creditos:

¡Créditos van a Skysom por ayudarme a través de esto y por permitirme rehacer algo de su código de MultiblockStages!

## Explicación:

Inmersive Engineering-Support actualmente consiste en:

- Un comando para volcar el nombre de la cadena de todos los Multibloques de IE. 
    - El comando es: /ct ieMultiBlocks
- Multiblock Gating usando una sintaxis basada en Crt.

### Sintaxis:

    Ejemplo en blanco:
    mods.compatskills.IEMultiBlockGate.addGate(String multiBlockName, String failureMessage, String... defaultRequirements);
    
    Ejemplo de trabajo:
    mods.compatskills.IEMultiBlockGate.addGate("IE:DieselGenerator", "Me temo que esto es demasiado complejo para un idiota como tú!", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed");