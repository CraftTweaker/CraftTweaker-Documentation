# 食物锁定

## 功能：

食物锁定是一种新的锁定类型，它允许整合作者锁定玩家在设定条件之外食用提供特定饥饿度和饱和度的食物的能力。 这个功能配合 RecipeStages, GameStages 和我们新添加的[Skill Change 功能](/Mods/CompatSkills/Supports/Reskillable/Skill_Change_Tweaker/)会有一些有趣的应用。这个功能理论上提供整合作者建立一个系统，使得玩家只能食用他们能合成的食物，并且使得制作食物的能力被技能等级限制。

## 饥饿度限制语法：

    mods.compatskills.FoodTweaker.addHungerLock(int level, String... requirements);
    
    mods.compatskills.FoodTweaker.addHungerLock(3, "dim|1");
    

## 饱和度限制语法：

    mods.compatskills.FoodTweaker.addSaturationLock(float level, String... requirements);
    
    mods.compatskills.FoodTweaker.addSaturationLock(1.25, "dim|1");