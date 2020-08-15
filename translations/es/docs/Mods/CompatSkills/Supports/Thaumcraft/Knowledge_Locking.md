# Bloqueo de conocimientos

## Característica:

Esta característica le permite bloquear la adquisición de conocimientos observacionales o teóricos en Thaumcraft.

## Tipos de Conocimiento:

Los tipos de conocimiento actuales son OO para la Observación y T para la Teoría.

## Sintaxis:

    mods.compatskills.Thaumcraft.addKnowledgeLock(String categoryName, String knowledgeType, String... requirements);
    
    mods.compatskills.Thaumcraft.addKnowledgeLock("UNLOCKAUROMANCY", "O", "dim|1");
    mods.compatskills.Thaumcraft.addKnowledgeLock("UNLOCKAUROMANCY", "T", "dim|1");