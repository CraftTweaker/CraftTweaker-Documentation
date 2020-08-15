# Rituale Unterstützung

## Rituale:

Dies wird die Aktivierung eines Rituals abbrechen, wenn die spezifischen Anforderungen für die Aktivierung der Rituale nicht erfüllt sind.

### Befehl:

Derzeit gibt es einen in-game Befehl zum Dumping aller Ritual Strings für den Ritual Handler. Der Befehl ist: /ct ritualDump und wird alle rituellen Zeichenketten an die "CraftTweaker.log" ausgeben.

### Vor-1.4.0:

#### Syntax:

    Leeres Beispiel:
    mods.compatskills.RitualHandler.addRitualLock(String failureMessage, String ritual, String... requirements)
    
    Testbeispiel:
    mods.compatskills.RitualHandler.addRitualLock("Da das Ritual aktiviert ist, erreichen Sie nicht das erwartete Ergebnis", "ritualCrushing", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed")
    

### Nach-1.4.0:

Seit CompatSkills 1.4.0 wurden einige neue ZenMethoden hinzugefügt sowie einige Änderungen an der bestehenden Syntax vorgenommen. Wir haben auch ein Problem behoben, das Ritual Support und Binding Support nicht richtig funktioniert!

#### Syntax:

    Leeres Beispiel:
    mods.compatskills.RitualHandler.addRitualLock(String-Ritual, String... erforderlich);
    mods.compatskills.RitualHandler.addRitualCostLock(int activationCost, String... Anforderungen);
    mods.compatskills.RitualHandler.addRitualCrystalLock(int crystalLevel, String... requirements);
    
    Testbeispiel:
    mods.compatskills.RitualHandler.addRitualLock("ritualCrushing", "reskillable:magic|7");
    mods.compatskills.RitualHandler.addRitualCostLock(500, "reskillable:magic|7";
    mods.compatskills.RitualHandler.addRitualCrystalLock(1, "reskillable:magic|7");
    

#### Fehlermeldung

Wie bei der Bindungsunterstützung wurde die Fehlermeldung in einen lokalisierbaren String übertragen, anstatt in der CrT-Methode. Dies macht es so dass Autoren von Ressourcenpacks die Zeichenketten übersetzen und ändern können, da sie viel einfacher mögen.

    compatskills.bloodmagic.ritualError=Während das Ritual aktiviert ist, erreichen Sie nicht das erwartete Ergebnis
    

Einige andere Änderungen sind zum Beispiel, dass die Standard-Fehlermeldung nun als Teil einer Statuschatnachricht an den Spieler angezeigt wird. Das bedeutet, dass die Nachricht nur dem Spieler angezeigt wird und nicht im Chat für alle sichtbar ist. Das bedeutet auch, dass es jetzt neben den Anforderungen im Chat angezeigt wird. Das macht es dem Spieler leichter zu erkennen, was er im Schloss vermisst.