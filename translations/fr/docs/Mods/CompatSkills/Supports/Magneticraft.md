# Magnétique

## Réclamation :

Le support Magneticraft est actuellement constitué de :

- Une commande pour copier le nom de la chaîne de caractères de tous les blocs Magneticraft. 
    - La commande est : /ct magMultiBlocks
- Portail multi-blocs en utilisant une syntaxe basée sur la Crt.

### Syntaxe :

    Exemple:
    mods.compatskills.MagMultiBlockGates.addGate(String multiBlockName, String failureMessage, String... defaultRequirements);
    
    Exemple de travail :
    mods.compatskills.MagMultiBlockGates.addGate("solar_mirror", "Je crains que cela soit trop complexe pour un idiot comme vous!", "reskillable:building|15", "reskillable:magic|7", "adv|minecraft:husbandry/plant_seed", "stage|test");