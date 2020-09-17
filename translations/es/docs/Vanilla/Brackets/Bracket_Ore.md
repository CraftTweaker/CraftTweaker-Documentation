# Manejador de brazaletes de diccionario minero

El Ore Dictionary Bracket Handler te da acceso a los Diccionarios de Ore en el juego.

Los Diccionarios de Minas son referenciados en el Manejador de Bracket de Minas por así:

```zenscript
<ore:orename>
<ore:ingotIron>
```

Returns an [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/), as long as no `*` is in the call, otherwise returns a `List<IOreDictEntry>` If the oreDictionary is not yet in the game, will create a new and empty oreDictionary with the given name and return that. Consulte la entrada del [Diccionario Mineral](/Vanilla/OreDict/IOreDictEntry/) para obtener más información sobre qué hacer con ellos.

# Obteniendo todos los diccionarios de mineral registrados

Puede usar el siguiente comando para mostrar todos los diccionarios de mineral registrados al registro de CraftTweaker

    /ct oredict
    /crafttweaker oredict