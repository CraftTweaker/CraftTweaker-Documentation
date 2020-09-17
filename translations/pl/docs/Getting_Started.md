# Zacznij od skryptów

CraftTweaker używa niestandardowego języka skryptowego o nazwie `ZenScript`, ZenScript jest odczytywany z `. s` plików, które są przechowywane w folderze `<gamedir>/scripts`.

ZenScript jest językiem skryptowym "top down", co oznacza, że `Import` musi znajdować się na górze pliku, `Deklaracje zmiennych` powinny znajdować się w górnej części pliku, jednak nie ma do tego żadnych ograniczeń, zmienna `` może być zdefiniowana gdziekolwiek w skrypcie, jednak nie będzie on dostępny dla linii powyżej deklaracji `Zmienna`.

## Wprowadzanie

Czy kiedyś udało się zbudować paczkę modów, a następnie znalazł to, że tylko rzucenie kilku modów nie dało Ci zintegrowanego doświadczenia? Ponieważ mody są rozwijane względnie niezależnie od siebie, jeden może czuć się nadmiernie obciążony w porównaniu z drugim. Albo możesz wierzyć, że na niektóre przedmioty będzie lepszy przepis. Lub może chcesz usunąć przedmiot z gry bez konieczności usuwania całego moda. Albo możesz odkryć, że niektóre wpisy słownika rudy mają zbyt wiele lub zbyt mało elementów. Teraz możesz to wszystko zrobić - każdy z nich z jedną instrukcją dla MineTweaker.

Oprócz podstawowej funkcji wspierającej Vanilla minecraft, biblioteki integracji modów są dostarczane z modyfikacjami, aby nie tylko modyfikować przepisy vanilla; ale także receptury i zachowanie modów maszyny.

## Skrypty

Skrypty są przechowywane w `<minecraftdir>/scripts` i są ładowane w fazie `PreInitialization` Minecraft, w odróżnieniu od poprzednich wersji CraftTweaker, skryptów nie można ponownie załadować, jest to spowodowane zmianami wprowadzonymi przez Mojang w 1. 2 i nie ma żadnych prac. Skrypty muszą być również na **obu, serwerze ORAZ instancji klienta** , aby działać

Pliki skryptów mają prefiks `.zs` i mogą być skompresowane do `.zip` , który również zostanie odczytany.

### Pisanie pierwszego skryptu

Aby rozpocząć od skryptów możesz utworzyć bardzo prosty plik, zwany `hello.zs` w folderze `<minecraftdir>/scripts>`.

W `hello.zs` umieść następującą linię

```zenscript
print("Witaj świecie!");
```

Załaduj Minecraft i spójrz na plik `crafttweaker.log`.

Plik `crafttweaker.log` znajduje się w `<minecraftdir>` i może być odczytywany przez każdy program, który może odczytywać pliki zwykłe.

Zalecane jest użycie Notepad++ lub Sublime Text do edycji plików skryptu, jednak każdy program zrobi to.

### Plik crafttweaker.log

Plik `crafttweaker.log` używa konkretnej składni w jego wyjściu, składnia to:

    [LOADERSTAGE][SIDE][TYPE] <message>
    

Korzystając z powyższego przykładu, wyniki byłyby następujące:

    [PREINITIALIZATION][CLIENT][INFO] Witaj świecie!
    

Składnia jest używana do celów debugowania i jedyny czas kiedy składnia nie jest używana, to dla komend, w którym to przypadku po prostu wydrukuje wiadomość, jest to zrobione w ten sposób, że wklejanie zrzutów jest łatwiejsze.

### Komentarze

Komentarze mogą być używane do poprawy czytelności plików skryptów i łatwiejszego do zrozumienia!

ZenScript obsługuje 3 typy komentarzy:

Pojedynczy wiersz: `// Jestem pojedynczym komentarzem linii!`

Alternatywna pojedyncza linia: `# Jestem również pojedynczym komentarze!`

Wielolinia:

    /* I'm 
    a
    multiline comment! */