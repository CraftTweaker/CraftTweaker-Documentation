# Verrouillage des dégâts d'entité

## Verrouillage des dégâts d'entité

Cette fonction vous permet de verrouiller la capacité d'attaquer/endommager des entités spécifiques.

### Syntaxe :

[Lien vers IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Exemple:
    mods.compatskills.EntityDamageLock.addEntityLock(IEntityDefinition definition, String... defaultRequirements);
    
    # Exemple de Travail :
    mods.compatskills.EntityDamageLock.addEntityLock(<entity:minecraft:zombie>, "reskillable:mining|5", "reskillable:magic|7");