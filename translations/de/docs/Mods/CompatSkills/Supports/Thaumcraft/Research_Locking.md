# Forschung Sperren

## Merkmal:

Mit dieser Funktion können Sie die Akquisition von Research hinter einer Gruppe von Anforderungen sperren. Dies bedeutet zum Beispiel, dass Sie den Erwerb von "Golem Research" auf die Anforderung setzen können, in einer bestimmten Dimension zu sein (wie im Beispiel unten). Das bedeutet, dass Sie in dieser Dimension sein müssen, um die Forschung zu erwerben, aber wenn Sie die Forschung abgeschlossen haben, haben Sie sie auch. Es "zurücksetzen" oder "ungelernt" durch Verlassen der Dimension oder nicht mehr die Anforderungen im Allgemeinen!

## Syntax:

    mods.compatskills.Thaumcraft.addResearchLock(String researchKey, String... erforderlich);
    
    mods.compatskills.Thaumcraft.addResearchLock("GOLEMVISION", "dim|1");