# ITICMaterial

Konstrukcja Tinkers IMaterial (nie może być mylona z [ContentTweaker's IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/)) jest tym, co można zrobić z narzędzia konstrukcyjnego Tinker.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj modtweaker.tconstruct.ITICMaterial;`

## Pobieranie takiego obiektu

Możesz pobrać obiekt ITICMaterial za pomocą [ITICMaterial Handler](/Mods/Modtweaker/TConstruct/Brackets/Bracket_Material/):

```zenscript
val stone = <ticmat:stone>;
```

## Pola dodatkowe

Możesz otrzymać/ustawić następujące pola:

| ZenGetter                | ZenSetter                | Typ zwrotu/Ustawienia                                                                   | Opis                                                                            |
| ------------------------ | ------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| getName                  |                          | ciąg znaków                                                                             | Nazwa Materiału                                                                 |
| definicja                |                          | [Definicja IMateriałowa](/Mods/Modtweaker/TConstruct/Materials/ITICMaterialDefinition/) | Definicja materiału                                                             |
| Trwałość Głowica         | Trwałość Głowica         | odcień                                                                                  | Głowica Narzędzi wykonana z tego materiału ma tę wytrzymałość                   |
| miningSpeedHead          | miningSpeedHead          | zmiennoprzecinkowe                                                                      | Głowica Narzędzi wykonana z tego materiału ma tę prędkość wydobywania           |
| Głowa ataku              | Głowa ataku              | zmiennoprzecinkowe                                                                      | Głowica Narzędzi wykonana z tego materiału ma obrażenia od ataku                |
| harvestLevelHead         | harvestLevelHead         | odcień                                                                                  | Głowica Narzędzi wykonana z tego materiału ma ten poziom zbiorów                |
| Trwałość                 | Trwałość                 | odcień                                                                                  | Uchwyt narzędziowy wykonany z tego materiału ma tę wytrzymałość                 |
| modifierHandle           | modifierHandle           | zmiennoprzecinkowe                                                                      | Uchwyt narzędziowy wykonany z tego materiału ma ten modyfikator trwałości       |
| trwałośćExtra            | trwałośćExtra            | odcień                                                                                  | Dodatkowe części narzędzi wykonane z tego materiału mają tę podstawową trwałość |
| Modyfikator strzałek     | Modyfikator strzałek     | zmiennoprzecinkowe                                                                      | Strzały wykonane z tego materiału mają ten modyfikator trwałości                |
| BonusAmunicja do strzały | BonusAmunicja do strzały | odcień                                                                                  | Strzała wykonana z tego materiału ma ten uzależniony ammonis                    |
| fletchingModifier        | fletchingModifier        | zmiennoprzecinkowe                                                                      | Fletchungy wykonane z tego materiału mają ten modyfikator trwałości             |
| precyzja fletching       | precyzja fletching       | zmiennoprzecinkowe                                                                      | Fletchungy wykonane z tego materiału zapewniają tę dokładność                   |

## Metody

- mecz logiczny (ITICMaterial inny); → zwraca jeśli dany materiał jest równy `innym`