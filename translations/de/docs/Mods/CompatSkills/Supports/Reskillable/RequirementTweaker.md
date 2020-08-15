# Anforderungs-Tweaker

## PSA:

Ab 1.2.0 und vorwärts, Reskillable wird aktiv entwickelt, um die Interne von Reskillable und CompatSkill's Locking Systems zu verbessern. Dies ist in dem Bestreben, in Zukunft leistungsfähigere Sperrmechanismen zu ermöglichen.

## Anforderungssperre:

Derzeit ist die CrT-Hauptunterstützung für die Anforderungssperrung. Dies kann auch über das Config System erreicht werden. Allerdings unterstützt das Config System **NICHT** NBT!

### Syntax:

    // Leeres Beispiel:
    mods.compatskills.Requirement.addRequirement(IItemStack item, String... gesperrt)
    
    Arbeitsbeispiele:
    
    // Fügt eine Sperre für die Diamantspitzhacke mit einer Wildcard-Metadaten
    mods.compatskills hinzu. equirement.addRequirement(<minecraft:diamond_pickaxe:*>, "reskillable:mining|4");
    
    // NBT Sperre für Effizienz 5
    mods. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 5 as short, id: 32 as short}]}), "reskillable:mining|5", "reskillable:magic|7");
    
    // Fügt eine NBT-Sperre für Seidenberührung
    Mods hinzu. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 1 as short, id: 33 as short}]}), "reskillable:mining|6", "reskillable:agility|7");
    
    // Fügt eine NBT-Sperre für unbrechende 3
    mods hinzu. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 3 as short, id: 34 as short}]}), "reskillable:mining|7", "reskillable:attack|7");
    

Beispiel der 3 Verzauberungssperren, die zu einem einzigen Schloss kombiniert werden:

![Großartiges Schloss](https://i.imgur.com/gCfETAh.png)