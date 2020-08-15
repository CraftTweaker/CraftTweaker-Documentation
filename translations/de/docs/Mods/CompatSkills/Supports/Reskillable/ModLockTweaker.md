# Mod-Lock Tweaker

## Mod-Locking

Dies wurde als Möglichkeit für Konfigurationen in 1.2.0 hinzugefügt und hat nun eine CrT ZenMethod implementiert, um sie zu unterstützen. Dies kann auch durch die Konfigurationen wie bereits erwähnt erreicht werden.

Mod-Locks erlauben es dir, alle Gegenstände einer bestimmten Mod hinter einer bestimmten Sperre zu sperren.

### Syntax:

    // Leeres Beispiel
    mods.compatskills.ModLock.addModLock(String modId, String... gesperrt);
    
    // Arbeitsbeispiel:
    mods.compatskills.ModLock.addModLock("minecraft", "reskillable:building|4");
    
    Die obige Sperre wird alles aus dem Mod "minecraft" hinter einer Sperre von "building 4" sperren