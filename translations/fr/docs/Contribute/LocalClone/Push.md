# Pousser

## Pré-requis

Vous devez savoir comment [créer des Commits](/Contribute/LocalClone/CreateCommit/) et vous devez avoir créé au moins l'un d'entre eux.

## Que ferons-nous

Nous utiliserons le(s) commit(s) que nous avons créé (par exemple, l'exemple dans [créer des Commits](/Contribute/LocalClone/CreateCommit/)) et enverrons les modifications sur GitHub.

## Vérifier le statut actuel

Si vous exécutez `le statut git` vous pouvez voir combien de commits votre clone local est devant/derrière votre fork.

Dans ce cas, nous sommes en avance sur 1 engagement:  
![appel d'état git](/Contribute/LocalClone/assets/Example1_Bash_GitStatus3.png)

## Pousser Git

Maintenant, nous exécutons `git push` pour pousser nos changements dans la branche distante.  
On peut vous demander votre nom d'utilisateur et votre mot de passe GH.  
**Attention :** Lorsque vous utilisez l'autorisation à deux facteurs (2FA), vous devez créer et utiliser un *jeton d'accès personnel* au lieu de votre mot de passe GH !

![Boîte de dialogue des identifiants](/Contribute/LocalClone/assets/Example1_Bash_GitPush_Credentials.png)

To verify that the commit is actually on the fork, you can check the commit list that should now have the commit in there: ![Liste de commit avec commit](/Contribute/LocalClone/assets/Example1_CommitList.png)

## Comment continuer

Maintenant que vous avez envoyé vos modifications à votre fork, vous pouvez utiliser GH pour [créer une Pull request](/Contribute/PullRequest/).  
C'est la même procédure que si vous utilisiez l'éditeur en ligne pour éditer des fichiers.