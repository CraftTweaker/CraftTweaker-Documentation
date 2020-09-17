# Etapy odblokowania

## Odblokowane

Ta część wsparcia GameStages będzie koncentrować się na późniejszej formie. Aka "Dummy Cechy" do odblokowania GameStages.

## Informacje o zasobach:

Podczas tworzenia nowej cechy manekina zauważysz, że brakuje kilku rzeczy:

- Niezlokalizowana nazwa
- Niezlokalizowany opis
- Brak ikony

Wynika to z tych rzeczy wymagających zasobów. Na obecnym etapie CompatSkills nie zapewnia możliwości zapewnienia ich w sposób naturalny. Oto kilka sposobów:

- Użyj BASE z własnym ładowaniem zasobów (działa tylko wtedy, gdy ContentTweaker jest obecny ze względu na sposób działania BASE).
- Użyj Ładowania Zasobów przez Lumiena.

Lokalizacja jest dość prosta do przodu.

    assets/compatskills/lang/en_us.lang
    
    en_us.lang = angielskie tłumaczenie
    

Jednakże ścieżka tekstury dla ikony cechy jest następująca:

    assets/compatskills/textures/unlockables/name.png
    
    Więc jeśli nazwa jest "banana", Ścieżka byłaby następująca:
    
    assets/compatskills/textures/unlockables/banana.png
    

### Składnia:

    Pusty przykład:
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable(String gamestage, String name, int x, int y, String skillName, int cost, @Optional String... domyślne wymagania);
    
    Przykłady pracy(ów):
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("a", "a", 0, "reskillable:gathering", 3, "stage|test");
    mods.compatskills.GameStageUnlockable. ddGameStageUnlockable("b", "b", 0, 1, "przekwalifikowalne:zbieranie", 3, "adv|minecraft:husbandry/plant_seed");
    mods.compatskills.GameStageUnlockable.addGameStageUnlockable("c", "c", 0, 2, "przekwalifikowalne:zbieranie", 3, "cecha|kompaktowe:b");