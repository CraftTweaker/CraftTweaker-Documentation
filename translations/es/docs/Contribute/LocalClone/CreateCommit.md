# Crear un Commit

## Prerrequisitos

Necesitas tener [Clonado el repositorio en tu disco local](/Contribute/LocalClone/Clone).  
También necesita haber cambiado algo dentro de su clon local.

## ¿Qué haremos

Por el bien del aprendizaje, crearemos un archivo llamado `Prueba. d` el cual estará disponible en `Funciones avanzadas/té/prueba` y añádelo a mkdocs.yml.

Las capturas de pantalla se toman de un editor de Sublime Text 3 (no registrado porque en una MV), pero puedes usar cualquier editor que quieras crear/modificar los archivos.  
Esa es una de las ventajas de trabajar localmente ^^.

Screenshots of the example files: ![Test.md](/Contribute/LocalClone/assets/Example1_TestMD.png) ![mkdocs.yml](/Contribute/LocalClone/assets/Example1_mkdocsYML.png)

## Estado de Git y añadir/etapa de Git

El comando `git status` te indica qué archivos han sido cambiados.  
En nuestro ejemplo nos muestra esto:

![Llamada de estado de Git](/Contribute/LocalClone/assets/Example1_Bash_GitStatus.png)

Como puede ver, tenemos dos secciones, archivos modificados y archivos no rastreados. Los archivos modificados son archivos cuyo contenido difiere del índice (git conoce otra versión de los que tiene actualmente en su ordenador).  
Los archivos sin rastrear son archivos que aún no existen en el índice (git no los conoce aún).

En ambos casos puedes decirle a git que *etapa* los archivos usando `git add` o `git stage`: ![Llamada de estado de Git](/Contribute/LocalClone/assets/Example1_Bash_GitStatus2.png)

Ahora los archivos están puestos en escena para ser cometidos y por lo tanto impresos en verde. Aviso, que si modificara cualquiera de esos archivos ahora necesitaría emitir el comando add de nuevo, ya que sólo añade el estado actual al área de puesta en escena.

## Git commit

Ahora que ha añadido los archivos necesita crear una confirmación.  
Esto puede hacerse usando el comando `git commit`.

Cuando emite ese comando, todos los estados de archivo que están actualmente en escena serán combinados y añadidos al índice.  
Esto significa que puedes crear un commit que cambie más de un archivo (algo de lo que el editor en línea de GH no es capaz de hacer).  
Generalmente querrá crear un commit por sector lógico, así que si creara un PR que agregara documentación para ModA, ModB y ModC, puede que desee crear un commit que agregue ModA, otro que agregue ModB y otro ModC.

### Configurando credenciales de git

If this is the first time you create a commit using git you will see this message: ![Llamada de estado de Git](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_CredentialError.png)

Esto significa que git no sabe quién eres, así que no sabe quién debe ser el autor del commit. Así que ejecutemos los comandos indicados en el mensaje de error:

    git config --global user.email "yourEmail"
    git config --global user.name "yourName"
    

Para el correo electrónico, utilice uno que se haya añadido a su cuenta de GH.  
Para el nombre puedes usar cualquier cosa que no sea intentar usar tu nombre de cuenta GH.

### Estableciendo el título/mensaje del commit

If your credentials are set correctly, you will get a screen like this: ![Ventana del mensaje de commit de Git](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_Message1.png)

Esto es desde el editor de texto que utiliza GitBash para eso.  
Para entrar en el modo insertar (para que pueda escribir algo), presione la tecla INSERT.  
Ahora puede escribir su título del commit (primera línea) y el mensaje del commit (todo debajo de eso).  
Puede utilizar la clave ENTER para crear una nueva línea y todo lo que comience con un `#` será ignorado.

No importa el color, esa no es tu preocupación en este momento.  
Para salir del modo INSERT, pulsa ESC.

Ahora necesita decirle al editor que ha terminado.  
Puedes hacerlo escribiendo presionando `:x` y pulsando ENTER.

Here's a screen of what this may look like just before pressing enter to leave the editor: ![Ventana del mensaje de commit de Git](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_Message2.png)

### Configurando el mensaje/título de la confirmación usando -m

Si no te gusta el editor de bash o te resulta difícil recordar qué teclas pulsar, también puedes usar el parámetro `-m "mensaje"`. Puedes abrir el `"` y dejarlo sin coincidir para poder crear saltos de línea. Termina escribiendo el mecanizado `"`.  
Al igual que en el editor, todo lo que está debajo de la primera línea se considera parte del mensaje de confirmación.

The same commit message as above could be achieved by doing: ![Compromiso Git usando -m](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_MessageParameter.png)

## Cómo continuar

Ahora que sabes cómo crear commits, puedes [enviarlos a tu bifurcación](/Contribute/LocalClone/Push/).