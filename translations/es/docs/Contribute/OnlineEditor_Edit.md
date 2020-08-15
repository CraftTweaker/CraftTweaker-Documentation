# Editar archivos usando el editor online de GitHub

## Requisitos

Necesitarás crear una cuenta de GitHub y [bifurcó el wiki a tu cuenta](/Contribute/SetupGithub).

## Introducción

El editor en línea de GitHub le permite cambiar y crear archivos sin más que su navegador.  
Puede que no sea tan versátil como [usando una copia local](/Contribute/LocalClone/CreateCommit/) pero no necesitas preocuparte por [configurar git](/Contribute/LocalClone/InstallingGit/) y todo.

Esta guía le mostrará cómo editar un archivo ya existente usando el editor en línea de github.  
Puede que desee editar la página porque ha encontrado un error tipográfico o desea incluir un ejemplo mejor, sea cual sea la razón, siéntete libre de confirmar cambios y eventualmente [archivar una Pull Request](/Contribute/PullRequest).

Sin embargo, recuerda que solo puedes editar la versión en inglés, las traducciones se gestionan a través de [CrowdIn](https://crowdin.com/project/crafttweaker-documentation/).

## Localizar el archivo

Si desea editar un archivo existente, primero necesita localizarlo.

En la mayoría de los casos puede encontrar el archivo revisando su URL Wiki.

Regla de miniatura: El `#` es la carpeta de documentos, todo después de que sean carpetas anidadas y eventualmente el archivo.

Por ejemplo, el archivo creando  
[https://docs.blamejared.com/en/#AdvancedFunctions/Arrays_and_Loops/](https://docs.blamejared.com/en/#AdvancedFunctions/Arrays_and_Loops/)  
puede encontrarse en  
`docs/AdvancedFunctions/Arrays_and_Loops.md`

## Editar el archivo

Después de haber localizado con éxito el archivo, haga clic en él para abrirlo en la vista de archivos de GitHub.  
Aquí puedes ver cómo se verá la entrada de la wiki aproximadamente, aunque no hay una barra de navegación, ya que este es sólo el contenido de la entrada.

Click on the little pen icon to open the editor: ![Editar botón](/Contribute/assets/OnlineEditor_EditButton.png)

El editor le permite cambiar el archivo a su gusto, y también ver directamente una vista previa con el formato compilado. Esta vista previa tendrá barras coloreadas a la izquierda indicando que:

- Verde: Esta sección no estaba presente en esta página antes.
- Amarillo: Esta sección estaba presente en esta página antes pero fue cambiada, por ejemplo, se corrigió un error tipográfico o se proporcionó información adicional.
- Rojo: Esta sección estaba presente en esta página antes, pero fue eliminada.
- Ninguno: Esta sección no se ha tocado.

Si la sintaxis de los archivos es nueva para usted, el wiki utiliza MarkDown. Debería haber muchos tutoriales para encontrar usando google (o podría añadir uno aquí a este wiki si quiere).

## Guardar/Confirmar los cambios

Después de haber cambiado el archivo, necesita dejar saber a GitHub que desea guardar sus cambios.

Para eso es para lo que está debajo de su editor:  
No se puede simplemente guardar el archivo. necesita proporcionar un resumen de lo que hizo (título de confirmación) y opcionalmente una descripción corta donde puede poner información adicional como por qué hizo los cambios o qué exactamente fue cambiado.

Por defecto se ve más o menos así:  
![Caja de cambios por defecto](/Contribute/assets/OnlineEditor_CommitBox_Default.png)

En este ejemplo, el título de Commit (o el resumen de edición) es `Actualizar Arrays_and_Loops.md`. GitHub no puede saber qué se supone que deben hacer sus cambios reales, así que intenta algo tan genérico como esto.

Puede que quieras añadir un título o descripción adicional, pero no es necesaria, aunque hace que revisar tu solicitud Pull sea más fácil.

Si tiene varias direcciones de correo electrónico registradas para su cuenta de GitHub, puede elegir la que creará el commit. Sin embargo, esto no tendrá ningún efecto real para contribuir.  
También puedes decidir si quieres comprometerte directamente a tu rama maestra o crear una nueva rama para tu commit. En la mayoría de los casos, comprometerse con su rama maestra funciona bien.

A filled out example might look like this: ![Caja de Commit](/Contribute/assets/OnlineEditor_CommitBox_Filled.png)

## Qué hacer a continuación

Después de que hayas cometido tus cambios, puedes continuar y editar o [Crear](/Contribute/OnlineEditor_Create) más archivos usando el editor en línea.  
Después de haber realizado todos los cambios, puede [presentar una Pull Request](/Contribute/PullRequest).