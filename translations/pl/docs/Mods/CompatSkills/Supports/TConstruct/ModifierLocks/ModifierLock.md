# Blokady materiałów

## Blokada materiałów

Dzięki implementacji TConstruct w CompatSkills 1.5.0. Teraz masz możliwość zablokowania:

    - Dodanie modyfikatora
    

Dla specyficznych modyfikatorów Tinker Construct.

### Składnia:

    // Pusty przykład:
    mods.compatskills.ModifierLock.addModifierLock(Identyfikator stringu, String... wymagania);
    
    // Przykład:
    mods.compatskills.ModifierLock.addModifierLock("harvestwidth", "reskillable:mining|5", "reskillable:magic|7");