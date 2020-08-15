# Справка о CTPlayerSkillInfo

## Методы

### getLevel()

    Пример:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getLevel();
    
    Это возвращает уровень навыка.
    

### getSkillPoints()

    Пример:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getSkillPoints();
    
    Это даст количество очков навыка, которые можно потратить для этого навыка.
    

### getLevelUpCost()

    Пример:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getLevelUpCost();
    
    Это возвращает стоимость повышения навыка.
    

### getRank()

    Пример:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getRank();
    
    Это возвращает строку текущего ранга для навыка.
    

### getSkill()

    Пример:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getSkill();
    
    Это возвращает информацию о текущем навыке.
    

### levelUp()

    Пример:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).levelUp();
    
    Этот уровень повышает навык для игрока.
    

### respec()

    Пример:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).respec();
    
    Это "снятие" все черты этого конкретного навыка и возвращает все очки навыков.
    

### разблокирован (CTUnlockable ctUnlockable, IPlayer игрок)

    Пример:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).unlock(<trait:reskillable:sidestep>, event.player);
    
    Это разблокирует полученный симптом, если он доступен под навыком для указанного игрока.