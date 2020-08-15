# Wissenssperre

## Merkmal:

Mit dieser Funktion können Sie die Übernahme von Observational oder Theoretical Knowledge Acquisition in Thaumcraft sperren.

## Wissentypen:

Aktuelle Wissensarten sind O für Beobachtung und T für Theorie.

## Syntax:

    mods.compatskills.Thaumcraft.addKnowledgeLock(String categoryName, String knowledgeType, String... Voraussetzungen);
    
    mods.compatskills.Thaumcraft.addKnowledgeLock("UNLOCKAUROROMANCY", "O", "dim|1");
    mods.compatskills.Thaumcraft.addKnowledgeLock("UNLOCKAUROROMANCY", "T", "dim|1");