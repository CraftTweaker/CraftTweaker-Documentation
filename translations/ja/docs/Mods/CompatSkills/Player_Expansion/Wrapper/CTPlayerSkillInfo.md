# CTPlayerSkillInfo

## メソッド

### getLevel()

    例:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getLevel();
    
    これはスキルのレベルを返します。
    

### getSkillPoints()

    例:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getSkillPoints();
    
    これは、そのスキルに使用できるスキルポイントの数を返します。
    

### getLevelUpCost()

    例:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getLevelUpCost();
    
    これはスキルのレベルアップコストを返します。
    

### getRank()

    例:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getRank();
    
    これはスキルの現在のランク文字列を返します。
    

### getSkill()

    例:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getSkill();
    
    これは現在情報を取得しているスキルを返します。
    

### levelUp()

    例:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).levelUp();
    
    プレイヤーのスキルをレベルアップします。
    

### respec()

    例:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).respec();
    
    この特定のスキルのすべての特性を「購入を解除」し、すべてのスキルポイントを返金します。
    

### ロック解除(CTUnlockable ctUnlockable, IPlayer player)

    例:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).unlock(<trait:reskillable:sidestep>, event.player);
    
    指定されたプレーヤーにスキルの下で利用可能な場合、与えられたトレイトをロック解除します。