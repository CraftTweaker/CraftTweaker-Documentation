# Пользовательские навыки & симптомы

## Авторы:

Кредиты отправляются в Kindlich для написания большей части реализации Пользовательского Контента!

## Пользовательские симптомы:

### Синтаксис:

    Примеры:
    mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, String skillLocation, int cost, @Optional String... requirements)
    mods.compatskills.TraitCreator.createTrait(tring traitName, int x, int y, int y, CrTSkill parentSkill, int cost, @Optional String... Требования)
    mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, String skillLocation, int cost, @Optional String... requirements)
    mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, CrTSkill parentSkill, int cost, @Optional String... требования)
    
    
    "traitName" VS "traitLocation" аналогично навыкам.
    
    "CrTSkill parentSkill" - обработчик уровня мастерства.
    
    
    Таким образом, функциональным примером может быть:
    var test = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    var test1 = моды. ompatskills.TraitCreator.createTrait("test", 2, 3, "<skill:compatskills:banana>", 1, "compatskills:banana|5");
    var test2 = моды. ompatskills.TraitCreator.createTrait("broken:test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    var test3 = mods.compatskills.TraitCreator.createTrait("broken:test", 2, 3, "<skill:compatskills:banana>", 1, "compatskills:banana|5");
    

### Свойства ZenProperties

| Артикул  | Название свойства | Осуществление |
|:-------- |:----------------- | ------------- |
| CrTTrait | имя               | Смотреть ниже |
| CrTTrait | описание          | Смотреть ниже |

    // Создает симптомы как переменную
    характеристики вара = mods.compatskills.TraitCreator. reateTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    // Задать название "Test"
    // Имейте в виду, что локализация через .lang файлы невозможна!
    trait.name = "Test"
    
    // Задает описание "Привет, я описание"
    // Имейте в виду, что это делает локализацию с помощью .lang файлов невозможным!
    trait.description = "Привет, я описание"
    

### ZenSetters/ZenGetters

| Тип метода | Название метода    | Значения                                           |
|:---------- |:------------------ | -------------------------------------------------- |
| Setter     | настройки включены | Занимает логическое значение                       |
| Геттер     | Получено           | Возвращает логическое значение                     |
| Геттер     | getName            | Возвращает локализованное имя строки симптома      |
| Геттер     | getОписание        | Возвращает описание локализованной строки симптома |
| Геттер     | получить значок    | Возвращает местоположение ресурсов                 |
| Setter     | Иконка изменения   | Захват строки расположения ресурсов                |

### Локализация & Местоположение ресурсов:

    Значки симптомов:
    
    Эфиро:
    
    - mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, int skillLocation, int cost, @Optional String... requirement);
        - compatskills:textures/unlockables/traitname.png
    
    - mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, int skills Location, int cost, Optional String... requirements);
        - customResourceLocation:/textures/unlockables/traitname.png
    
    
    Локализации расположены в:
    
    - compatskills:lang/localeCode.lang
    
    или
    
    - customResourceLocation:lang/localeCode.lang
    

Перейдите по этой ссылке, чтобы увидеть все возможные Locale-Codes! [Языковая страница Gamepedia Minecraft](https://minecraft.gamepedia.com/Language "Gamepedia's Minecraft Language Page")