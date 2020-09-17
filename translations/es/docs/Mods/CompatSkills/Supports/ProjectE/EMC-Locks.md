# ProjectE

## Bloqueos EMC

A partir de 1.5.0 CompatSkills soporta bloqueos EMC para objetos.

## AVISO

A partir de 1.9.0 EMC Locks ha sido modificado:

    Soporte modificado de ProjectE para bloquear el aprendizaje de la transmutación y la multiplicación del condensador.
    La sintaxis es la misma que antes de mods.compatskills.EMCLock.addEMCLock(int emc, String... requisitos);
    Los jugadores podrán usar objetos que no coincidan con el bloqueo de emc pero no podrán aprender o duplicar ese objeto. Aprender y duplicar ahora también requiere que el jugador cumpla con los requisitos que el objeto tiene en él.
    Nota: Para poner elementos en la tabla de transmutación, todavía ganarás el emc pero no podrás volver a sacar el objeto.
    

### Sintaxis:

    // Ejemplo en blanco:
    mods.compatskills.EMCLock.addEMCLock(int emc, String... bloqueado)
    
    // Ejemplo:
    mods.compatskills.EMCLock.addEMCLock(8192, "reskillable:mining|5", "reskillable:magic|7")