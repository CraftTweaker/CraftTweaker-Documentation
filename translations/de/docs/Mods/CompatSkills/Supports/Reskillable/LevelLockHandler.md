# Level Lock Unterstützung

## PSA:

Dieses Feature beendet das Level-Up Event in Reskillable. Einige Mods, die LevelUp(); Methode wird direkt die Sperren umgehen! Dies beinhaltet Mods wie Scavenge: Reskillable und TogetherForever!

## Level Lock Unterstützung

Der Level Lock Support ist eine seltsame Funktion, die von einem Witz stammt, den Skysom eines Tages in einem DM gemacht hat. Dieses Feature ist nur für jene sadistisch genug, um es zu implementieren! Dies öffnet den Fortschritt auf die festgelegte Stufe nicht die "gehen von" Level!

CTSkill = [Skill-Bracket Handler](/Mods/CompatSkills/Supports/Reskillable/BracketHandlers/)

### Syntax:

    // Leeres Beispiel:
    mods.compatskills.SkillLocks.addLevelLock(CTSkill Skill, Int, String... defaultRequirements);
    
    // Beispiel testen:
    mods.compatskills.SkillLocks.addLevelLock(<skill:reskillable:agility>, 11, "reskillable:Sammeln", 3, "adv|minecraft:husbandry/plant_seed");