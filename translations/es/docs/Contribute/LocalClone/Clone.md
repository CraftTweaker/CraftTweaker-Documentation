# Clonar

## Summary

Esta página le muestra cómo clonar su repositorio bifurcado en su computadora local.

## Prerrequisitos

Debería haber [bifurcado el repositorio CrT-wiki](/Contribute/SetupGithub/) y necesita tener [Git instalado](/Contribute/LocalClone/InstallingGit/).

## Primeros pasos

Primero necesita crear una carpeta en su computadora local donde desea clonar el wiki.  
Luego necesita abrir el símbolo de espera de comandos o git bash en esa carpeta.  
Voy a usar git Bash pero el mismo procedimiento debería funcionar también para el CMD.

Para abrir git bash, simplemente vaya a la carpeta y haga clic con la tecla derecha del ratón:  
![Menú contextual del explorador con la opción gitBash seleccionada](/Contribute/LocalClone/assets/ExplorerContextMenu_GitBash.png)

## Clonando tu bifurcación

Después de haber abierto git Bash en la carpeta, necesita obtener la url de repositorio.  
Puedes encontrar esta url al comprobar tu bifurcación en GitHub:

![Ubicando la url del repo](/Contribute/LocalClone/assets/GitHub_CloneLink.png)

Necesitas usar esa URL. Usaremos HTTPS para la clonación, si sabe cómo configurar SSH probablemente no necesite esta guía.  
También puede hacer clic en el botón para copiar la cadena al portapapeles.

Ahora necesita ejecutar el comando `git clone <repo-Url>`:

![Clonar comando](/Contribute/LocalClone/assets/GitBash_CloneCommand.png) ![Clonar comando con éxito](/Contribute/LocalClone/assets/GitBash_CloneCommandSuccess.png)

Ahora debería tener una nueva carpeta llamada `CraftTweaker-Documentation` en su directorio.  
Navegemos hasta él y emitamos un `estado de git`:

![Cambiar directorio y emitir estado de git](/Contribute/LocalClone/assets/GitBash_Clone_GitStatus.png)

## Cómo continuar

Ahora que tienes un clon local de la wiki puedes empezar a crear y editar archivos y eventualmente [crear un commit](/Contribute/LocalClone/CreateCommit/).