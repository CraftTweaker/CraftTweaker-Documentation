# Enlazar Soporte

## Vinculando:

Esto cancelará la vinculación de objetos para dicho objeto específico si el jugador no cumple con los requisitos.

### Pre-1.4.0:

#### Sintaxis:

    Ejemplo en blanco:
    mods.compatskills.BindHandler.addBindLock(String failureMessage, ItemStack stack, String... requisitos);
    
    Ejemplo de prueba:
    mods.compatskills.BindHandler.addBindLock("Untold Dark Energies swirl around you and then subside", <bloodmagic:blood_orb>.withTag({orb: "bloodmagic:weak"}), "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minec
    

### Post-1.4.0

A partir de CompatSkills 1.4.0, el bloqueo de unión ha sido rodado como parte de ItemStack-Locking. Esto significa que ya no hay una sintaxis de script dedicada para añadir un bloqueo de enlace a un elemento.

Este cambio también se ha producido con algunos cambios más. Por ejemplo, el mensaje de error mostrado por defecto ha sido cambiado en algunos saludos:

- Ahora se muestra junto a los requisitos en el chat como un mensaje de estado de sólo jugador
- El mensaje de error es ahora una cadena localizable: 

    compatskills.bloodmagic.bindingError=Untold Dark Energies giran a tu alrededor y luego ceden
    

Esto significa que los autores del paquete de recursos ahora pueden localizar el mensaje de error en el idioma que deseen. Esto también significa que puedes usar mods como ResourceLoader o Base (con ContentTweaker presente) para cambiar la cadena de error.