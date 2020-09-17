# Angriffsschadens-Sperrung

## Merkmal:

Diese Funktion sperrt die Fähigkeit des Spielers, eine Waffe/ein Werkzeug mit einem Angriffsschaden in Höhe oder größer als der festgelegte Betrag zu verwenden. Das bedeutet, wie im Beispiel unten, jede Waffe mit Angriffsschaden 0.75 oder höher ist nur am Ende einsetzbar.

For reference: 1 Damage = 0.5 Hearts You can see a quick reference guide to damage under [This Link](https://minecraft.gamepedia.com/Damage#Dealing_damage)

## Syntax:

    mods.compatskills.DamageLock.addDamageLock(Doppelschaden, String... erforderlich);
    
    mods.compatskills.DamageLock.addDamageLock(0.75, "dim|1");