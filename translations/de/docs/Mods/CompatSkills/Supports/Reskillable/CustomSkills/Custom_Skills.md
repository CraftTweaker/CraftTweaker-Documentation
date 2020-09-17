# Eigene Fähigkeiten

## Credits:

Das Credits geht an Kindlich für das Schreiben der meisten Custom-Content-Implementierung!

## Eigene Fähigkeiten:

### Implementierungs-Syntax:

    Beispiele:
    mods.compatskills.SkillCreator.createSkill(String name, String backGroundLocation)
    mods.compatskills.SkillCreator.createNewSkill(String nameLocation, String backGroundLocation)
    
    "createSkill" automatisch die CompatSkills ModID der Name Resource Location.
    So zum Beispiel:
    mods.compatskills.SkillCreator.createSkill("banana", "textures/blocks/stonebrick.png");
    
    würde intern zurückgeben:
    "compatskills:banana" als Ressourcenstandort für die Fertigkeit.
    
    Die zweite hat keine zugewiesene ModID, d.h. Sie können Ihre eigene eingeben.
    mods.compatskills.SkillCreator.createNewSkill("pokemon:throwing", "textures/blocks/stonebrick.png")
    

### Zeneigenschaften

| Referenz | Eigenschaftsname | Implementierung |
|:-------- |:---------------- | --------------- |
| CrTSkill | name             | Siehe unten     |

    // Erstellt die Fähigkeit als Variable
    var banana = mods.compatskills.SkillCreator.createSkill("banana", "textures/blocks/stonebrick. ng");
    
    // Hard-Sets den Namen "Banana"
    // Beachten Sie, dass dies die Lokalisierung durch .lang Dateien unmöglich macht!
    banana.name = "Banana"
    

### ZenSetters/ZenGetters

| Methodentyp | Methodenname          | Werte                                                  |
|:----------- |:--------------------- | ------------------------------------------------------ |
| Setter      | setLevelCap           | Nimmt eine Ganzzahl                                    |
| Getriebe    | getLevelCap           | Gibt eine Ganzzahl zurück                              |
| Setter      | gesetzt               | Nimmt eine Boolesche                                   |
| Getriebe    | getEnabled            | Gibt einen Booleschen zurück                           |
| Setter      | setSkillPointInterval | Nimmt eine Ganzzahl                                    |
| Setter      | setBaseLevelCost      | Nimmt eine Ganzzahl                                    |
| Getriebe    | getBaseLevelCost      | Gibt eine Ganzzahl zurück                              |
| Getriebe    | getName               | Gibt den lokalisierten Zeichenkettennamen zurück       |
| Setter      | setLevelStaggering    | Nimmt einen String[], siehe Konfiguration für Beispiel |
| Getriebe    | getLevelStaggering    | Gibt einen String[] zurück                             |
| Setter      | setHidden             | Nimmt eine Boolesche                                   |
| Getriebe    | isHidden              | Gibt einen Booleschen zurück                           |

### Lokalisierung & Ressourcen-Standortreferenzen:

    Skill-Icons:
    
    Entweder
    
    - mods.compatskills.SkillCreator.createSkill(String name, String backGroundLocation);
        - compatskills:textures/skills/skillname.png
    
    - mods.compatskills.SkillCreator. reateNewSkill(String nameLocation, String backGroundLocation);
        - customResourceLocation:/textures/skills/skillname.png
    
    
    Localizations are placed in:
    
    - compatskills:lang/localeCode.lang
    
    or
    
    - customResourceLocation:lang/localeCode.lang
    

Gehen Sie zu diesem Link, um alle möglichen Locale-Codes zu sehen! [Minecraft-Sprachseite von Gamepedia's](https://minecraft.gamepedia.com/Language "Gamepedia's Minecraft Language Page")