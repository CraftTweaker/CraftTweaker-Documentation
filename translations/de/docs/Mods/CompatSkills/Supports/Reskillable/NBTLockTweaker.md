# NBT-Lock Tweaker

## NBT-Sperren

Die NBT-Locks sind spezifisch für CompatSkills 1.4.0+ und sind derzeit das mächtigste Feature. Du kannst bestimmte NBT-Tags entweder auf eine bestimmte Mod-ID oder auf jeden Gegenstand im Spiel sperren.

Dies bedeutet, dass jedes Element, das das NBT-Tag enthält, die Sperre auf ihn angewendet wird.

### Syntax:

    // Leeres Beispiel:
    mods.compatskills.NBTLock.addGenericNBTLock(IData Tag, String... gesperrt)
    mods.compatskills.NBTLock.addModNBTLock(String modId, IData Tag, String... gesperrt)
    
    //// Arbeitsbeispiel:
    // Sperrt Silk-Touch
    addGenericNBTLock({ench:[{id: 33 as short}]}, "reskillable:magic|10");
    
    // Blockiert Unbrechende (No Level Specified)
    addModNBTLock("minecraft", {ench:[{id: 34 as short}]}, "reskillable:collecing|6");
    

Dies hat einige starke Auswirkungen. Dies bedeutet zum Beispiel, dass Sie als Paketmacher sperren können:

- Tinkermaterialien
- Tinker-Modifikatoren
- Verzauberungen
- Energie-Werte

Und noch viel mehr, solange Sie das NBT-Tag kennen, das es verwendet!