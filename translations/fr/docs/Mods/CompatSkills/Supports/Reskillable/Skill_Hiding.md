# Blocage des compétences / Visibilité

Ce verrou vous permet de cacher des Compétences jusqu'au point où un joueur remplit les conditions pour voir la Compétence. Ceci a quelques cas d'utilisation limitée, par exemple lorsque vous ajoutez des compétences "Classe" dans des packs personnalisés où vous ne voulez pas que quelqu'un qui est un "Ingénieur" puisse voir ou être en mesure d'accéder à la page de compétence "Mage".

## Syntaxe :

    Exemple:
    mods.compatskills.VisibilityLock.addVisibilityLock(CTSkill, String... Exigences par défaut);
    
    Exemple de travail :
    mods.compatskills.VisibilityLock.addVisibilityLock(<skill:reskillable:attack>, "dim|1");