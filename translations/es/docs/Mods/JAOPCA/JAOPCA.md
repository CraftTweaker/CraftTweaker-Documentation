# JAOPCA

[JAOPCA](https://minecraft.curseforge.com/projects/jaopca) (Solo un Intento de Compatibilidad de Procesamiento) es un mod que apunta a agregar compatibilidad de procesamiento de mineral a muchos mods.

## Importando el paquete

Si desea acortar las llamadas a métodos, puede importar el paquete.  
Puede hacerlo utilizando

```zenscript
importar mods.jaopca.JAOPCA;
```

## Métodos

Este paquete es su punto de entrada para JAOPCA. Proporciona un medio de comprobar y obtener objetos de [oreEntrada](/Mods/JAOPCA/OreEntry/). Consulte la página correspondiente para obtener más información, pero en resumen, son nombres materiales (e. "Oro") que entonces pueden tener entradas, como trozos, chorros y todo.

- Entrada: p. ej., "nugget", "dust", "molten", ... (revisa [aquí](/Mods/JAOPCA/RegisteredEntries/) para ver una lista de todos ellos)
- [OreEntrada](/Mods/JAOPCA/OreEntry/): p. ej., "Diamant", "carbón", "Redstone", ...
- OreType: ej. "INGOT", "GEM", "DEUST"

### Comprobar si existe una entrada

Devuelve `true` si existe una entrada con el nombre dado

```zenscript
//mods.jaopca.JAOPCA.containsEntry(entryName);
mods.jaopca.JAOPCA.containsEntry("nugget");
```

### Obtén una única entrada

Devuelve el [OreEntry](/Mods/JAOPCA/OreEntry/) dado para el nombre dado, o `null` si no existe. *Cuidado: La mayoría de los materiales son Capitalizados, ¡sí, asuntos de carcas!*

```zenscript
//mods.jaopca.JAOPCA.getOre(oreName);
mods.jaopca.JAOPCA.getOre("Coal");
```

### Obtener todas las entradas para una entrada

Devuelve una lista de todos los objetos de [OreEntry](/Mods/JAOPCA/OreEntry/) que tienen la entrada dada registrada.

```zenscript
//mods.jaopca.JAOPCA.getOresForEntry(entryName);
mods.jaopca.JAOPCA.getOresForEntry("nugget");
```

### Obtener todas las entradas para una entrada

Devuelve una lista de todos los objetos de [OreEntry](/Mods/JAOPCA/OreEntry/) que son del oreType dado.

```zenscript
//mods.jaopca.JAOPCA.getOresForType(oreType);
mods.jaopca.JAOPCA.getOresForType("GEM");
```

### Obtener todas las entradas registradas

Devuelve una lista de todos los objetos [OreEntry](/Mods/JAOPCA/OreEntry/) registrados.

```zenscript
mods.jaopca.JAOPCA.getAllOres();
```