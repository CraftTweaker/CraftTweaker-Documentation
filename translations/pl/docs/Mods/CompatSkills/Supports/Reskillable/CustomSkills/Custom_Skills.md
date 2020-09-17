# Niestandardowe umiejętności

## Kredyty:

Kredyty wychodzą do Kindlich w celu napisania większości implementacji niestandardowych treści!

## Niestandardowe Umiejętności:

### Składnia wdrożenia:

    Przykłady:
    mods.compatskills.SkillCreator.createSkill(Nazwa ciągu, String backGroundLocation)
    mods.compatskills.SkillCreator.createNewSkill(String nameLocation, String backGroundLocation)
    
    "createSkill" automatycznie przypisuje KompatSkills ModID do lokalizacji Zasobów Nazwy.
    Na przykład:
    mods.compatskills.SkillCreator.createSkill("banana", "textures/blocks/stonebrick.png");
    
    Wewnętrznie wrócił:
    "compatskills:banana" jako nazwa lokalizacji zasobu dla tej umiejętności.
    
    Drugi nie ma przypisanego ModID co oznacza, że możesz wstawić własny.
    mods.compatskills.SkillCreator.createNewSkill("pokemon:throwing", "textures/blocks/stonebrick.png")
    

### Właściwości ZenWłaściwości

| Odniesienie | Nazwa Właściwości | Wdrażanie      |
|:----------- |:----------------- | -------------- |
| CrTSkill    | Nazwa             | Zobacz poniżej |

    // Tworzy umiejętność jako zmienną
    banana var = mods.compatskills.SkillCreator.createSkill("banana", "textures/blocks/stoneBlok. ng");
    
    // Hard-Setts the name to "Banana"
    // Bądź świadomy, że tłumaczenie przez pliki .lang jest niemożliwe!
    banana.name = "Banana"
    

### ZenSetters/ZenGetters

| Typ metody                 | Nazwa metody          | Wartości                                                |
|:-------------------------- |:--------------------- | ------------------------------------------------------- |
| Setter                     | setLevelCap           | Zajmuje liczbę całkowitą                                |
| crwdns74646:0crwdne74646:0 | getLevelCap           | Zwraca liczbę całkowitą                                 |
| Setter                     | Włączone              | Robi Boolean                                            |
| crwdns74646:0crwdne74646:0 | Zostań włączony       | Zwraca wartość logiczną                                 |
| Setter                     | setSkillPointInterval | Zajmuje liczbę całkowitą                                |
| Setter                     | setBaseLevelCost      | Zajmuje liczbę całkowitą                                |
| crwdns74646:0crwdne74646:0 | getBaseLevelCost      | Zwraca liczbę całkowitą                                 |
| crwdns74646:0crwdne74646:0 | getName               | Zwraca zlokalizowaną nazwę ciągu znaków                 |
| Setter                     | setLevelStaggering    | Zajmie ciąg znaków[], zobacz konfigurację dla przykładu |
| crwdns74646:0crwdne74646:0 | getLevelStaggering    | Zwraca ciąg znaków []                                   |
| Setter                     | setHidden             | Robi Boolean                                            |
| crwdns74646:0crwdne74646:0 | isHidden              | Zwraca wartość logiczną                                 |

### Lokalizacja & Referencje lokalizacji zasobów:

    Ikony umiejętności:
    
    Either:
    
    - mods.compatskills.SkillCreator.createSkill(nazwa ciągu, backGroundLocation);
        - compatskills:textures/skills/skillname.png
    
    - mods.compatskills.SkillCreator. reateNewSkill(Nazwa ciągu, BackGroundLocation);
        - customResourceLocation:/textures/skills/skillname.png
    
    
    Lokalizacje są umieszczone w:
    
    - compatskills:lang/localeCode.lang
    
    lub
    
    - customResourceLocation:lang/localeCode.lang
    

Przejdź do tego linku, aby zobaczyć wszystkie możliwe kody lokalne! [Strona językowa Gamepedii](https://minecraft.gamepedia.com/Language "Gamepedia's Minecraft Language Page")