# Síntesis de requerimientos lógicos

Ahora que sabes cuáles son las compuertas lógicas, puedo describir la sintaxis implementada en Reskillable que les permite ser usados. Habrá ejemplos más detallados en una sección posterior.

En todas las sintaxis de abajo `el requisito` es la representación de cadenas de cualquier otro requisito soportado (incluyendo los añadidos por CompatSkills u otros complementos).

* * *

## Puertas requeridas

### NO requerir

El requisito lógico más simple que Reskillable soporta es la capacidad de invertir un requerimiento. Hace esto usando una compuerta **NOT** y la sintaxis para ella `no|requisito`. Como se describe anteriormente en la sección sobre Logic Gates, este requisito lógico solo se marcará como cumplido si el `requisito` especificado no se cumple.

* * *

## Compuertas requeridas binarias

Los otros requisitos lógicos son ligeramente más complejos ya que toman dos requisitos de *entrada*. As the logic gates are relatively simple the order of the requirements does not actually matter, however I will be referring to them as `requirement<sub>1</sub>` and `requirement<sub>2</sub>` as to differentiate which one is which.

They also share the syntax: `gate|[requirement<sub>1</sub>]~[requirement<sub>2</sub>]`. With the gate being either `and`, `nand`, `or`, `nor`, `xor`, or `xnor`.  
**Note**: The brackets around `requirement<sub>1</sub>` and `requirement<sub>2</sub>` are needed.

* * *

### Y requerimiento

El requerimiento **AND** a diferencia de los otros requisitos lógicos es principalmente útil para requerimientos lógicos anidados (más en esta parte inferior hacia abajo), como bloqueo de un elemento u otro objeto con múltiples requisitos requiere que se cumplan todos los requisitos dados. Esto es lo mismo que la función **AND** , así que debe utilizarse cuando sea posible. ya que hará que la descripción sea formateada de una manera más fácil de leer.

## Ejemplos

Todos los ejemplos a continuación se mostrarán usando la sintaxis del soporte CraftTweaker de CompatSkill ya que es más fácil de leer. Los requisitos lógicos también funcionan bien desde la configuración.

Todas las entradas de script CrT de ejemplo a continuación utilizan la instrucción de importación: `importar mods.compatskills.Requirement. ddRequirement;` esto es principalmente para reducir las longitudes de las otras líneas y hacerlas más legibles. (Así que si está copiando alguno de los ejemplos necesitará incluirlo en la parte superior de su archivo de script. Un par de ejemplos a continuación que comienzan directamente con `mods. ompatHills.` son bloques específicos de CompatSkills y para los que he encontrado ejemplos de requerimientos lógicos decentes.

* * *

Solo permite atacar a cerdos zombies fuera del infra: `mods.compatskills.EntityDamageLock.addEntityLock(<entity:minecraft:zombie_pigman>, "no|dim|-1");`

* * *

Permite entrar en el inframundo si un jugador tiene un nivel de ataque o defensa de al menos 15: `mods.compatskills.DimensionLock.addDimensionLock(-1, "o|[reskillable:attack|15]~[reskillable:defense|15]");`

* * *

Una vez que un jugador alcanza el nivel de defensa 24 y el nivel de agilidad 24 deja de permitirles usar armadura de cuero:

    addRequirement(<minecraft:leather_helmet:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_chestplate:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_leggings:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_boots:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    

* * *

Solo permite usar una pala de madera hasta que el jugador obtenga minado o recolectar nivel 5: `Requisitos de suma(<minecraft:wooden_shovel:*>, "nor|[reskillable:mining|5]~[reskillable:recolectando|5]");`

* * *

Sólo permite a un jugador usar perlas de ender si tiene magia 32 o si tiene agilidad 32. Sin embargo, no dejes que lo usen si tienen ambas habilidades en el nivel 32: `addRequirement(<minecraft:ender_pearl>, "xor|[reskillable:magic|32]~[reskillable:agility|32]");`. Esto puede ser útil si quieres tener múltiples árboles de progresión y asegurarte de que tienen que seguir uno si quieren seguir usando objetos específicos.

* * *

Fue difícil encontrar un ejemplo para **XNOR**, sin embargo, este es un ejemplo de cómo puede funcionar.

Solo permite a un jugador nivel de defensa al nivel 5 si no ha puesto ningún punto en el ataque aún o si está en el nivel de ataque 32: `mods. ompatskills.SkillLocks.addLevelLock(<skill:reskillable:defense>, 5, "xnor|[reskillable:attack|2]~[reskillable:attack|32]");`

### Requisitos lógicos anidados

Los requisitos lógicos anidados son cuando está utilizando un requisito lógico como uno de los parámetros del `requisito` en otro requisito lógico. Preste especial atención a la colocación de brazos en requisitos anidados.

* * *

Only allow diamond ore to be broken if the player has mining level 20 or if the player has both gathering level 25 and mining level 15: `addRequirement(<minecraft:diamond_ore>, "or|[reskillable:mining|20]~[and|[reskillable:gathering|25]~[reskillable:mining|15]]");` *Note*: This also has the side effect of not allowing players to place diamond ore unless they meet the requirement as well.

* * *

Only allow using the elytra with agility 15 in the end or having agility and magic levels 25 while not being in the end: `addRequirement(<minecraft:elytra:*>, "xor|[and|[dim|1]~[reskillable:agility|15]]~[and|[reskillable:agility|25]~[reskillable:magic|25]]");` *Note*: Once you reach agility and magic 25 you are unable to use the elytra in the end. Esto es en parte sólo como ejemplo y no necesariamente lo que alguien quiere.

Another way that the above requirement could be written is: `addRequirement(<minecraft:elytra:*>, "reskillable:agility|15", "xor|[dim|1]~[and|[reskillable:agility|25]~[reskillable:magic|25]]");` because both sides require at least agility 15.