# Soporte Ritual

## Rituales:

Esto cancelará la activación de un ritual si no se cumplen los requisitos específicos para la activación de los rituales.

### Comando:

Actualmente existe un comando dentro del juego para descargar todas las Cadenas de Ritual para su uso por el Ritual Handler. El comando es: /ct ritualDump y mostrará todas las cadenas rituales al "CraftTweaker.log".

### Pre-1.4.0:

#### Sintaxis:

    Ejemplo en blanco:
    mods.compatskills.RitualHandler.addRitualLock(String failureMessage, String ritual, String... requisitos)
    
    Ejemplo de prueba:
    mods.compatskills.RitualHandler.addRitualLock("Como el ritual se activa, no alcanzas el resultado esperado", "ritualCrushing", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed")
    

### Post-1.4.0:

A partir de CompatSkills 1.4.0 se han añadido algunos nuevos ZenMethods así como algunos cambios a la sintaxis existente. También hemos solucionado un problema que hizo que Ritual Support y Binding Support no funcionara correctamente!

#### Sintaxis:

    Ejemplo en blanco:
    mods.compatskills.RitualHandler.addRitualLock(String ritual, String... requisitos);
    mods.compatskills.RitualHandler.addRitualCostLock(int activationCost, String... requisitos);
    mods.compatskills.RitualHandler.addRitualCrystalLock(int crystalLevel, String... requirements);
    
    Prueba Ejemplo:
    mods.compatskills.RitualHandler.addRitualLock("ritualCrushing", "reskillable:magic|7");
    mods.compatskills.RitualHandler.addRitualCostLock(500, "reskillable:magic|7";
    mods.compatskills.RitualHandler.addRitualCrystalLock(1, "reskillable:magic|7");
    

#### Mensaje de error

Al igual que con el soporte de enlace, el mensaje de error se ha movido a una cadena localizable en lugar de una cadena establecida en el método CrT. Esto lo hará así que los autores de paquetes de recursos puedan localizar y cambiar las cadenas, ya que les resultaría mucho más fácil.

    compatskills.bloodmagic.ritualError=Como el ritual se activa, no logras el resultado esperado
    

Algunos otros cambios son por ejemplo que el mensaje de error por defecto ahora se muestra como parte de un mensaje de estado del chat para el jugador. Esto significa que el mensaje sólo se muestra al jugador y no se imprime en el chat para que todo el mundo lo vea. Esto también significa que ahora se mostrará junto con los requisitos en el chat. Lo que hace más fácil al jugador identificar lo que falta en el cerrador.