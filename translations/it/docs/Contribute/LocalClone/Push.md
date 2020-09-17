# Push

## Prerequisiti

Devi sapere come [creare Commits](/Contribute/LocalClone/CreateCommit/) e devi aver creato almeno uno di essi.

## Cosa faremo

Useremo i commit che abbiamo creato (ad esempio l'esempio in [create Commits](/Contribute/LocalClone/CreateCommit/)) e spingeremo le modifiche a GitHub.

## Controlla lo stato corrente

Se esegui `stato git` puoi vedere quanti commit il tuo clone locale è avanti/dietro il tuo fork.

In questo caso siamo in attesa di un impegno:  
![chiamata di stato git](/Contribute/LocalClone/assets/Example1_Bash_GitStatus3.png)

## Git push

Ora eseguiamo `git push` per inviare le nostre modifiche al ramo remoto.  
Ti potrebbe essere richiesto il tuo nome utente e password GH.  
**Attenzione:** Quando si utilizza l'autorizzazione a due fattori (2FA) è necessario creare e utilizzare un *Token di accesso personale* invece della password GH!

![Dialogo credenziali](/Contribute/LocalClone/assets/Example1_Bash_GitPush_Credentials.png)

Per verificare che il commit sia effettivamente sul fork, è possibile controllare la lista di commit che dovrebbe ora avere il commit in lì: ![Lista di commit con commit](/Contribute/LocalClone/assets/Example1_CommitList.png)

## Come continuare

Ora che hai spinto le tue modifiche al fork, puoi usare GH per [creare una richiesta Pull](/Contribute/PullRequest/).  
Questa è la stessa procedura che se stavi usando l'editor online per modificare i file.