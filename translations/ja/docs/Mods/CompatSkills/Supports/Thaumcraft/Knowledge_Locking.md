# Knowledge Locking

## Feature:

This feature allows you to lock the acquisition of Observational or Theoretical Knowledge acquisition in Thaumcraft.

## Knowledge Types:

Current knowledge types are O for Observation and T for Theory.

## Syntax:

    mods.compatskills.Thaumcraft.addKnowledgeLock(String categoryName, String knowledgeType, String... requirements);
    
    mods.compatskills.Thaumcraft.addKnowledgeLock("UNLOCKAUROMANCY", "O", "dim|1");
    mods.compatskills.Thaumcraft.addKnowledgeLock("UNLOCKAUROMANCY", "T", "dim|1");