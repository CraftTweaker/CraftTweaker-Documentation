# Этап Разблокируется

## Разблокировать

Эта часть поддержки GameStages будет сосредоточена на более поздней форме. Ака "Dummy Traits" за разблокировку GameStages.

## Информация о ресурсах:

При создании нового манекена вы заметите, что несколько вещей отсутствуют:

- Нелокализованное имя
- Описание без локализации
- Нет иконки

Это связано с тем, что требуются ресурсы. На данном этапе CompatSkills не обеспечивает этих родных возможностей. Вокруг есть несколько способов:

- Используйте BASE, который поставляется с собственным загрузчиком ресурсов (работает только если ContentTweaker присутствует из-за того, как работает BASE).
- Использовать загрузчик ресурсов от Lumien.

Локализация очень прямолинейна.

    assets/compatskills/lang/ru_us.lang
    
    ru_us.lang = английский перевод
    

Однако путь к текстуре для значка симптомов следующий:

    assets/compatskills/textures/unlockables/name.png
    
    Таким образом, если имя "банана", путь будет следующим:
    
    assets/compatskills/textures/unlockables/banana.png
    

### Синтаксис:

    Пример пустого типа:
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable(String gamestage, String name, int x, int y, String skillName, int cost, @Optional String... defaultRequirements);
    
    Примеры работы:
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("a", "a", 0, "reskillable:gathering", 3, "stage|test");
    mods.compatskills.GameStageUnlockable. ddGameStageUnlockable("b", "b", 0, 1, "reskillable:gathering", 3, "adv|minecraft:husbandry/plant_seed");
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("c", "c", 0, 2, "reskillable:gathering", 3, "trait|compatskills:b");