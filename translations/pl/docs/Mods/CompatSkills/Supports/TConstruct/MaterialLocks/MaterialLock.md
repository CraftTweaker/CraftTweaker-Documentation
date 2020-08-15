# Blokady materiałów

## Blokada materiałów

Dzięki implementacji TConstruct w CompatSkills 1.5.0. Teraz masz możliwość zablokowania:

    - Tworzenie narzędzi
    - Tworzenie części
    - Wymiana części
    

Dla określonych materiałów konstruktora Tinkeer.

### Składnia:

    // Pusty przykład:
    mods.compatskills.MaterialLock.addMaterialLock(Identyfikator stringu, String... wymagania);
    
    // Przykład:
    mods.compatskills.MaterialLock.addMaterialLock("drewno", "reskillable:mining|5", "reskillable:magic|7");