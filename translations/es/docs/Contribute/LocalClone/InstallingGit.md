# Installing Git

Para que [clone su repositorio bifurcado](/Contribute/LocalClone/Clone/) necesitará instalar git.  
Git es un sistema distribuido de control de versiones (básicamente, es lo que utilizan GitHub, BitBucket y otros servicios de control de versiones).

## Obteniendo Git

Puedes comprobar si tienes instalado git abriendo el comando Prompt y ejecutando el comando `git`.  
Si obtiene la página de uso, entonces la tiene instalada y puede saltarse esta página.  
Si no recibe la página de uso entonces no la tiene instalada o no la ha añadido a su PATH (ver abajo). En un caso como este, necesitará instalar git o añadirlo a su ruta:  
![CMD Prompt ejecutando comando git sin que se instale git](/Contribute/LocalClone/assets/CMD_noGit.png)

### Descargando e instalando Git

Si no tiene instalado git, puede descargar el instalador desde [su página oficial](https://git-scm.com/downloads/).  
Elija su Sistema de Operación, descargue el instalador, ejecútelo y siga las instrucciones.  
Si no está seguro de las opciones a comprobar, déjelas por defecto.  
Si no puede continuar después de configurar su editor de texto preferido, volver a una página e ir a la página otra vez en algunos casos esto hará que el botón `siguiente` aparezca.

### Añadiendo Git a tu PATH

Después de haber instalado Git, debe ser añadido a tu PATH. Si no, primero trate de cerrar y abrir su línea de comandos.  
Si todavía le dice que no sabe git, reinicie su computadora.  
Si todavía te dice que no sabe git, puede que necesites añadirlo a tu ruta.

No cubro cómo añadirlo en detalle, todo lo que necesitas hacer es añadir el directorio al que has instalado git como ruta.  
Si por ejemplo instaló Git a `C:\Program Files\Git` necesitará añadir `C:\Program Files\Git\cmd` a su ruta.  
Después, reinicie el intérprete de comandos o su ordenador.

Técnicamente, esto no es necesario pero hace que algunos comandos sean más fáciles.

## Cómo continuar

Ahora que ha instalado git puede [clonar su repositorio bifurcado](/Contribute/LocalClone/Clone/).