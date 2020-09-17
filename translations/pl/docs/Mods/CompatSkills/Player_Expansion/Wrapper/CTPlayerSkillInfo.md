# Informacje o umiejętnościach CTPlayerSkillInfo

## Metody

### getLevel()

    Przykład:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getLevel();
    
    Zwraca poziom Umiejętności.
    

### getSkillPoint()

    Przykład:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getSkillPoints();
    
    Zwraca liczbę Punktów Umiejętności dostępnych do wydania dla tej Umiejętności.
    

### getLevelUpCost()

    Przykład:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getLevelUpCost();
    
    Zwraca koszt Umiejętności w górę.
    

### getRank()

    Przykład:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getRank();
    
    Zwraca bieżący ciąg rankingowy dla Umiejętności.
    

### getSkill()

    Przykład:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getSkill();
    
    Zwraca Umiejętność, z której aktualnie otrzymujesz informacje.
    

### levelUp()

    Przykład:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).levelUp();
    
    To podnosi poziom umiejętności gracza.
    

### szacunek()

    Przykład:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).respec();
    
    To "un-purchases" wszystkie cechy tej umiejętności i zwraca wszystkie Punkty Umiejętności.
    

### odblokuj (CTUnlockable ctUnlockable, IPlayer player)

    Przykład:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).unlock(<trait:reskillable:sidestep>, event.player);
    
    Odblokowuje dostarczoną cechę, jeśli jest ona dostępna pod umiejętnością dostarczonego gracza.