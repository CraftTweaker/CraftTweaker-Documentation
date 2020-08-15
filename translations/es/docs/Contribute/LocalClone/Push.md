# Empujar

## Prerrequisitos

Necesitas saber cómo [crear Comments](/Contribute/LocalClone/CreateCommit/) y necesitas haber creado al menos uno de ellos.

## ¿Qué haremos

Utilizaremos los commit(s) que hemos creado (por ejemplo, el ejemplo en [create Commits](/Contribute/LocalClone/CreateCommit/)) y enviaremos los cambios a GitHub.

## Comprobar el estado actual

Si ejecutas `git status` puedes ver cuántos commits tiene por delante tu clon local/detrás de tu bifurcación.

En este caso estamos por delante de 1 compromiso:  
![llamada de estado de git](/Contribute/LocalClone/assets/Example1_Bash_GitStatus3.png)

## Git push

Ahora ejecutamos `git push` para enviar nuestros cambios a la rama remota.  
Puede que se le solicite su nombre de usuario y contraseña GH.  
**Cuidado:** ¡Cuando utilices la Autorización de TwoFactor (2FA) necesitas crear y usar un *token de acceso personal* en lugar de tu contraseña de GH!

![Diálogo de credenciales](/Contribute/LocalClone/assets/Example1_Bash_GitPush_Credentials.png)

To verify that the commit is actually on the fork, you can check the commit list that should now have the commit in there: ![Lista de commits con commit](/Contribute/LocalClone/assets/Example1_CommitList.png)

## Cómo continuar

Ahora que ha enviado los cambios a su bifurcación, puede usar GH para [crear una solicitud de extracción](/Contribute/PullRequest/).  
Este es el mismo procedimiento que si estaba utilizando el editor en línea para editar archivos.