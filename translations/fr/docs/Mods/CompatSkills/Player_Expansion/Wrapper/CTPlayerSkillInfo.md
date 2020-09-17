# Compétence CTPlayer

## Méthodes

### getLevel()

    Exemple:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getLevel();
    
    Cela retourne le niveau de la compétence.
    

### getSkillPoints()

    Exemple:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getSkillPoints();
    
    Cela retourne le nombre de points de compétence disponibles à dépenser pour cette compétence.
    

### getLevelUpCost()

    Exemple:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getLevelUpCost();
    
    Cela retourne le coût de niveau pour la compétence.
    

### getRank()

    Exemple:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getRank();
    
    Ceci retourne la chaîne de rang actuelle pour la compétence.
    

### getSkill()

    Exemple:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getSkill();
    
    Cela renvoie la compétence dont vous recevez des informations.
    

### levelUp()

    Exemple:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).levelUp();
    
    Ce niveau augmente la compétence pour le joueur.
    

### respec()

    Exemple:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).respec();
    
    Ce "dé-achat" tous les traits de cette compétence spécifique et rembourse tous les points de compétence.
    

### déverrouiller (CTUnlockable ctUnlockable, joueur IPlayer)

    Exemple:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).unlock(<trait:reskillable:sidestep>, event.player);
    
    Ceci débloque la caractéristique fournie si elle est disponible sous la compétence au joueur fourni.