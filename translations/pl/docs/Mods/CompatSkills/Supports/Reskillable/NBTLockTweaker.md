# NBT-Lock Tweaker

## Blokada NBT

Blokady NBT są specyficzne dla CompatSkills 1.4.0+ i obecnie są najpotężniejszą funkcją. Możesz zablokować konkretne tagi NBT ograniczone do danego identyfikatora moda lub na każdym elemencie w grze.

Oznacza to, że dowolny element znajdujący się w tym tagu NBT będzie miał do niego zastosowaną blokadę.

### Składnia:

    // Pusty przykład:
    mods.compatskills.NBTLock.addGenericNBTLock(IDI, String... zablokowane)
    mods.compatskills.NBTLock.addModNBTLock(String modId, IData tag, String... zablokowane)
    
    //// Przykład:
    // Zablokuj jedwabne dotknięcie
    addicNBTLock({ench:[{id: 33 as short}]}, "reskillable:magic|10");
    
    // Blokady Unbreaking (No Level-Specified)
    addModNBTLock ("minecraft", {ench:[{id: 34 as short}]}, "reskillable:gathering|6");
    

Ma to pewne poważne konsekwencje. Oznacza to na przykład, że jako twórca pakietów możesz zablokować:

- Materiały drukujące
- Modyfikatory Tinkera
- Zaklęcia
- Wartości energetyczne

I o wiele więcej, o ile znasz tagi NBT, który go stosuje!