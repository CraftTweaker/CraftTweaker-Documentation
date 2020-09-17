# Verrouillage de l'apprivoisement

## Verrouillage des animaux

Cette fonctionnalité vous permet d'ajouter des verrous d'exigences à l'apprivoisement d'entités spécifiques.

### Syntaxe

[Lien vers IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Exemple:
    mods.compatskills.AnimalTameLock.addTameLock(IEntityDefinition definition, String... defaultRequirements);
    
    # Exemple de Travail :
    mods.compatskills.AnimalTameLock.addTameLock(<entity:minecraft:wolf>, "reskillable:mining|5", "reskillable:magic|7");