# Edytuj pliki za pomocą edytora online GitHuba

## Wymagania

Będziesz musiał utworzyć konto GitHub i [forkujesz wiki na Twoje konto](/Contribute/SetupGithub).

## Wprowadzanie

Edytor online GitHub pozwala na zmianę i tworzenie plików przy użyciu tylko przeglądarki.  
Może nie być tak wszechstronny jak [przy użyciu lokalnej kopii](/Contribute/LocalClone/CreateCommit/) , ale nie musisz się martwić o [konfigurację git](/Contribute/LocalClone/InstallingGit/) i wszystkie.

Ten przewodnik pokaże jak edytować już istniejący plik za pomocą edytora online githuba.  
Możesz chcieć edytować stronę, ponieważ znalazłeś literaturę lub chcesz dołączyć lepszy przykład. bez względu na powód, możesz zatwierdzić zmiany i ostatecznie [złożyć Pull Request](/Contribute/PullRequest).

Pamiętaj, że możesz edytować tylko angielską wersję, tłumaczenie jest obsługiwane przez [CrowdIn](https://crowdin.com/project/crafttweaker-documentation/).

## Zlokalizuj plik

Jeśli chcesz edytować istniejący plik, najpierw musisz go zlokalizować.

W większości przypadków możesz znaleźć plik, sprawdzając jego adres URL Wiki.

Reguła kciuków: `#` jest folderem dokumentacji, wszystko po tym jest zagnieżdżone foldery i ostatecznie plikiem.

Na przykład, plik tworzący  
[https://docs.blamejared.com/en/#AdvancedFunctions/Arrays_and_Loops/](https://docs.blamejared.com/en/#AdvancedFunctions/Arrays_and_Loops/)  
można znaleźć w  
`docs/AdvancedFunctions/Arrays_and_Loops.md`

## Edytuj plik

Po pomyślnym zlokalizowaniu pliku, kliknij na nią, aby otworzyć go w widoku pliku GitHub.  
Tutaj możesz zobaczyć, jak wpis wiki będzie wyglądał w przybliżeniu chociaż nie ma paska nawigacyjnego, ponieważ jest to tylko zawartość wpisu.

Kliknij ikonę małego pióra, aby otworzyć edytor: ![Przycisk edycji](/Contribute/assets/OnlineEditor_EditButton.png)

Edytor pozwala na zmianę pliku zgodnie z twoim życzeniem, a także bezpośrednio wyświetlić podgląd z skompilowanym formatowaniem. Ten podgląd będzie miał kolorowe paski po lewej stronie, wskazujące, że:

- Zielony: Ta sekcja nie była obecna na tej stronie wcześniej.
- Żółta: Ta sekcja była obecna na tej stronie zanim została zmieniona, np. poprawiono literaturę lub podano dodatkowe informacje.
- Czerwona: Ta sekcja była obecna na tej stronie przed usunięciem, ale została usunięta.
- Brak: Ta sekcja była nienaruszona.

Jeśli składnia plików jest dla Ciebie nowa, wiki używa MarkDown. Powinien być wiele samouczków, które można znaleźć za pomocą google (lub możesz dodać jedną prostą tutaj do tej wiki jeśli chcesz).

## Zapisz/Zatwierdź zmiany

Po zmianie pliku musisz poinformować GitHub, że chcesz zapisać zmiany.

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

Po zaangażowaniu zmian, możesz przejść i edytować lub [Utwórz](/Contribute/OnlineEditor_Create) więcej plików za pomocą edytora online.  
Po wykonaniu wszystkich zmian, możesz [wysłać Pull Request](/Contribute/PullRequest).