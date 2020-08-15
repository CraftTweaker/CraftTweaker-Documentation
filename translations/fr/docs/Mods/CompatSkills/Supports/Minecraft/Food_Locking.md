# Verrouillage de la nourriture

## Caractéristique:

Le verrou alimentaire est un nouveau type de verrou et permet aux auteurs de paquets de verrouiller la possibilité de manger de la nourriture avec certaines valeurs de faim et de saturation derrière un ensemble de conditions. This has some potentially intressting applications together with RecipeStages, GameStages and our newly added [Skill Change Feature](/Mods/CompatSkills/Supports/Reskillable/Skill_Change_Tweaker/) This would in theory allow for a pack authors to set-up a system where in players can only eat food they can craft, and then allow for the required stages for crafting to be locked behind skill levels.

## Syntaxe de la faim :

    mods.compatskills.FoodTweaker.addHungerLock(int level, String... exigences);
    
    mods.compatskills.FoodTweaker.addHungerLock(3, "dim|1");
    

## Syntaxe de saturation :

    mods.compatskills.FoodTweaker.addSaturationLock(niveau flottant, chaîne... exigences);
    
    mods.compatskills.FoodTweaker.addSaturationLock(1.25, "dim|1");