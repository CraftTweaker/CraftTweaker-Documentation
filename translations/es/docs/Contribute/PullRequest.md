# Archivando una Petición PullRequest

## Prerrequisitos

Necesitas haber [creado](/Contribute/OnlineEditor_Create) y/o [modificado](/Contribute/OnlineEditor_Edit) archivos en tu bifurcación del wiki.

## Introducción

Después de haber creado o modificado lo que estuviera intentando hacer, necesita obtener los cambios en el repositorio original.  
Esta guía le mostrará cómo crear un PR para aplicar sus cambios al wiki real.

Una Pull Request (o PR para abreviar) le permite aplicar sus commits a la base de código original.  
En otras palabras, te permite hacer visibles tus cambios para todos los que visitan el wiki.

## Abriendo la Pull Request

Cuando vuelvas a la página de GitHub de tu fork, notarás la barra de información de ramas.  
Esta barra le dice cómo su versión de bifurcación difiere de la original.

Por ejemplo, la imagen de abajo tiene tres commits que aún no han sido aplicados al CrT-wiki mientras que otros tres commits han sido creados en el original que no han sido aplicados al fork.

![Botón Pull Request](/Contribute/assets/PullRequest_Compare_PullRequestButton.png)

Si haces clic en el botón "Pull Request", se abrirá una nueva vista, la vista Compar.  
En la mayoría de los casos ya está correctamente definido utilizar la rama maestra de Documentación CraftTweaker/CraftTweaker-Original como destino y su rama como los cambios a obtener.

Github también verificará que no hay conflictos entre sus cambios y cuál es el estado actual del wiki.  
En caso de que encuentre cualquier error que le avise, aunque todavía puede crear las relaciones públicas y pedir nuestra ayuda para resolver los conflictos.

Ahora todo lo que necesita es proporcionar un título descriptivo y una descripción que nos dirá sobre los cambios.

También ten en cuenta la casilla de verificación `Permitir ediciones de los mainainers` .  
Esta casilla permite a las personas con acceso de escritura al CrT-Repo (e. . Miembros de la organización CraftTweaker) para modificar los archivos de sus relaciones públicas con el fin de resolver conflictos de fusión, por ejemplo.

![New PR Tool](/Contribute/assets/PullRequest_Create.png)

En la parte inferior puede verificar que todos sus cambios se incluirán en el PR.

## Siguiente paso

A continuación, alguien de la Organización CrT o cualquier colaborador puede revisar sus relaciones públicas y dejar comentarios o sugerencias generales.  
Si alguien de la organización CrT hace una reseña de relaciones públicas, se le notificará de todos los comentarios y si necesita o no cambiar algo antes de que se fusione.  
Después de que todas las sugerencias hayan sido resueltas, alguien fusionará las PR.