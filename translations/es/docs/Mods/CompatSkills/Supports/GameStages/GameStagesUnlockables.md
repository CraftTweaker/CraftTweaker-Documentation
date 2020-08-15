# Desbloqueables por etapa

## Desbloqueables

Esta parte del soporte de GameStages se centrará en la forma posterior. Aka "Dummy Traits" para desbloquear GameStages.

## Información del recurso:

Cuando creas un nuevo rasgo tonto te darás cuenta de que faltan algunas cosas:

- Nombre no localizado
- Descripción sin localizar
- Ningún icono está presente

Esto se debe a que se necesitan recursos. En la fase actual CompatSkills no proporciona la capacidad de proporcionar estos nativamente. Hay algunas maneras en torno a esto:

- Utilice BASE que viene con su propio cargador de recursos (sólo funciona si ContentTweaker está presente debido a cómo funciona BASE).
- Usar Resource Loader por Lumien.

La localización es bastante sencilla.

    assets/compatskills/lang/es_us.lang
    
    es_us.lang = Traducción en inglés
    

Sin embargo, la ruta de textura para el icono de rasgo es la siguiente:

    assets/compatskills/textures/unlockables/name.png
    
    Así que si el nombre es "banana", la ruta sería la siguiente:
    
    assets/compatskills/textures/unlockables/banana.png
    

### Sintaxis:

    Ejemplo en blanco:
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable(String gamestage, String name, int x, int y, String SkillName, int cost, @Optional String... defaultRequirements);
    
    Ejemplo(s) de trabajo(s):
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("a", "a", 0, "reskillable:Builing", 3, "stage|test");
    mods.compatskills.GameStageUnlockable. ddGameStageUnlockable("b", "b", 0, 1, "reskillable:Kingdoming", 3, "adv|minecraft:husbandry/plant_seed");
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("c", "c", 0, 2, "reskillable:Builing", 3, "trait|compatskills:b");