# Mod-Lock Tweaker

## Bloqueo de Modos

Esto se añadió como una capacidad de configuración en 1.2.0 y ahora tiene un CrT ZenMethod implementado para soportarlo. Esto también se puede conseguir a través de las configuraciones mencionadas anteriormente.

Los Bloqueos de Modos le permiten bloquear todas las Pilas de ItemStacks de un mod específico detrás de un bloqueo específico.

### Sintaxis:

    // Ejemplo en blanco
    mods.compatskills.ModLock.addModLock(String modId, String... bloqueado);
    
    // Ejemplo de trabajo:
    mods.compatskills.ModLock.addModLock("minecraft", "reskillable:building|4");
    
    El bloqueo anterior bloqueará todo del mod "minecraft" detrás de un bloqueo de "building 4"