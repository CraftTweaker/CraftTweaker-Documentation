# Verrouillage du montage

## Verrou de montage

Cette fonctionnalité vous permet d'ajouter un verrou prérequis à des entités spécifiques au montage !

### Syntaxe

[Lien vers IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Exemple:
    mods.compatskills.AnimalTameLock.addTameLock(IEntityDefinition definition, String... defaultRequirements)
    
    # Exemple de Travail :
    mods.compatskills.AnimalTameLock.addTameLock(<entity:minecraft:pig>, "reskillable:mining|5", "reskillable:magic|7")