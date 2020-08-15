# Tweaker Exigences

## PSA :

A partir de la version 1.2.0 et à venir, Reskillable est en cours de développement pour améliorer les systèmes internes de verrouillage des Compétences Reskillable et CompatSkill. C'est dans le but de permettre à l'avenir des mécanismes de verrouillage plus puissants.

## Verrouillage requis :

Actuellement, la prise en charge principale de CrT est pour le verrouillage des conditions. Cela peut également être accompli via le système de configuration. Cependant le système de configuration **PAS** prend en charge NBT !

### Syntaxe :

    // Exemple:
    mods.compatskills.Requirement.addRequirement(élément IItemStack, String... Verrouillé)
    
    Exemples de travail :
    
    // Ajoute un verrou pour la pioche de diamant avec une métadonnée de joker
    mods.compatskills. equirement.addRequirement(<minecraft:diamond_pickaxe:*>, "reskillable:mining|4");
    
    // Ajoute un verrou NBT pour l'efficacité 5
    mods. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 5 as short, id: 32 as short}]}), "reskillable:mining|5", "reskillable:magic|7");
    
    // Ajoute un verrou NBT pour les mods Touche soie
    . ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 1 as short, id: 33 as short}]}), "reskillable:mining|6", "reskillable:agility|7");
    
    // Ajoute un verrou NBT pour Unbreaking 3
    mods. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 3 as short, id: 34 as short}]}), "reskillable:mining|7", "reskillable:attack|7");
    

Exemple des 3 serrures d'enchantement qui sont combinées en un seul verrou :

![Verrouillage génial](https://i.imgur.com/gCfETAh.png)