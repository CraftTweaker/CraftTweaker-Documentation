# CraftTweaker玩家数据

## 方法

### getHasAnyAbilities()

    例：
    event.player.skillData.getHasAnyAbilities;
    
    这将根据玩家是否拥有“可解锁”类型的技能返回布尔值。
    

### getSkillInfo（ skill 为 CTSkill 类型）

    例：
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>); 
    
    这将返回指定技能的 "PlayerSkillInfo" （玩家技能信息） ！