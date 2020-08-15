# Utwórz pliki za pomocą edytora online GitHub

## Wymagania

Będziesz musiał utworzyć konto GitHub i [forkujesz wiki na Twoje konto](/Contribute/SetupGithub).

## Wprowadzanie

Edytor online GitHub pozwala na zmianę i tworzenie plików przy użyciu tylko przeglądarki.  
Może nie być tak wszechstronny jak [przy użyciu lokalnej kopii](/Contribute/LocalClone/CreateCommit/) , ale nie musisz się martwić o [konfigurację git](/Contribute/LocalClone/InstallingGit/) i wszystkie.

Ten przewodnik pokaże jak utworzyć nowy plik wiki za pomocą edytora online githuba.  
Główny powód dodawania nowych stron jest najbardziej prawdopodobny dla uzupełnienia brakujących informacji, ale może chcesz również dodać przykładowy wpis wiki dla danej obsługi modów, bez względu na powód, możesz zatwierdzić zmiany i ostatecznie [złożyć Pull Request](/Contribute/PullRequest).

Pamiętaj, że należy stworzyć wersję angielską, tłumaczenia są następnie obsługiwane przez [CrowdIn](https://crowdin.com/project/crafttweaker-documentation/) (ale tylko po połączeniu PR).

## Gdzie utworzyć plik

Teoretycznie nie ma znaczenia, gdzie umieścisz swój plik, ale spróbuj dopasować się do aktualnego schematu:

- Wszystkie pliki muszą być w folderze `docs`.
- Struktura pliku powinna pasować do fragmentów paska nawigacyjnego. Przykład: Używając paska nawigacji na wiki, `przepis na ICraftingReceptura` można znaleźć w `Vanilla/Recipes/Crafting Table Recipes/ICraftingReceptura`. Plik ICraftingRecipe można znaleźć w `docs/Vanilla/Recipes/Crafting/ICraftingRecipe.md`. Jak widzisz, ścieżki nie są dokładnie identyczne, ale są wystarczające do znalezienia pliku.
- Wszystkie informacje dla jednego moda powinny pozostać w jednej grupie/folderze.

## Utwórz plik

Po pomyślnym zlokalizowaniu przyszłej ścieżki pliku, przejdź do folderu, który będzie zawierał plik w GitHub, jeśli istnieje.  
Nie martw się, jeśli nie istnieje, nadal możesz utworzyć plik.

Powiedz że chcesz utworzyć plik o nazwie `Secret_Information. d` w `docs/AdvancedFunctions`:  
Znajdź ścieżkę w GitHub i kliknij `Utwórz nowy plik` ![Przycisk Utwórz plik](/Contribute/assets/OnlineEditor_CreateFileButton.png)

Jesteś teraz prezentowany z nową stroną edytora plików.  
Najpierw na górze możesz zobaczyć ścieżkę pliku, który zostanie utworzony. Jeśli chcemy, aby plik został utworzony dokładnie w katalogu, który jest wyświetlany na ścieżce, musimy podać tylko tytuł i rozszerzenie pliku. Pamiętaj, że wszystkie pliki wpisów wiki powinny mieć rozszerzenie `.md` , ponieważ to wiki używa markdown.

Jeśli chcesz, aby plik został utworzony w (prawdopodobnie nieistniejącym) podfolderze lub nawet w wielu folderach w dół ścieżki, możesz użyć `/` do rozdzielenia nazw folderów (takich jak już widać w danej ścieżce).

Edytor pozwala Ci utworzyć plik zgodnie z twoim życzeniem, a także bezpośrednio wyświetlić podgląd skompilowanego formatowania.

Jeśli składnia plików jest dla Ciebie nowa, wiki używa MarkDown. Powinien być wiele samouczków, które można znaleźć za pomocą google (lub możesz dodać jedną prostą tutaj do tej wiki jeśli chcesz).

## Dodaj plik do indeksu

Po utworzeniu pliku i zatwierdzeniu tworzenia pliku (patrz poniżej) należy dodać plik do indeksu, aby mógł być wyświetlany na pasku nawigacyjnym później.

Ten indeks to plik `mkdocs.yml`.

Ten plik zawiera wszystko, co jest potrzebne do utworzenia wiki, i musisz się upewnić, że nie złamać tego (choć powiemy ci, czy twój PR przerwie kompilację, jeśli do tego dojdziemy)!

Wszystko, co musisz zrobić, to dodać swój plik i kategorie do `stron` listy.  
Format jest dość prosty:

- Wpisy zaczynają się od `-`
- Następnie pojawia się (wyświetlona, angielska) nazwa grupy lub wpisu, a następnie `:`
- Jeśli tworzysz grupowanie (np. `Vanilla` lub `Modyfikacje`) kontynuuj następną linię z dwoma spacjami wlinkowanymi.
- Jeśli tworzysz rzeczywiste odwołanie do pliku strony, dodaj go w tej samej linii, po `:` i spacji. Upewnij się, że zawija go w pojedyncze cudzysłowy `'` , aby upewnić się, że kompilacja działa zgodnie z oczekiwaniami. Ścieżka jest względna do folderu `docs` , więc `docs/Vanilla/Commands.md` staje się `Vanilla/Commands.md`.

Dla przykładów sprawdź [aktualny plik mkdocs.yml na github](https://github.com/CraftTweaker/CraftTweaker-Documentation/blob/master/mkdocs.yml). Alternatywnie, edytuj ten plik i dodaj tutaj swój własny przykład.

## Zapisz/Zatwierdź zmiany

*Uwaga: Ten opis pochodzi z podręcznika edycji plików, ale te same zasady mają zastosowanie, w razie potrzeby możesz zastąpić własną wersją*

Po utworzeniu zawartości pliku musisz poinformować GitHub, że chcesz zapisać zmiany.

To właśnie pole commitów poniżej edytora jest dla:  
Nie możesz po prostu zapisać pliku, musisz podać podsumowanie tego, co zrobiłeś (tytuł zatwierdzenia) i opcjonalnie krótki opis, w którym można podać dodatkowe informacje, takie jak dlaczego dokonałeś zmian lub co zostało dokładnie zmienione.

Domyślnie wygląda w przybliżeniu tak:  
![Domyślne pole commitów](/Contribute/assets/OnlineEditor_CommitBox_Default.png)

W tym przykładzie tytuł Komitu (lub podsumowanie edycji) jest `Aktualizuj Arrays_and_Loops.md`. GitHub nie może wiedzieć, co mają zrobić Twoje rzeczywiste zmiany, więc próbuje coś tak ogólnego, jak to.

Możesz dodać dodatkowy tytuł lub opis, ale nie jest to potrzebne, choć sprawia, że sprawdzenie Twojego Pull request później jest łatwiejsze.

Jeśli masz wiele adresów e-mail zarejestrowanych dla Twojego konta GitHub, możesz wybrać, który z nich utworzysz zatwierdzenie. Nie będzie to jednak miało realnego wpływu na wniesienie wkładu.  
Możesz również zdecydować, czy chcesz przenieść bezpośrednio do swojej głównej gałęzi czy raczej utworzyć nową gałąź dla swojego commita. W większości przypadków zlecenie do głównej gałęzi działa w porządku.

Wypełniony przykład może wyglądać tak: ![Wypełnione pole commitów](/Contribute/assets/OnlineEditor_CommitBox_Filled.png)

## Co zrobić dalej

Po zaangażowaniu zmian możesz przejść do [edycji](/Contribute/OnlineEditor_Edit) lub utworzyć więcej plików za pomocą edytora online.  
Po wykonaniu wszystkich zmian, możesz [wysłać Pull Request](/Contribute/PullRequest).