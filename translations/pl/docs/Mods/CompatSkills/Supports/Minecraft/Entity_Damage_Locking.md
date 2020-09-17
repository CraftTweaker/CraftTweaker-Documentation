# Blokowanie obrażeń jednostek

## Blokowanie obrażeń

Ta funkcja pozwala zablokować zdolność ataku/obrażeń określonych obiektów.

### Składnia:

[Link do IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Pusty przykład:
    mods.compatskills.EntityDamageLock.addEntityLock(IEntityDefinition definition, String... domyślne Wymagania);
    
    # Przykład:
    mods.compatskills.EntityDamageLock.addEntityLock(<entity:minecraft:zombie>, "reskillable:mining|5", "reskillable:magic|7");