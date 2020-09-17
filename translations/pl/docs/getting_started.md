# Zacznij od skryptów

CraftTweaker używa niestandardowego języka skryptowego o nazwie `ZenScript`, ZenScript jest odczytywany z `. s` plików, które są przechowywane w folderze `<gamedir>/scripts` , jeśli nie jesteś pewien, gdzie jest ten folder, po prostu uruchom `/ct skrypty` gdy w grze i folder zostanie otwarty.

ZenScript jest językiem skryptowym "top down", co oznacza, że `Import` musi znajdować się na górze pliku, `Deklaracje zmiennych` powinny znajdować się w górnej części pliku, jednak nie ma do tego żadnych ograniczeń, zmienna `` może być zdefiniowana gdziekolwiek w skrypcie, jednak nie będzie on dostępny dla linii powyżej deklaracji `Zmienna`.


Pliki skryptów mają prefiks `.zs` , upewnij się, że to nie `.zs.txt`!

## Czym są skrypty

Skrypty są przechowywane w `<gamedir>/scripts` i są ładowane po dołączeniu gracza do świata, podobnie jak poprzednie wersje CraftTweaker (z wyłączeniem 1. 2), Skrypty CAN zostaną przeładowane, po prostu uruchom `/reload`.

Skrypty są ładowane dwukrotnie podczas wchodzenia do świata jednego gracza, raz po stronie `Serwera` , a następnie po stronie `klienta` jeśli masz `println()` w swoim skrypcie, zobaczysz go dwukrotnie, ponieważ działa dwukrotnie.

Nie oznacza to, że zmiany są stosowane dwukrotnie jednak zmiany dokonywane przez skrypty mogą być dwustronne, więc niektóre zmiany, Na przykład ustawienie lokalizacji, uruchamiane tylko po stronie klienta, ale dodawanie przepisów odbywa się tylko po stronie serwera.

Podczas dołączania do serwera serwer wysyła swoje skrypty do klienta, a klient obsługuje te skrypty. Oznacza to, że klient bez żadnych skryptów, może dołączyć do serwera i pobrać zmiany (przydatne, jeśli chcesz wyłączyć element na serwerze, ale nie chcesz zmuszać klientów do pobierania dodatkowych plików!)


### Pisanie pierwszego skryptu

Aby rozpocząć od skryptów możesz utworzyć bardzo prosty plik, zwany `witaj. s` w folderze `<gamedir>/scripts>` ; Jeśli nie jesteś pewien, gdzie jest folder, po prostu uruchom `/ct skrypty` i powinno się je otworzyć!

W `hello.zs` umieść następującą linię

```zenscript
println("Witaj świecie!");
```

Teraz załaduj Minecraft i spójrz na `<gamedir>/logs/crafttweaker. og` plik (lub uruchom `/ct log` aby plik został otwarty w domyślnym edytorze tekstowym).

Plik `crafttweaker.log` znajduje się w `<gamedir>/logs` i może być odczytywany przez każdy program, który może odczytywać pliki zwykłe.

Zalecane jest użycie Notepad++, Sublime Text lub VSCode do edycji plików skryptu, jednak każdy program zrobi to.

Przy wyborze programu używanego do edycji skryptów zajrzyj do tego, które podświetlenia składni są dostępne, najczęściej używanymi edytorami tekstowymi mają wsparcie dla ZenScript za pomocą wtyczki.



### Plik crafttweaker.log

Plik `crafttweaker.log` używa konkretnej składni w jego wyjściu, składnia to:

```
[GG:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

Korzystając z powyższego przykładu, wyniki byłyby następujące:

```
[14:58:06.697][DONE][SERVER][INFO] Witaj świecie!
```

Składnia jest używana do celów debugowania i jedyny czas kiedy składnia nie jest używana, to dla komend, w którym to przypadku po prostu wydrukuje wiadomość, jest to czynione w ten sposób, że wklejanie informacji po cenach dumpingowych jest łatwiejsze.

### Komentarze

Komentarze mogą być używane do poprawy czytelności plików skryptów i łatwiejszego do zrozumienia!

ZenScript obsługuje 3 typy komentarzy:

Pojedynczy wiersz: `// Jestem pojedynczym komentarzem linii!`

Alternatywna pojedyncza linia: `# Jestem również pojedynczym komentarze!`

Wielolinia:
```
/* I'm 
a
multiline comment! */
```

Wystarczy zauważyć, że `#` komentarze są również używane dla PreProcessorów (link TODO do PreProcessorów, gdy są one udokumentowane), więc chociaż nadal są one ważnymi uwagami, mogą powodować niepożądane działania niepożądane. 