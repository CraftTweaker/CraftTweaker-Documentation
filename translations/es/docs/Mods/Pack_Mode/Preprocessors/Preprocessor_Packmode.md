# Preprocesador de modo paquete

El preprocesador Packmode cambiará el script para que sólo se ejecute si un determinado modo de paquete está habilitado en el archivo de configuración del modo paquete

## Llamar

Llamas al preprocesador de Packmode añadiendo `#packmode mode(s)` a tu archivo de script, con `mode(s)` siendo el modo(s) de paquete que desea que el script se ejecute en

## Ejemplo

`#packmode normal experto` activaría el script en modo normal y experto

```zenscript
#packmode normal
import crafttweaker.items.ItemStack;

print("Si aparezco en tus CT-logs, el modo de paquete normal está activado!");
```

## Qué hace

El procesador sólo permitirá que el script se ejecute si un cierto modo de paquete está habilitado.