# Typy niestandardowe

Rodzaje niestandardowe to nowy potężny sposób tworzenia własnych *niestandardowych* rzeczy na etapie. Zasadniczo to, co pozwala ci to zrobić, to powiedz na przykład na etapie wydarzenia z Minecrafta lub scenie listy bloków, aby zapobiec interakcji lub złamaniu graczy. Korzystanie z [wydarzeń](/Vanilla/Events/IEventManager/) dostarcza CraftTweaker. To daje ci możliwość blokowania większej ilości rzeczy. Tworzenie pełnych niestandardowych doświadczeń w grze bez potrzeby tworzenia dodatkowych modyfikacji. Ponieważ wszystko czego potrzebujesz, to ZenStages i CraftTweaker brzmi całkiem fajnie, co?

This is a still a fairly new system and *may* have some bugs. Jeśli zauważysz jakieś informacje, zgłoś je do [naszego repozytorium](https://github.com/DarkPacks/ZenStages/issues) , abyśmy mogli się z tym zapoznać!

Uwaga: Jest to kompletny typ niestandardowy nic nie sprawdza się wewnętrznie. Będziesz musiał utworzyć i słuchać [Zdarzeń](/Vanilla/Events/IEventManager/) , aby wywołać dostarczone metody w [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) , aby wykonać sprawdzenia. Więc nazwa *slug/name* , którą użyjesz dla tego typu. Aby wiesz co robi.

Uwaga: Jest to również rekomendowany standard, że używasz unikalnych nazw dla **wszystkich** niestandardowych typów.

## Importowanie pakietu

`importuj mods.zenstages.type.CustomStageType;`

## Jak je utworzyć

Typy niestandardowe są tworzone przez [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) przy użyciu następującej metody.

```zenscript
// initCustomType(nazwa ciągu, wartość ciągu);
// initCustomType(nazwa ciągu, string[] wartości);
// / initCustomType(nazwa ciągu, wartość typu);
// initCustomType(nazwa ciągu, wartości typu);
// initCustomType(nazwa ciągu, wartość IIngredient);
// initCustomType(nazwa ciągu, wartości IIngredient[]);
var MyCustomType jako CustomStageType = ZenStager. nitCustomType("blockBreak", [<minecraft:stone>]);
ZenStager.initCustomType("disallowedDimension", 14);
```

Po utworzeniu niestandardowego typu możesz teraz przypisać ten typ do [Etapu](/Mods/GameStages/ZenStages/Stage/). Powołując się na następujące pytania.

```zenscript
// setStage(Stage stage);
MyCustomType.setStage(TestStage);
```

## Jak wykonać sprawdzenie w niestandardowym typie

Ta metoda wymaga ustawienia etapu na typ. Stosowanie powyższej metody. W przeciwnym razie zwróci puste.

```zenscript
// getCustomStage(string name, string value);
// getCustomStage(string name, int value);
// getCustomStage(string name, IIngredient value);
ZenStager.getCustomStage("blockBreak", [<minecraft:stone>]);
```

Ta metoda nie wymaga, aby typ niestandardowy był *Przygotowany* do etapu.

```zenscript
// getCustomType(String name);
ZenStager.getCustomType("blockBreak");
```