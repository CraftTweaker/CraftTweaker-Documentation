# Blocco Cibo

## Caratteristica:

Il bloccaggio degli alimenti è un nuovo tipo di blocco, e permette agli autori del pacchetto di bloccare la capacità di mangiare cibo con determinati valori di fame e saturazione dietro una serie di requisiti. Questo ha alcune applicazioni potenzialmente intressting insieme a RecipeStages, GameStages e la nostra nuova [Abilità Modifica Funzionalità](/Mods/CompatSkills/Supports/Reskillable/Skill_Change_Tweaker/) Questo permetterebbe in teoria agli autori di un pacchetto di configurare un sistema in cui i giocatori possono mangiare solo cibo che possono creare, e poi consentire che le fasi necessarie per la creazione di essere bloccate dietro i livelli di abilità.

## Sintassi Fame

    mods.compatskills.FoodTweaker.addHungerLock(int level, String... requisiti);
    
    mods.compatskills.FoodTweaker.addHungerLock(3, "dim<unk> 1");
    

## Sintassi Di Saturazione:

    mods.compatskills.FoodTweaker.addSaturationLock(float level, String... requisiti);
    
    mods.compatskills.FoodTweaker.addSaturationLock(1.25, "dim<unk> 1");