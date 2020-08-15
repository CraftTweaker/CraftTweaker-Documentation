# Пользовательские навыки

## Авторы:

Кредиты отправляются в Kindlich для написания большей части реализации Пользовательского Контента!

## Пользовательские навыки:

### Синтаксис:

    Примеры:
    mods.compatskills.SkillCreator.createSkill(название трюма, строка backGroundLocation)
    mods.compatskills.SkillCreator.createNewSkill(Название трюка, строка backGroundLocation)
    
    "createSkill" автоматически присваивает идентификатор моды CompatSkills к местоположению имен.
    Итак, например:
    mods.compatskills.SkillCreator.createSkill("банана", "textures/blocks/stonebrick.png");
    
    Можно внутренне вернуть:
    "compatskills:banana" как имя ресурса для навыка.
    
    Второй не имеет назначенного ModID смысла, вы можете вставить свой собственный.
    mods.compatskills.SkillCreator.createNewSkill("pokemon:throwing", "textures/blocks/stonebrick.png")
    

### Свойства ZenProperties

| Артикул  | Название свойства | Осуществление |
|:-------- |:----------------- | ------------- |
| CrTSkill | имя               | Смотреть ниже |

    // Создает навык как переменная
    вар банана = mods.compatskills.SkillCreator.createSkill("бананана", "текстуры/блоки/каменный брик. ng");
    
    // Задает название "Banana"
    // Имейте в виду, что локализация через файлы .lang невозможна!
    banana.name = "Банана"
    

### ZenSetters/ZenGetters

| Тип метода | Название метода       | Значения                                                |
|:---------- |:--------------------- | ------------------------------------------------------- |
| Setter     | setLevelCap           | Занимает целое число                                    |
| Геттер     | getLevelCap           | Возвращает целое число                                  |
| Setter     | настройки включены    | Занимает логическое значение                            |
| Геттер     | Получено              | Возвращает логическое значение                          |
| Setter     | setSkillPointInterval | Занимает целое число                                    |
| Setter     | setBaseLevelCost      | Занимает целое число                                    |
| Геттер     | getBaseLevelCost      | Возвращает целое число                                  |
| Геттер     | getName               | Возвращает локализованное имя строки                    |
| Setter     | setLevelStaggering    | Занимается строкой[], смотрите конфигурацию для примера |
| Геттер     | getLevel-оглушение    | Возвращает строку[]                                     |
| Setter     | setHidden             | Занимает логическое значение                            |
| Геттер     | isHidden              | Возвращает логическое значение                          |

### Локализация & Местоположение ресурсов:

    Иконки навыков:
    
    Эфиро:
    
    - mods.compatskills.SkillCreator.createSkill(название стиля, ответное местоположение);
        - compatskills:textures/skills/skillname.png
    
    - mods.compatskills.SkillCreator. reateNewSkill(String nameLocation, String backGroundLocation);
        - customResourceLocation:/textures/skills/skillname.png
    
    
    Localizations are placed in:
    
    - compatskills:lang/localeCode.lang
    
    or
    
    - customResourceLocation:lang/localeCode.lang
    

Перейдите по этой ссылке, чтобы увидеть все возможные Locale-Codes! [Языковая страница Gamepedia Minecraft](https://minecraft.gamepedia.com/Language "Gamepedia's Minecraft Language Page")