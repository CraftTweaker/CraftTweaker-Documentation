# ProjectE

## EMC-Schlösser

Ab 1.5.0 unterstützt CompatSkills EMC Locks für Artikel.

## HINWEISE

Seit 1.9.0 wurde EMC Locks geändert:

    Modifizierte ProjektE-Unterstützung zur Sperre des Transmutationslernens und Kondensatormultiplikation.
    Die Syntax ist die gleiche wie vor mods.compatskills.EMCLock.addEMCLock(int emc, String... erforderlich);
    Spieler werden Gegenstände verwenden können, die nicht die Sperre des emc erfüllen, aber diesen Gegenstand nicht lernen oder duplizieren können. Lernen und Duplizieren erfordert nun auch, dass der Spieler alle Anforderungen erfüllt, die der Gegenstand an ihn stellt.
    Hinweis: Wenn du Gegenstände in die Transmutationstabelle legst, erhältst du den emc aber nicht wieder heraus.
    

### Syntax:

    // Leeres Beispiel:
    mods.compatskills.EMCLock.addEMCLock(int emc, String... gesperrt)
    
    // Beispiel:
    mods.compatskills.EMCLock.addEMCLock(8192, "reskillable:mining|5", "reskillable:magic|7")