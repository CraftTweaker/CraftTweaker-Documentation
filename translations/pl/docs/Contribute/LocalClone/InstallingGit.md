# Installing Git

Aby [sklonować forkowane repozytorium](/Contribute/LocalClone/Clone/) musisz zainstalować git.  
Git jest rozproszonym systemem kontroli wersji (zasadniczo używa GitHub, BitBucket i innych usług kontroli wersji).

## Otrzymywanie Gita

Możesz sprawdzić, czy zainstalowałeś git otwierając polecenie i wykonując polecenie `git`.  
Jeśli dostaniesz stronę użytkowania, masz ją zainstalowaną i możesz pominąć tę stronę.  
Jeśli nie otrzymasz strony użytkowania, albo nie masz zainstalowanej lub nie dodałeś jej do swojego PATH (patrz poniżej). W takim przypadku musisz zainstalować git lub dodać go do swojej ścieżki:  
![CMD Prompt wydaje polecenie git bez zainstalowania git](/Contribute/LocalClone/assets/CMD_noGit.png)

### Pobieranie i instalowanie Git

Jeśli nie masz zainstalowanego git to możesz pobrać instalatora z [jego oficjalnej strony](https://git-scm.com/downloads/).  
Wybierz swój system operacyjny, pobierz instalatora, uruchom go i postępuj zgodnie z instrukcjami.  
Jeśli nie jesteś pewien, które opcje chcesz sprawdzić, pozostaw je jako domyślne.  
Jeśli nie możesz kontynuować po ustawieniu preferowanego edytora tekstu, wróć do jednej strony, a następnie przejdź do strony ponownie, w niektórych przypadkach spowoduje to pojawienie się przycisku `następnego`.

### Dodawanie Gita do swojego PATH

Po zainstalowaniu Git, powinien być dodany do swojego PATH. Jeśli nie, najpierw spróbuj zamknąć i otworzyć polecenie.  
Jeśli nadal mówi, że nie znasz git, zrestartuj komputer.  
Jeśli nadal mówi, że nie znasz git, być może będziesz musiał dodać go do swojej ścieżki.

Nie będę się zajmował jak dodać go szczegółowo, wystarczy dodać katalog, w którym zainstalowałeś git jako ścieżkę.  
Jeśli na przykład zainstalowałeś Git do `C:\Program Files\Git` musisz dodać `C:\Program Files\Git\cmd` do swojej ścieżki.  
Następnie zrestartuj polecenie lub komputer.

Technicznie nie jest to wymagane, ale sprawia, że niektóre polecenia stają się łatwiejsze.

## Jak kontynuować

Teraz, gdy zainstalowałeś git możesz [sklonować sforkowane repozytorium](/Contribute/LocalClone/Clone/).