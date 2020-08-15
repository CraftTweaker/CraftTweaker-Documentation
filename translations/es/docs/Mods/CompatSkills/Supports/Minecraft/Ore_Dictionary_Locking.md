# Bloqueo del OreDiccionario

## Característica:

Este bloqueo añade la capacidad de bloquear todos y cada uno de los elementos que están bajo una cierta etiqueta del Diccionario Meteorológico. Esto significa que si bloquea la entrada del diccionario minero de "oreIron" cualquier elemento o bloque con la etiqueta "oreIron" se bloquearía detrás de los requisitos establecidos. Este tipo de bloqueo también soporta un parámetro [IData](/Vanilla/Data/IData/) lo que significa que solo afecta a cosas bajo la etiqueta Ore-Dict si tienen una etiqueta IDATA que coincida con la proporcionada al bloqueo.

## Sintaxis:

    mods.compatskills.OreDictLock.addOreDictLock(entrada IOreDictEntry , String... bloqueado);
    mods.compatskills.OreDictLock.addNBTOreDictLock(entrada IOreDictEntry, etiqueta IData, String... bloqueado);
    
    mods.compatskills.OreDictLock.addOreDictLock(<ore:ingotIron>, "dim|1");
    mods.compatskills.OreDictLock.addNBTOreDictLock(<ore:oreIron>, IData tag, "dim|1");