# Blokowanie oswajania

## Blokowanie oswajania zwierząt

Ta funkcja pozwala na dodanie bloków wymagań do oswojania określonych obiektów.

### Składnia

[Link do IEntityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Pusty przykład:
    mods.compatskills.AnimalTameLock.addTameLock(IEntityDefinition Definition, String... domyślne wymagania);
    
    # Przykład:
    mods.compatskills.AnimalTameLock(<entity:minecraft:wolf>, "reskillable:mining|5", "reskillable:magic|7");