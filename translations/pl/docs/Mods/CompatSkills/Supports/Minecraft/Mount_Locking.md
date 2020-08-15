# Zamontuj blokowanie

## Zamontuj blokady

Ta funkcja pozwala dodać blokadę wymagań do konkretnych obiektów!

### Składnia

[Link do IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Pusty przykład:
    mods.compatskills.AnimalTameLock.addTameLock(IEntityDefinition Definition, String... domyślne wymagania)
    
    # Przykład:
    mods.compatskills.AnimalTameLock(<entity:minecraft:pig>, "reskillable:mining|5", "reskillable:magic|7")