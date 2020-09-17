# CTPlayerSkillInfo

## Metodi

### getLevel()

    Esempio:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getLevel();
    
    Questo restituisce il livello dell'Abilità.
    

### getSkillPoints()

    Esempio:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getSkillPoints();
    
    Questo restituisce il numero di Punti Abilità disponibili da spendere per quella Abilità.
    

### getLevelUpCost()

    Esempio:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getLevelUpCost();
    
    Questo restituisce il costo di aumento di livello per l'abilità.
    

### getRank()

    Esempio:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getRank();
    
    Questo restituisce l'attuale Stringa di Rango per l'Abilità.
    

### getSkill()

    Esempio:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getSkill();
    
    Questo restituisce l'Abilità da cui stai ricevendo informazioni.
    

### levelUp()

    Esempio:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).levelUp();
    
    Questo livello aumenta l'Abilità per il giocatore.
    

### respec()

    Esempio:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).respec();
    
    This "un-purchases" all traits in this specific Skill and refunds all Skill Points.
    

### sblocco(CTUnlockable ctUnlockable, IPlayer player)

    Esempio:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).unlock(<trait:reskillable:sidestep>, event.player);
    
    Questo sblocca la caratteristica fornita se disponibile sotto l'abilità al giocatore fornito.