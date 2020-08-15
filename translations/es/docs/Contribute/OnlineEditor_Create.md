# Crear archivos usando el editor online de GitHub

## Requisitos

Necesitarás crear una cuenta de GitHub y [bifurcó el wiki a tu cuenta](/Contribute/SetupGithub).

## Introducción

El editor en línea de GitHub le permite cambiar y crear archivos sin más que su navegador.  
Puede que no sea tan versátil como [usando una copia local](/Contribute/LocalClone/CreateCommit/) pero no necesitas preocuparte por [configurar git](/Contribute/LocalClone/InstallingGit/) y todo.

Esta guía le mostrará cómo crear un nuevo archivo wiki usando el editor en línea de github.  
La razón principal para añadir nuevas páginas es más probable que rellene la información faltante, pero tal vez también quieras añadir una entrada de ejemplo de wiki para un manejador de mods determinado, sea cual sea la razón, siéntete libre de confirmar cambios y eventualmente [archivar una Pull Request](/Contribute/PullRequest).

Sin embargo, recuerda que necesitas crear la versión en inglés, las traducciones son luego manejadas a través de [CrowdIn](https://crowdin.com/project/crafttweaker-documentation/) (pero solo después de que las relaciones públicas hayan sido fusionadas).

## Dónde crear el archivo

Teóricamente, no importa dónde ponga su archivo, pero por favor intente encajar el esquema actual:

- Todos los archivos deben estar en la carpeta `docs`.
- La estructura del archivo debe coincidir con las migajas de la barra de navegación. Ejemplo: Cuando se utiliza la barra de navegación en la wiki, `ICraftingRecipe` se puede encontrar en `Vanilla/Recetas / Recetas de la Mesa de Fabricación/Receta ICrafting`. El archivo para ICraftingRecipe se puede encontrar en `docs/Vanilla/Recipes/Crafting/ICraftingRecipe.md`. Como puede ver, las rutas no coinciden exactamente, pero son suficientes para encontrar el archivo.
- Toda la información de un mod debe permanecer en un grupo/carpeta.

## Crear el archivo

Después de haber encontrado con éxito la ruta de su archivo futuro, vaya a la carpeta que contendrá el archivo en GitHub, si existe.  
No te preocupes si no existe, puedes crear el archivo.

Diga que desea crear un archivo llamado `Chan_Information. d` en `docs/AdvancedFunctions`:  
Encuentra la ruta en GitHub y haz clic en `Crear nuevo archivo` ![Crear Botón Archivo](/Contribute/assets/OnlineEditor_CreateFileButton.png)

Ahora te presentamos la nueva página del editor de archivos.  
Primero, en la parte superior puedes ver la ruta del archivo que se creará. Si queremos que el archivo se cree exactamente en el directorio que se muestra en la ruta, sólo necesitamos proporcionar un título y extensión de archivo. Recuerda, todos los archivos de entrada de wiki deben tener la extensión `.md` , ya que esta wiki utiliza markdown.

Si desea que el archivo sea creado en una subcarpeta (posiblemente no existente) o incluso varias carpetas por la ruta, puedes usar `/` para separar nombres de carpetas (como ya puedes ver en la ruta dada).

El editor le permite crear el archivo a su gusto, y también ver directamente una vista previa del formato compilado.

Si la sintaxis de los archivos es nueva para usted, el wiki utiliza MarkDown. Debería haber muchos tutoriales para encontrar usando google (o podría añadir uno aquí a este wiki si quiere).

## Añadir el archivo al índice

Después de haber creado el archivo y haber confirmado la creación (ver abajo) también necesitará agregar el archivo al índice para que se pueda mostrar en la barra de navegación más tarde.

Este índice es el archivo `mkdocs.yml`.

Este archivo contiene todo lo necesario para crear la wiki, y usted necesita asegurarse de no romperlo (aunque le diremos si su PR rompe una construcción si llega a eso)!

Todo lo que necesitas hacer es añadir tu archivo y categorías a la lista de `páginas` .  
El formato es bastante directo:

- Entradas empiezan con un `-`
- Then comes the (shown, Spanish) name for the group or entry, followed by a `:`
- Si está creando un grupo (por ejemplo, `Vanilla` o `Mods`) proceda en la siguiente línea, con dos espacios en línea.
- Si está creando una referencia real a un archivo de página, añádela en la misma línea, después de la `:` y un espacio. Asegúrese de envolver en comillas simples `'` para asegurarse de que la compilación funciona como se esperaba. La ruta es relativa a la carpeta `docs` , así que `docs/Vanilla/Commands.md` se convierte en `Vanilla/Commands.md`.

Para ver ejemplos consulte el archivo [actual mkdocs.yml en github](https://github.com/CraftTweaker/CraftTweaker-Documentation/blob/master/mkdocs.yml). Alternativamente, edite este archivo y añada su propio ejemplo aquí.

## Guardar/Confirmar los cambios

*Nota: Esta descripción se origina a partir de la guía de archivos de edición pero se aplican los mismos principios, siéntase libre de sustituir por su propia versión si es necesario*

Después de haber creado el contenido del archivo necesita dejar saber a GitHub que desea guardar sus cambios.

Para eso es para lo que está debajo de tu editor:  
No puedes simplemente guardar el archivo, necesita proporcionar un resumen de lo que hizo (título de confirmación) y opcionalmente una descripción corta donde puede poner información adicional como por qué hizo los cambios o qué exactamente fue cambiado.

Por defecto se ve más o menos así:  
![Caja de cambios por defecto](/Contribute/assets/OnlineEditor_CommitBox_Default.png)

En este ejemplo, el título de Commit (o el resumen de edición) es `Actualizar Arrays_and_Loops.md`. GitHub no puede saber qué se supone que deben hacer sus cambios reales, así que intenta algo tan genérico como esto.

Puede que quieras añadir un título o descripción adicional, pero no es necesaria, aunque hace que revisar tu solicitud Pull sea más fácil.

Si tiene varias direcciones de correo electrónico registradas para su cuenta de GitHub, puede elegir la que creará el commit. Sin embargo, esto no tendrá ningún efecto real para contribuir.  
También puedes decidir si quieres comprometerte directamente a tu rama maestra o crear una nueva rama para tu commit. En la mayoría de los casos, comprometerse con su rama maestra funciona bien.

A filled out example might look like this: ![Caja de cambios llenada](/Contribute/assets/OnlineEditor_CommitBox_Filled.png)

## Qué hacer a continuación

Después de que hayas cometido tus cambios, puedes seguir y [editar](/Contribute/OnlineEditor_Edit) o crear más archivos usando el editor en línea.  
Después de haber realizado todos los cambios, puede [presentar una Pull Request](/Contribute/PullRequest).