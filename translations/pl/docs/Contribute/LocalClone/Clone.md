# Klonuj

## Summary

Ta strona pokazuje jak sklonować forkowane repozytorium do komputera lokalnego.

## Wymagania wstępne

Powinieneś [rozwikłać repozytorium CrT-wiki](/Contribute/SetupGithub/) i zainstalować [Git](/Contribute/LocalClone/InstallingGit/).

## Pierwsze kroki

Najpierw musisz utworzyć folder na lokalnym komputerze, do którego chcesz sklonować wiki.  
Następnie musisz otworzyć w tym folderze wiersz polecenia lub Bash git.  
zamierzam użyć git Bash, ale ta sama procedura powinna działać również dla CMD.

Aby otworzyć git bash po prostu przejdź do folderu i kliknij prawym przyciskiem myszy:  
![Menu kontekstowe eksploratora z wybraną opcją gitBash](/Contribute/LocalClone/assets/ExplorerContextMenu_GitBash.png)

## Klonowanie Twojego widelca

Po otwarciu git Bash w folderze, musisz pobrać adres URL repozytorium.  
Możesz znaleźć ten adres URL podczas sprawdzania forka na GitHub:

![Lokalizacja adresu URL repozytorium](/Contribute/LocalClone/assets/GitHub_CloneLink.png)

Musisz użyć tego adresu URL. Będziemy używać HTTPS do klonowania, jeśli wiesz jak skonfigurować SSH prawdopodobnie nie potrzebujesz tego przewodnika.  
Możesz również kliknąć na przycisk, aby skopiować ciąg do schowka.

Teraz musisz uruchomić polecenie `git clone <repo-Url>`:

![Klonuj polecenie](/Contribute/LocalClone/assets/GitBash_CloneCommand.png) ![Klonowanie polecenia zakończone sukcesem](/Contribute/LocalClone/assets/GitBash_CloneCommandSuccess.png)

Teraz powinieneś mieć nowy folder o nazwie `CraftTweaker-Documentation` w swoim katalogu.  
Przejdź do niego i nadajmy `git status`:

![Zmień katalog i status git](/Contribute/LocalClone/assets/GitBash_Clone_GitStatus.png)

## Jak kontynuować

Teraz, gdy masz lokalny klon wiki, możesz zacząć tworzyć i edytować pliki i ostatecznie [utworzyć commit](/Contribute/LocalClone/CreateCommit/).