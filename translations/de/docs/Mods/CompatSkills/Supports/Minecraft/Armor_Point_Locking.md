# Rüstungswert-Sperre

## Merkmal:

Diese Art von Schloß sperrt die Fähigkeit Rüstung, die eine bestimmte Anzahl an Rüstungspunkten hinter einer Reihe von Anforderungen bietet. Das bedeutet, wenn eine Rüstung 0 zur Verfügung stellt. 5 Rüstungspunkte, wie im Beispiel unten, kannst du ihn sperren, wenn du nur am Ende (Aka Dim 1)!

## Syntax:

    mods.compatskills.ArmorLock.addArmorLock(double Rüstung, String... erforderlich);
    
    mods.compatskills.ArmorLock.addArmorLock(0.75, "dim|1");