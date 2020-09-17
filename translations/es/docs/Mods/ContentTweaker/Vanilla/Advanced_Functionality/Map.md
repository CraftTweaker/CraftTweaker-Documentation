# Mapa

El Paquete de Mapa le permite establecer un waypoint usando el manejador de eventos de waypoint de BASE.

## Importando el paquete

Puedes importar el paquete para que no tengas que volver a escribir cada vez.

    importar mods.contenttweaker.Map;
    

## Añadir Waypoints

Este es el único método expuesto por el paquete Map y le permite establecer un waypoint en la ubicación dada.  
Es un método vacío con los parámetros:

- nombre de cadena
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/)
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/)
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)

    Map.setWaypoint(String name, IWorld world, IBlockPos pos, CTColor color)