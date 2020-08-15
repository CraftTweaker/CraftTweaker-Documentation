# Stage-Entsperrungen

## Entsperrbare

Dieser Teil der GameStages Unterstützung wird sich auf die spätere Form konzentrieren. Aka "Dummy Traits" zum Entsperren von GameStages.

## Ressourcen-Informationen:

Beim Erstellen eines neuen Dummy-Merkmals wirst du bemerken, dass ein paar Dinge fehlen:

- Unlokalisierter Name
- Nicht lokalisierte Beschreibung
- Kein Symbol vorhanden

Dies ist darauf zurückzuführen, dass Ressourcen benötigt werden. Im gegenwärtigen Stadium bietet CompatSkills nicht die Möglichkeit, diese nativ zur Verfügung zu stellen. Hier gibt es einige Möglichkeiten:

- BASE verwenden, der mit einem eigenen Ressourcenlader geliefert wird (funktioniert nur, wenn ContentTweaker aufgrund der Funktionsweise von BASE vorhanden ist).
- Verwenden Sie ResourceLoader von Lumien.

Die Lokalisierung ist ziemlich direkt vorwärts.

    assets/compatskills/lang/de_us.lang
    
    de_us.lang = Englische Übersetzung
    

Der Texturpfad für das Merkmalsymbol lautet jedoch wie folgt:

    assets/compatskills/textures/unlockables/name.png
    
    Wenn also der Name "banana" ist, wäre der Pfad folgendermaßen:
    
    assets/compatskills/textures/unlockables/banana.png
    

### Syntax:

    Leeres Beispiel:
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable(String Gamestage, String Name, int x, int y, String skillName, int Kosten, @Optional String... defaultRequirements);
    
    Working Beispiel(s):
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("a", 0, 0, "reskillable:gathering", 3, "stage|test");
    mods.compatskills.GameStageUnlockable. ddGameStageUnlockable("b", "b", 0, 1, "reskillable:gathering", 3, "adv|minecraft:husbandry/plant_seed");
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("c", "c", 0, 2, "reskillable:gathering", 3, "trait|compatskills:b");