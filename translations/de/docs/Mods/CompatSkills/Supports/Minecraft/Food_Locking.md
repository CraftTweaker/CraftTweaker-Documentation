# Essenssicherung

## Merkmal:

Lebensmittelsperre ist eine ganz neue Art des Sperrtyps, und erlaubt es Paketautoren die Fähigkeit zu essen, Lebensmittel mit bestimmten Hunger- und Sättigungswerten hinter einer Reihe von Anforderungen zu essen. This has some potentially intressting applications together with RecipeStages, GameStages and our newly added [Skill Change Feature](/Mods/CompatSkills/Supports/Reskillable/Skill_Change_Tweaker/) This would in theory allow for a pack authors to set-up a system where in players can only eat food they can craft, and then allow for the required stages for crafting to be locked behind skill levels.

## Hunger-Syntax:

    mods.compatskills.FoodTweaker.addHungerLock(int level, String... erforderlich);
    
    mods.compatskills.FoodTweaker.addHungerLock(3, "dim|1");
    

## Sättigungssyntax:

    mods.compatskills.FoodTweaker.addSaturationLock(float level, String... erforderlich);
    
    mods.compatskills.FoodTweaker.addSaturationLock(1.25, "dim|1");