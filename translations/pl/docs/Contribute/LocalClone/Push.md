# Pchnij

## Wymagania wstępne

Musisz wiedzieć jak [tworzyć Commity](/Contribute/LocalClone/CreateCommit/) i musisz utworzyć co najmniej jeden z nich.

## Co zrobimy

Użyjemy commitów, które stworzyliśmy (np. przykład w [utwórz Commity](/Contribute/LocalClone/CreateCommit/)) i przepychamy zmiany na GitHub.

## Sprawdź bieżący status

Jeśli uruchomisz `git status` możesz zobaczyć, ile poleceń ma Twój lokalny klon/za twoim forkiem.

W tym przypadku mamy do czynienia z jednym zobowiązaniem:  
![Wezwanie do statusu git](/Contribute/LocalClone/assets/Example1_Bash_GitStatus3.png)

## Wypchnięcie Git

Teraz uruchamiamy `git push` , aby przepchnąć nasze zmiany do zdalnej gałęzi.  
Możesz zostać poproszony o podanie nazwy użytkownika i hasła GH.  
**Ostrożnie:** Kiedy używasz autoryzacji TwoFactor (2FA) musisz utworzyć i użyć *Osobistego tokenu dostępu* zamiast hasła GH!

![Okno dialogowe poświadczeń](/Contribute/LocalClone/assets/Example1_Bash_GitPush_Credentials.png)

Aby sprawdzić, czy zatwierdzenie jest faktycznie na forku, możesz sprawdzić listę zatwierdzeń, w której powinien tam znajdować się zatwierdzenie: ![Zatwierdź listę z zatwierdzeniem](/Contribute/LocalClone/assets/Example1_CommitList.png)

## Jak kontynuować

Teraz, gdy popchnąłeś zmiany na fork, możesz użyć GH do [utworzenia Pull Request](/Contribute/PullRequest/).  
Jest to taka sama procedura, jak w przypadku korzystania z edytora online do edycji plików.