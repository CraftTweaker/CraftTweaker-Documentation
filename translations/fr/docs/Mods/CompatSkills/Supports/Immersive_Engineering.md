# Ingénierie immersive

## Crédits :

Les crédits vont à Skysom pour m'aider à me guider à travers cela et pour me permettre de retravailler une partie de son code de MultiblockStages!

## Réclamation :

Le support technique immersif est actuellement constitué de :

- Une commande pour copier le nom de la chaîne de caractères de tous les blocs d'IE. 
    - La commande est : /ct ieMultiBlocks
- Portail multi-blocs en utilisant une syntaxe basée sur la Crt.

### Syntaxe :

    Exemple:
    mods.compatskills.IEMultiBlockGate.addGate.addGate(String multiBlockName, String failureMessage, String... defaultRequirements);
    
    Exemple:
    mods.compatskills.IEMultiBlockGate.addGate("IE:DieselGenerator", "Je crains que cela soit trop complexe pour un idiot comme vous!", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed");