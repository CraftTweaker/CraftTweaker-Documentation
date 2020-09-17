# Wsparcie dla blokady poziomu

## PSA:

Ta funkcja działa wyłączając wydarzenie Poziom-Up w Reskillable Niektóre modyfikacje, które wywołują poziom.Up(); metoda bezpośrednio omijają blokady! Zawiera mody takie jak Scavenge: Reskillable and TogetherForever!

## Wsparcie dla blokady poziomu

Wsparcie Level-Lock jest dziwną funkcją pochodzącą z żartu stworzonego przez Skysom pewnego dnia. Ta funkcja jest całkowicie przeznaczona dla tych sadistycznych na tyle aby ją wdrożyć! Bramuje przejście do ustawionego poziomu, a nie od tego poziomu!

CTSkill = [Skill-Bracket Handler](/Mods/CompatSkills/Supports/Reskillable/BracketHandlers/)

### Składnia:

    // Pusty przykład:
    mods.compatskills.SkillLocks.addLevelLock(CTSkill, int level, String... domyślne wymagania);
    
    // Test Przykład:
    mods.compatskills.SkillLocks.addLevelLock(<skill:reskillable:agility>, 11, "reskillable:gathering", 3, "adv|minecraft:husbandry/plant_seed");