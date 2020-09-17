# Verrouillage des connaissances

## Caractéristique:

Cette fonctionnalité vous permet de verrouiller l'acquisition de connaissances observationnelles ou théoriques dans Thaumcraft.

## Types de connaissances:

Les types de connaissances actuels sont O pour l'observation et T pour la théorie.

## Syntaxe :

    mods.compatskills.Thaumcraft.addKnowledgeLock(String categoryName, String knowledgeType, String... exigences);
    
    mods.compatskills.Thaumcraft.addKnowledgeLock("UNLOCKAUROMANCY", "O", "dim|1");
    mods.compatskills.Thaumcraft.addKnowledgeLock("UNLOCKAUROMANCY", "T", "dim|1");