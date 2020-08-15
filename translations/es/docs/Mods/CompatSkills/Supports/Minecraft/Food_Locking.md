# Bloqueo de comida

## Característica:

El bloqueo de alimentos es un tipo de bloqueo bastante nuevo, y permite a los autores de envases bloquear la capacidad de comer alimentos con ciertos Valores de Hambre y Saturación detrás de un conjunto de requisitos. This has some potentially intressting applications together with RecipeStages, GameStages and our newly added [Skill Change Feature](/Mods/CompatSkills/Supports/Reskillable/Skill_Change_Tweaker/) This would in theory allow for a pack authors to set-up a system where in players can only eat food they can craft, and then allow for the required stages for crafting to be locked behind skill levels.

## Sintaxis de Hambre:

    mods.compatskills.FoodTweaker.add.UerLock(int level, String... requirements);
    
    mods.compatskills.FoodTweaker.add.UerLock(3, "dim|1");
    

## Sintaxis de saturación:

    mods.compatskills.FoodTweaker.addSaturationLock(float level, String... requirements);
    
    mods.compatskills.FoodTweaker.addSaturationLock(1.25, "dim|1");