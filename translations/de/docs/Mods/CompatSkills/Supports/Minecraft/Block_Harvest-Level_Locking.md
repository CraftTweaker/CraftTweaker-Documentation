# Blockiere die Verriegelung der Erntestufe

## Merkmal:

Diese Sperre macht es so, dass der Spieler keinen Block mit dem Set Erntestufe zerstören kann, wenn nicht ein Set an Anforderungen erfüllt wird. Zum Beispiel unten kannst du sehen, dass Blöcke mit einer Erntestufe von 3 nur am Ende gebrochen werden können. Dieses Beispiel ist in der Praxis nicht so großartig, aber es zeigt, was diese Art von Schleusen zu tun vermag.

## Syntax:

    mods.compatskills.HarvestLock.addBlockLevelLock(int level, String... erforderlich);
    
    mods.compatskills.HarvestLock.addBlockLevelLock(3, "dim|1");