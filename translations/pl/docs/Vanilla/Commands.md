# Polecenia

CraftTweaker dodaje polecenia, które pomogą Ci w tworzeniu skryptów, są one dostarczane w celu skrócenia czasu tworzenia skryptów.

Prefiks dla poleceń to: `/crafttweaker` lub `/ct`

Możesz również użyć jednego z tych aliasów: `/minetweaker` lub `/mt`

Wszystkie komendy można znaleźć w nazwie przez wykonanie:

`/crafttweaker help`

lub

`/daj pomoc`

# Lista poleceń

## Biomasy

Użycie:

`/crafttweaker biomes`

`/g biomy`

Opis:

Wyświetla wszystkie biomy, które są w grze.

## Typy biomów

Użycie:

`/stwórz biomeTypy słabszego`

`/uj biomeTypy`

Opis:

Wyświetla listę wszystkich biomeTypów, które są w grze.

## BlockInfo

Użycie:

`/crafttweaker blockinfo`

`/dlaj informacje o blokadzie`

Opis:

Aktywuje lub wyłącza czytnik bloków. W trybie informacji o bloku kliknij prawym przyciskiem myszy blok poda nazwę, metadane i dane jednostki kafelka, jeśli dotyczy.

## Bloki

Użycie:

`/stwórz słabsze bloki`

`/ct bloki`

Opis:

Wyświetla listę wszystkich bloków w grze do pliku crafttweaker.log.

## Błędy

Użycie:

`/crafttweaker bugs`

`/Wyczyść błędy`

Opis:

Otwiera przeglądarkę za pomocą trackera błędów GitHub.

## Konflikt

Użycie:

`/crafttweaker conflict`

`/ct konflikt`

Opis:

Wyświetla listę wszystkich sprzecznych przepisów stołu rzemieślniczego do pliku crafttweaker.log.  
Zauważ, że działa tylko na CLIENT z zainstalowanym JEI!

## Discord

Użycie:

`/crafttweaker discord`

`/ct discord`

Opis:

Otwiera przeglądarkę z linkiem do [serwera Discorda](https://www.discord.blamejared.com).

## Dokumentacja

Użycie:

`/crafttweaker docs`

`/uj dokumenty`

Opis:

Otwiera przeglądarkę do tej strony dokumentacji (tak samo jak `/ct wiki`).

## Kopie zapasowe

Użycie:

`/crafttweaker dumpzs`

`/ct dumpzs`

Opis:

Wystawia zrzut ZenScript do folderu crafttweaker_zrzut w katalogu minecraft jako plik HTML.  
Możesz użyć jednego lub więcej celów zrzutu, które będą wykonywane kolejno (jeśli podasz cel dwukrotnie zostanie uruchomiony dwukrotnie).  
Cele można znaleźć przy użyciu automatycznego uzupełnienia (klawisza karty).  
Domyślnie `log`, `html` i `json` są zarejestrowane jako cele.  
Obejmie to wszystkie zarejestrowane uchwyty nawiasów, ZenTypy, funkcje globalne, ZenExpansions wszystkie zarejestrowane pakiety, w tym ich metody.  
Zauważ, że nie wszystkie z nich mogą być używane w skryptach!

## Podmioty

Użycie:

`/stwórz słabsze obiekty`

`/g byty`

Opis:

Wyświetla listę wszystkich obiektów w grze do pliku crafttweaker.log.

## Daj przedmiot

Użycie:

`/crafttweaker dla <minecraft:bedrock>`

`/ct daj <minecraft:bedrock>`

Opis:

Daje graczowi przedmiot za pomocą składni obsługi nawiasów CrT.  
Możesz również zastosować tagi przez dołączenie `. ithTag()` wywołanie.  
Zauważ, że jest to całkiem prosty analizator i może nie działać dla każdego przypadku!

## Dłoń

Użycie:

`/crafttweaker hand`

`/ct dłoń`

Opis:

Wyświetla nazwę przedmiotu w dłoni na czacie.

Skopiuje również nazwę do schowka i wydrukuje wpisy.

## Ekwipunek

Użycie:

`/stwórz słabsze zapasy`

`/l ekwipunek`

Opis:

Wyświetla listę wszystkich przedmiotów w twoim ekwipunku do pliku crafttweaker.log.

## JeiKategorie

Użycie:

`/stwórz słabsze jeiKategorie`

`/ct_jeiCategories`

Opis:

Wyświetla listę wszystkich zarejestrowanych kategorii jei do pliku crafttweaker.log.  
Wymaga JEI do zainstalowania (zaskoczenie)!

## Json

Użycie:

`/crafttweaker json` `/crafttweaker json uciekł`

`/ct json` `/ct json uciekł`

Opis:

Wyświetla nbt przedmiotu w dłoni jako JSON na czacie.  
Ten format różni się od formatowania IData CraftTweaker.  
Możesz kliknąć go aby skopiować do schowka.  
Możesz również dumować `uciekł argumetn` , aby automatycznie uciec z powstałego ciągu.

## Płyny

Użycie:

`/crafttweaker liquids`

`/l ciecze`

Opis:

Wystawia listę wszystkich cieczy w grze do pliku crafttweaker.log.

## Logi

Użycie:

`/crafttweaker log`

`/g dziennika`

Opis:

Wysyła klikalny link, aby otworzyć crafttweaker.log.

## Modyfikacje

Użycie:

`/crafttweaker mods`

`/uj modyfikacje`

Opis:

Wyświetla listę wszystkich modyfikacji i ich wersji w grze do pliku crafttweaker.log i drukuje ją na czacie.

## Nazwisko

Użycie:

`/crafttweaker names [category]`

`/ct names [category]`

Opis:

Wyświetla listę wszystkich przedmiotów w grze do pliku crafttweaker.log.  
Argument `kategorii` jest opcjonalny i rozszerzy listę o odpowiednie informacje:

* spalanie
* tabulatory kreatywne
* Uszkodzone
* wyświetlanie
* zdolność zaklęcia
* wartość jedzenia
* maxdamage
* maksstack
* maxuse
* modid
* rzadkość
* naprawialne
* koszt napraw
* wartość nasycenia
* unloc

Możesz również zobaczyć wszystkie dostępne parametry za pomocą funkcji autouzupełniania klawiszy TAB.

## Nbt

Użycie:

`/crafttweaker nbt`

`/pl/nbt`

Opis:

Wyjścia NBT bloku, którego patrzysz lub który trzymasz do pliku crafttweaker.log.

## OreDict

Użycie:

`/crafttweaker oredict <name>`

`/ct oredict <name>`

Opis:

Wyświetla listę wszystkich wpisów OreDict w grze do pliku crafttweaker.log.

Jeśli podana jest nazwa, nazwy wszystkich elementów zarejestrowanych do oredict zostaną wysłane do pliku crafttweaker.log.

## Mikstury

Użycie:

`/stwórz mikstury słabszych`

`/uj mikstury`

Opis:

Wyświetla listę wszystkich mikstur w grze do pliku crafttweaker.log.

## Nazwy przepisów

Użycie:

`/crafttttweaker recipeNames`  
`/crafttweaker recipeNames [modid]`

`/ct recipeNames`  
`/ct recipeNames [modid]`

Opis:

Wyświetla listę wszystkich nazw receptur w grze do pliku crafttweaker.log.  
Można podać modid do filtrowania wyników.

## Przepisy

Użycie:

`/stwórz słabsze przepisy`

`/wyłącz przepisy`

Opis:

Wyswietla listę wszystkich przepisów w grze do pliku crafttweaker.log.

## Receptury (Hand)

Użycie:

`/stwórz słabsze receptury`

`/wyślij receptury`

Opis:

Wyswietla listę wszystkich przepisów rzemieślniczych dla przedmiotu w ręce gracza w grze do pliku crafttweaker.log.

## Receptury (piec)

Użycie:

`/stwórz słabsze piece`

`/wyłącz piece receptury`

Opis:

Wyswietla listę wszystkich receptur pieca w grze do pliku crafttweaker.log.

## Skrypty

Użycie:

`/crafttweaker scripts`

`/wyłącz skrypty`

Opis:

Wysyła klikalny link, aby otworzyć katalog skryptów.  
Można również wykonać z wiersza poleceń, które zamiast tego drukuje ścieżkę bezwzględną do katalogu do logu.

## Nasiona

Użycie:

`/stwórz słabsze nasiona`

`/g nasiona`

Opis:

Wyświetla listę wszystkich pozycji w rejestrze seed do pliku crafttweaker.log.

## Składnia

Użycie:

`/crafttweaker syntax`

`/e składnia`

Opis:

Odczytuje wszystkie skrypty i wyśle wszystkie błędy, które znajdziesz w składniach. Zauważ, że nie zastosuje się zmian w twoim skrypcie, musisz zrestartować swoją grę, aby je zobaczyć.

## Wiki

Użycie:

`/crafttweaker wiki`

`/wiki`

Opis:

Otwiera przeglądarkę do tej strony wiki (tak samo jak `/ct docs`).

## ZsLint

Użycie:

`/crafttweaker zslint`

`/e zslint`

Opis:

Uruchamia gniazdo zslint.