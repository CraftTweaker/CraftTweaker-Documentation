# Niestandardowe Umiejętności & Cechy

## Kredyty:

Kredyty wychodzą do Kindlich w celu napisania większości implementacji niestandardowych treści!

## Własne cechy:

### Składnia wdrożenia:

    Przykłady:
    mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, String skillLocation, int cost, @Optional String... Wymagania)
    mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, CrTSkill parentSkill, int cost, @Opcjonalny String... Wymagania)
    mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, String skillLocation, int cost, @Opcjonalny String... Wymagania)
    mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, CrTSkill parentSkill, int cost, @Optional String... Wymagania)
    
    
    "traitName" VS "traitLocation" jest taki sam jak w Umiejętności.
    
    "CrTSkill parentSkill" to Skill Bracket Handler.
    
    
    A więc przykładem funkcjonalnym jest:
    test var = mods.compatskills.TraitCreator.createTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    test1 var = mods. ompatskills.TraitCreator.createTrait("test", 2, 3, "<skill:compatskills:banana>", 1, "compatskills:banana|5");
    test2 var mods. ompatskills.TraitCreator.createTrait("broken:test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    var test3 = mods.compatskills.TraitCreator.createTrait("broken:test", 2, 3, "<skill:compatskills:banana>", 1, "compatskills:banana|5");
    

### Właściwości ZenWłaściwości

| Odniesienie | Nazwa Właściwości | Wdrażanie      |
|:----------- |:----------------- | -------------- |
| CrTTrait    | Nazwa             | Zobacz poniżej |
| CrTTrait    | opis              | Zobacz poniżej |

    // Tworzy cechę jako zmienną
    var cechę = mods.compatskills.TraitCreator. reateTrait("test", 2, 3, "compatskills:banana", 1, "compatskills:banana|5");
    
    // Hard-Setts the name to "Test"
    // Bądź świadomy, że lokalizacja przez pliki .lang jest niemożliwa!
    [PLACEHOLDER] trait.name = "Test"
    
    // Hard-Setts the description to "Hello, I'm a Description"
    // Bądź świadomy, że tłumaczenie przez pliki .lang jest niemożliwe!
    Opis = "Witaj, jestem opisem"
    

### ZenSetters/ZenGetters

| Typ metody                 | Nazwa metody      | Wartości                                       |
|:-------------------------- |:----------------- | ---------------------------------------------- |
| Setter                     | Włączone          | Robi Boolean                                   |
| crwdns74646:0crwdne74646:0 | Zostań włączony   | Zwraca wartość logiczną                        |
| crwdns74646:0crwdne74646:0 | getName           | Zwraca zlokalizowaną nazwę ciągu znaków cechy. |
| crwdns74646:0crwdne74646:0 | Uzyskaj Opis      | Zwraca zlokalizowany ciąg opisu cechy          |
| crwdns74646:0crwdne74646:0 | Ikona odzyskiwana | Zwraca lokalizację zasobu                      |
| Setter                     | Ikona zmiany      | Pobiera ciąg lokalizacji zasobu                |

### Lokalizacja & Referencje lokalizacji zasobów:

    Ikony cech:
    
    Either:
    
    - mods.compatskills.TraitCreator.createTrait(String traitName, int x, int y, String skillLocation, int cost, @Optional String... Wymagania);
        - kompaktowe:tekstury/odblokowywalne / traitname.png
    
    - mods.compatskills.TraitCreator.createNewTrait(String traitLocation, int x, int y, String skillLocation, int cost, @Opcjonalny String... Wymagania);
        - customResourceLocation:/textures/unlockables/traitname.png
    
    
    Lokalizacje są umieszczone w:
    
    - compatskills:lang/localeCode.lang
    
    lub
    
    - customResourceLocation:lang/localeCode.lang
    

Przejdź do tego linku, aby zobaczyć wszystkie możliwe kody lokalne! [Strona językowa Gamepedii](https://minecraft.gamepedia.com/Language "Gamepedia's Minecraft Language Page")