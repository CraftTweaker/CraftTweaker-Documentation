# 食品ロック

## 機能:

フードロックはまったく新しいタイプのロックタイプです。 そして、パックの著者たちは、特定の飢餓値と飽和値を要件に合わせて食べ物を食べる能力をロックすることができます。 This has some potentially intressting applications together with RecipeStages, GameStages and our newly added [Skill Change Feature](/Mods/CompatSkills/Supports/Reskillable/Skill_Change_Tweaker/) This would in theory allow for a pack authors to set-up a system where in players can only eat food they can craft, and then allow for the required stages for crafting to be locked behind skill levels.

## 空腹の構文:

    mods.compatskills.FoodTweaker.addHungerLock(int level, String... requirements);
    
    mods.compatskills.FoodTweaker.addHungerLock(3, "dim|1");
    

## Saturation 構文

    mods.compatskills.FoodTweaker.addSaturationLock(float le, String... requirements);
    
    mods.compatskills.FoodTweaker.addSaturationLock(1.25, "dim|1");