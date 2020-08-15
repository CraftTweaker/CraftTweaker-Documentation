# IOreDict

El OreDiccionario de Forge es como un enorme Léxico en la forma en que presenta muchas entradas diferentes y cada entrada se describe ajustando los Items.  
Cuando se habla de diccionarios de minerales, la gente se refiere principalmente a [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) no todo el diccionario de minerales.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.oredict.IOreDict;`

## Cómo recuperar el oreDictionary

Puede recuperar el OreDictionary usando la [`oreDict` palabra clave global](/Vanilla/Global_Functions/).

## Métodos

Entonces, ¿qué se puede hacer con el oreDict?

### Obtener un [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/)

Usted puede usar cualquiera de las tres maneras a continuación para referirse a una Entry de OreDicto, sin importar si ya existe o no.  
Si la entrada oreDictEntry aún no existe, será creada.

```zenscript
oreDict.ingotIron;
oreDict.get("ingotIron");
oreDict["ingotIron"];
```

### Iterando a través de todos los [IOreDictEntries registrados](/Vanilla/OreDict/IOreDictEntry/)

```zenscript
//el miembro de las entradas es para recuperar todas las entradas de oreDictionary registradas!
val allEntries = oreDict.entries;

for oreDictEntry in allEntries{
    print(oreDictEntry. Nombre);
}

//Alternativamente, sólo puedes iterar a través de oreDict
para entrada en oreDict {
    print(entry.name);
}

```

## Cómo comprobar si existe una entrada del diccionario minero

Puedes usar `in` o `tiene` operador para comprobar si un [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) ya existe:

```zenscript
if (oreDict en "ingotIron") {
    print("¡ingotIron existe! );
}

if (oreDict tiene "ingotIron") {
    print("ingotIron existe! );
}


//Alternativamente utiliza la función contenida:
if(oreDict. ontiene "ingotIron") {
    print("¡ingotIron existe!"); 
}
```