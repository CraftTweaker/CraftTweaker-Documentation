# Skill-Verstecken / Sichtbarkeitssperren

Diese Sperre erlaubt es dir, Fähigkeiten zu verstecken, bis ein Spieler die Voraussetzungen erfüllt, um die Fähigkeit zu sehen. Dies hat einige begrenzte Anwendungsfälle, zum Beispiel wenn du "Klasse" Fähigkeiten in Custom-Packs hinzufügst, wo du nicht möchtest, dass jemand, der ein "Ingenieur" ist, die Fähigkeit "Magier" sieht oder Zugriff auf die "Magier"-Seite erhält.

## Syntax:

    Leeres Beispiel:
    mods.compatskills.VisibilityLock.addVisibilityLock(CTSkill Skill, String... Standardvoraussetzungen);
    
    Arbeitsbeispiel:
    mods.compatskills.VisibilityLock.addVisibilityLock(<skill:reskillable:attack>, "dim|1");