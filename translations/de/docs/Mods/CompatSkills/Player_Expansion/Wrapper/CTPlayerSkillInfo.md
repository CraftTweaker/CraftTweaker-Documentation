# CTPlayerSkillInfo

## Methoden

### getLevel()

    Beispiel:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getLevel();
    
    Dies gibt das Skilllevel zurück.
    

### getSkillPoints()

    Beispiel:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getSkillPoints();
    
    Dies gibt die Anzahl der Fähigkeitspunkte zurück, die für diese Fähigkeit zur Verfügung stehen.
    

### getLevelUpCost()

    Beispiel:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getLevelUpCost();
    
    Dies gibt die Level-Up-Kosten für die Fähigkeit zurück.
    

### getRank()

    Beispiel:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getRank();
    
    Dies gibt den aktuellen Rang für die Fähigkeit zurück.
    

### getSkill()

    Beispiel:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getSkill();
    
    Dies gibt die Fähigkeit zurück, von der du momentan Informationen erhältst.
    

### levelUp()

    Beispiel:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).levelUp();
    
    Dies erhöht die Fähigkeit des Spielers.
    

### respec()

    Beispiel:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).respec();
    
    Dies "nicht kaufen" alle Merkmale dieser speziellen Fähigkeit und erstattet alle Skill Punkte zurück.
    

### entsperren (CTUnlockable ctUnlockable, IPlayer-Player)

    Beispiel:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).entsperren (<trait:reskillable:sidestep>, event.player);
    
    Dies entsperrt das übergebene Merkmal wenn es unter der Fertigkeit für den angegebenen Spieler verfügbar ist.