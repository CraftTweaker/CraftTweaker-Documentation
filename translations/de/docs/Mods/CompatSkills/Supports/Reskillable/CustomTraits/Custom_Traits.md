# Eigene Fähigkeiten & Merkmale

## Credits:

Das Credits geht an Kindlich für das Schreiben der meisten Custom-Content-Implementierung!

## Eigene Merkmale:

### Implementierungs-Syntax:

    Beispiele:
    mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, String skillLocation, int cost, @Optional String... erforderlich)
    mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, CrTSkill parentSkill, int cost, @Optional String... requirements)
    mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, String skillLocation, int cost @Optional String... erforderlich)
    mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, CrTSkill parentSkill, int cost, @Optional String... requirements)
    
    
    "traitName" VS "traitLocation" ist dasselbe wie in den Fähigkeiten.
    
    "CrTSkill parentSkill" ist der Skill Bracket Handler.
    
    
    So wäre ein funktionales Beispiel:
    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    var test1 = mods. ompatskills.TraitCreator.createTrait("test", 2, 3, "<skill:compatskills:banana>", 1, "compatskills:banana|5");
    var test2 = mods. ompatskills.TraitCreator.createTrait("broken:test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    var test3 = mods.compatskills.TraitCreator.createTrait("broken:test", 2, 3, "<skill:compatskills:banana>", 1, "compatskills:banana|5");
    

### Zeneigenschaften

| Referenz | Eigenschaftsname | Implementierung |
|:-------- |:---------------- | --------------- |
| CrTTrait | name             | Siehe unten     |
| CrTTrait | beschreibung     | Siehe unten     |

    // Erstellt das Merkmal als Variable
    var trait = mods.compatskills.TraitCreator. reateTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    // Hard-Sets des Namens "Test"
    // Dies macht Lokalisierung durch .lang Dateien nicht möglich!
    trait.name = "Test"
    
    // Beschreibung "Hallo, ich bin eine Beschreibung"
    // Seien Sie sich bewusst, dass dies Lokalisierung durch .lang Dateien unmöglich macht!
    trait.description = "Hallo, ich bin eine Beschreibung"
    

### ZenSetters/ZenGetters

| Methodentyp | Methodenname   | Werte                                                               |
|:----------- |:-------------- | ------------------------------------------------------------------- |
| Setter      | gesetzt        | Nimmt eine Boolesche                                                |
| Getriebe    | getEnabled     | Gibt einen Booleschen zurück                                        |
| Getriebe    | getName        | Gibt den lokalisierten Zeichenkettennamen des Merkmals zurück       |
| Getriebe    | getDescription | Gibt die lokalisierte Zeichenkettenbeschreibung des Merkmals zurück |
| Getriebe    | retrieveIcon   | Gibt einen Ressourcenstandort zurück                                |
| Setter      | ändere Icon    | Nimmt einen Ressourcen-Standort-String                              |

### Lokalisierung & Ressourcen-Standortreferenzen:

    Merkmal Icons:
    
    Entweder
    
    - mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, String skillLocation, int cost, @Optional String... requirements);
        - compatskills:textures/unlockables/traitname.png
    
    - mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, String skillLocation, int cost, @Optional String... requirements);
        - customResourceLocation:/textures/unlockables/traitname.png
    
    
    Lokalisierungen werden in
    
    - compatskills:lang/localeCode.lang
    
    oder
    
    - customResourceLocation:lang/localeCode.lang
    

Gehen Sie zu diesem Link, um alle möglichen Locale-Codes zu sehen! [Minecraft-Sprachseite von Gamepedia's](https://minecraft.gamepedia.com/Language "Gamepedia's Minecraft Language Page")