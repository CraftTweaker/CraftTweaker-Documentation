# CraftTweaker玩家技能信息

## 方法

### getLevel()

    例：
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getLevel();
    
    这将返回指定技能的等级。
    

### getSkillPoints()

    例：
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getSkillPoints();
    
    这将返回玩家在指定技能上可以使用的技能点。
    

### getLevelUpCost()

    例：
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getLevelUpCost();
    
    这将返回指定技能的升级花费。
    

### getRank()

    例：
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getRank();
    
    这将以字符串形式返回指定技能的等级。
    

### getSkill()

    例：
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getSkill();
    
    这将返回你当前正在获取信息的技能。
    

### levelUp()

    例：
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).levelUp();
    
    这将为玩家升级指定技能。
    

### respec()

    例：
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).respec();
    
    这将重置所有属性并返还技能点。
    

### unlock(CTUnlockable ctUnlockable, IPlayer player)

    例：
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).unlock(<trait:reskillable:sidestep>, event.player);
    
    这将为指定玩家解锁技能下的指定属性（如果当前为可解锁状态）。