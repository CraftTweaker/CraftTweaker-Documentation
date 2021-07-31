# CTPlayerSkillInfo

## Methods

### getLevel()
```
Example:
event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getLevel();

This returns the level of the Skill.
```


### getSkillPoints()
```
Example:
event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getSkillPoints();

This return the number of Skill Points available to spend for that Skill.
```



### getLevelUpCost()
```
Example:
event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getLevelUpCost();

This returns the Level-Up Cost for the Skill.
```


### getRank()
```
Example:
event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getRank();

This returns the current Rank String for the Skill.
```


### getSkill()
```
Example:
event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getSkill();

This returns the Skill you're currently getting info from.
```


### levelUp()
```
Example:
event.player.skillData.getSkillInfo(<skill:reskillable:agility>).levelUp();

This levels up the Skill for the player.
```



### respec()
```
Example:
event.player.skillData.getSkillInfo(<skill:reskillable:agility>).respec();

This "un-purchases" all traits in this specific Skill and refunds all Skill Points.
```



### unlock(CTUnlockable ctUnlockable, IPlayer player)
```
Example:
event.player.skillData.getSkillInfo(<skill:reskillable:agility>).unlock(<trait:reskillable:sidestep>, event.player);

This unlocks the provided trait if available under the skill to the provided player.
```