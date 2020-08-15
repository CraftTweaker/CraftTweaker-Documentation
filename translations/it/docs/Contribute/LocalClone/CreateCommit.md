# Crea un commit

## Prerequisiti

Devi avere [clonato il repo sul tuo disco locale](/Contribute/LocalClone/Clone).  
Devi anche aver già cambiato qualcosa all'interno del tuo clone locale.

## Cosa faremo

Per motivi di apprendimento, creeremo un file chiamato `Test. d` che sarà disponibile in `AdvancedFunctions/Secret/Test` e aggiungerlo a mkdocs.yml.

Gli screenshot sono prelevati da un editor di testo sublime 3 (non registrato perché su un VM), ma è possibile utilizzare qualsiasi editor che si desidera creare/modificare i file.  
È uno dei vantaggi di lavorare localmente ^^.

Screenshot dei file di esempio: ![Test.md](/Contribute/LocalClone/assets/Example1_TestMD.png) ![mkdocs.yml](/Contribute/LocalClone/assets/Example1_mkdocsYML.png)

## Stato di Git e add/stage di Git

Il comando `git status` ti dice quali file sono stati modificati.  
Nel nostro esempio ci mostra questo:

![Chiamata di stato Git](/Contribute/LocalClone/assets/Example1_Bash_GitStatus.png)

Come puoi vedere, abbiamo due sezioni, file modificati e file non tracciati. I file modificati sono file il cui contenuto differisce dall'indice (git ne conosce un'altra versione di quella che hai attualmente sul tuo computer).  
I file non tracciati sono file che non esistono ancora nell'indice (non li conosce ancora).

In entrambi i casi puoi dire a git di *stage* i file usando `git add` o `git stage`: ![Chiamata di stato Git](/Contribute/LocalClone/assets/Example1_Bash_GitStatus2.png)

Ora i file sono messi in scena per essere impegnati e quindi stampati in verde. Avviso, che se si dovesse modificare uno di questi file ora è necessario emettere nuovamente il comando di aggiunta in quanto aggiunge solo lo stato corrente all'area di stadio.

## Commit di Git

Ora che hai aggiunto i file necessari per creare un commit.  
Questo può essere fatto usando il comando `git commit`.

Quando si emette quel comando, tutti gli stati dei file che sono attualmente in fase di staging verranno combinati e aggiunti all'indice.  
Ciò significa che puoi creare un commit che cambi più di un file (qualcosa di cui l'editor online di GH non è in grado di).  
Di solito si desidera creare un commit per settore logico, quindi se si dovesse creare una PR che aggiunge la documentazione per ModA, ModB e ModC, potresti voler creare un commit che aggiunga ModA, uno che aggiunga ModB e uno che aggiunga ModC.

### Impostazione credenziali git

Se questa è la prima volta che crei un commit usando git vedrai questo messaggio: ![Chiamata di stato Git](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_CredentialError.png)

Questo significa che git non sa chi sei, quindi non sa chi dovrebbe essere l'autore committente. Eseguiamo quindi i comandi indicati nel messaggio di errore:

    git config --global user.email "yourEmail"
    git config --global user.name "yourName"
    

Per l'email, utilizzare uno che è stato aggiunto al tuo account GH.  
Per il nome puoi usare tutto tranne provare a usare il nome del tuo account GH.

### Impostazione del titolo/messaggio del commit

Se le tue credenziali sono impostate correttamente, otterrai una schermata come questa: ![Finestra messaggio commit Git](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_Message1.png)

Questo proviene dall'editor di testo che GitBash usa per questo.  
Per entrare in modalità di inserimento (in modo che tu possa scrivere qualcosa), premi il tasto INSERT.  
Ora puoi scrivere il titolo del tuo commit (prima riga) e il messaggio di commit (tutto sotto quello).  
È possibile utilizzare il tasto ENTER per creare una nuova linea e tutto ciò che inizia con un `#` verrà ignorato.

Non importa quale colorazione, non è la tua preoccupazione in questo momento.  
Per uscire dalla modalità INSERT, premi ESC.

Ora devi dire all'editor che hai finito.  
Puoi farlo digitando premendo `:x` e premendo INVIO.

Ecco uno schermo di quello che potrebbe apparire prima di premere Invio per lasciare l'editor: ![Finestra messaggio commit Git](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_Message2.png)

### Impostazione del messaggio/titolo del commit usando -m

Se non ti piace l'editor bash o trovare difficile ricordare quali tasti da premere, puoi anche usare il parametro `-m "messaggio"`. Puoi aprire il `"` e lasciarlo senza pari per essere in grado di creare interruzioni di riga. Termina digitando la macchina `"`.  
Come nell'editor, tutto sotto la prima riga è considerato parte del messaggio di commit.

Lo stesso messaggio di commit di cui sopra potrebbe essere ottenuto facendo: ![Git commit usando -m](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_MessageParameter.png)

## Come continuare

Ora che sai come creare dei commit, puoi [spingerli sul tuo fork](/Contribute/LocalClone/Push/).