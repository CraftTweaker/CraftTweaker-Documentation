# Utwórz polecenie

## Wymagania wstępne

Musisz mieć [Klonowanie repozytorium na twój lokalny dysk](/Contribute/LocalClone/Clone).  
Musisz również zmienić coś w lokalnym klonie.

## Co zrobimy

W celu uczenia się utworzymy plik o nazwie `Test. d` , który będzie dostępny w `AdvancedFunctions/Secret/Test` i dodaj go do mkdocs.yml.

Zrzuty ekranu są pobierane z edytora Sublime Text 3 (niezarejestrowane z powodu VM), ale możesz użyć dowolnego edytora do tworzenia/modyfikowania plików.  
To jedna z zalet pracy lokalnie ^^.

Zrzuty ekranu przykładowych plików: ![Test.md](/Contribute/LocalClone/assets/Example1_TestMD.png) ![mkdocs.yml](/Contribute/LocalClone/assets/Example1_mkdocsYML.png)

## Status Git i Dodaj/etap Git

Polecenie `git status` wskazuje, które pliki zostały zmienione.  
W naszym przykładzie pokazuje nam:

![Status połączenia Git](/Contribute/LocalClone/assets/Example1_Bash_GitStatus.png)

Jak widzisz, mamy dwie sekcje, zmodyfikowane pliki i nieśledzone pliki. Zmodyfikowane pliki to pliki, których zawartość różni się od indeksu (git zna ich inną wersję niż ta, którą aktualnie posiadasz na komputerze).  
Pliki nieśledzone to pliki, które jeszcze nie istnieją w indeksie (git jeszcze ich nie zna).

W obu przypadkach możesz powiedzieć git do *etapu* pliki używając `git add` lub `git stage`: ![Status połączenia Git](/Contribute/LocalClone/assets/Example1_Bash_GitStatus2.png)

Teraz pliki te mają być rozłożone na etapy i w związku z tym drukowane na zielono. Zawiadomienie, gdybyś miał zmodyfikować jeden z tych plików, musisz wydać polecenie dodawania ponownie, ponieważ dodaje tylko bieżący stan do obszaru testowania.

## Zatwierdzenie Git

Teraz, gdy dodałeś pliki, musisz utworzyć commit.  
Można to zrobić używając komendy `git commit`.

Gdy wydasz to polecenie, wszystkie stany plików, które są obecnie rozmieszczone, zostaną połączone i dodane do indeksu.  
Oznacza to, że możesz utworzyć jeden commit, który zmienia więcej niż jeden plik (edytor online GHS nie jest w stanie tego zrobić).  
Zazwyczaj chcesz utworzyć jeden commit dla każdego sektora logicznego, więc gdybyś miał utworzyć PR dodający dokumentację dla ModA, ModB i ModC, możesz utworzyć jeden commit dodający ModA, taki, który dodaje ModB i taki, który dodaje ModC.

### Ustawianie danych git

Jeśli po raz pierwszy utworzysz commit, używając git zobaczysz tę wiadomość: ![Status połączenia Git](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_CredentialError.png)

Oznacza to, że git nie wie, kim jesteście, a więc nie wie, kto ma być autorem zobowiązania. A więc uruchom polecenia podane w komunikacie o błędzie:

    git config --global user.email "yourEmail"
    git config --global user.name "yourName"
    

Dla wiadomości e-mail, użyj tego, który został dodany do Twojego konta GH.  
Dla nazwy możesz użyć wszystkiego, ale spróbuj użyć nazwy konta GH.

### Ustawianie tytułu/wiadomości commitu

Jeśli twoje dane logowania są poprawnie ustawione, otrzymasz ekran w następujący sposób: ![Okno wiadomości zatwierdzenia Git](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_Message1.png)

To jest z edytora tekstu do tego używa GitBash.  
Aby przejść do trybu wstawiania (aby można było coś zapisać), naciśnij klawisz INSERT.  
Teraz możesz napisać tytuł zatwierdzenia (pierwszy wiersz) i wiadomość zatwierdzenia (wszystko poniżej tego).  
Możesz użyć klawisza ENTER do utworzenia nowej linii, a wszystko zaczynające się od `#` zostanie zignorowane.

Nie myślisz o barwieniu, to nie jest teraz twoja obawa.  
Aby wyjść z trybu INSERT, naciśnij ESC.

Teraz musisz powiedzieć edytorowi, że jesteś gotowy.  
Możesz to zrobić, wpisując `:x` i naciskając ENTER.

Oto ekran tego, jak to może wyglądać tuż przed naciśnięciem klawisza Enter, aby opuścić edytor: ![Okno wiadomości zatwierdzenia Git](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_Message2.png)

### Ustawianie wiadomości/tytułu zatwierdzenia za pomocą -m

Jeśli nie lubisz edytora bash lub trudno zapamiętać jakie klucze do naciśnięcia, możesz również użyć parametru `-m "message"`. Możesz otworzyć `"` i zostawić go niedopasowanego, aby móc tworzyć przerwy liniowe. Zakończ wpisując obróbkę `"`.  
Podobnie jak w edytorze, wszystko poniżej pierwszego wiersza jest uważane za część wiadomości zatwierdzenia.

Ta sama wiadomość zatwierdzenia, co powyżej, może zostać osiągnięta przez wykonanie: ![Zatwierdzenie Git przy użyciu -m](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_MessageParameter.png)

## Jak kontynuować

Teraz, gdy wiesz jak tworzyć commity, możesz [nacisnąć je na swój fork](/Contribute/LocalClone/Push/).