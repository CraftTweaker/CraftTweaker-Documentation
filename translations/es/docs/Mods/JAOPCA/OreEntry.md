# OreEntrada

Una OreEntrada es un material como oro, diamante, carbón, redstone y así sucesivamente.  
Puedes usar esto para obtener varios [OreDictEntries](/Vanilla/OreDict/IOreDictEntry/), [ItemStacks](/Vanilla/Items/IItemStack/), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/).

## Métodos

En general, los métodos toman un parámetro de cadena que es un prefijo a usar.  
Por ejemplo, una entrada de oro `"Oro"`, llamado con el prefijo `"polvo"` devolverá Polvo de Oro.  
Para estos ejemplos, asumiremos que esto fue declarado:  
Los comentarios después de las llamadas de ejemplo indicarán qué puede devolver la llamada de método (a menos que en la categoría extra).

```zenscript
val oreEntry = mods.jaopca.JAOPCA.getOre("Oro");
```

### Obtener propiedades de entrada

Puedes obtener estas propiedades:

```zenscript
oreEntry.energyModifier; //1.0 as double
oreEntry.rarity; //1.0 as double
oreEntry.oreType; //"INGOT" as string
```

### Obtener OreName o OreNameSynonyms

El nombre del mineral es esencial como se registra y lo que se utiliza en un getOre para recuperarlo.  
Los sinónimos de nombre de mineral son sinónimos que mods o empaquetan autores pueden registrarse para combinar dos o más oreEntries (e. . "Aluminio" y "Aluminio"). La mayoría de los oreEntries probablemente no tendrán nada registrado, sin embargo. El getter de sinónimos devolverá una lista que contiene todos los sinónimos como cadenas.

```zenscript
oreEntry.oreName; //"Oro"
oreEntry.oreNameSynonyms; //[]
```

### Obtener IOreDictEntrada

Devuelve un nuevo [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) con el prefijo dado.

```zenscript
oreEntry.getOreDictEntry("dust"); //<ore:dustGold>
```

### Get IItemStack

Devuelve un nuevo [ItemStacks](/Vanilla/Items/IItemStack/) que coincide con el prefijo dado.  
Puede proporcionar un prefijo alternativo de reserva para ser utilizado si no se encuentra ningún elemento coincidente.

Si no se encuentra ningún elemento coincidente y no se encuentra ningún elemento coincidente usando el prefijo de reserva (si se proporciona), devolverá `null`.

```zenscript
//oreEntry.getItemStack(prefix);
oreEntry.getItemStack("coin"); //<jaopca:item_coingold>
oreEntry.getItemStack("invalid"); /null

//oreEntry.getItemStack(prefijo, fallback);
oreEntry.getItemStack("invalid", "coin"); //<jaopca:item_coingold>
oreEntry.getItemStack("invalid", "faulty"); //null
```

### Get ILiquidStack

Devuelve un nuevo [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) que coincide con el prefijo dado.  
Puede proporcionar un prefijo alternativo de reserva para ser utilizado si no se encuentra ningún líquido coincidente.

Si no se encuentra ningún líquido coincidente y no se encuentra ningún líquido coincidente usando el prefijo de reserva (si se proporciona), devolverá `null`.

```zenscript
//oreEntry.getLiquidStack(prefix);
oreEntry.getLiquidStack("molten"); //<liquid:gold>
oreEntry.getLiquidStack("invalid"); /null

//oreEntry.getLiquidStack(prefix, fallback);
oreEntry.getLiquidStack("invalid", "molten"); //<liquid:gold>
oreEntry.getLiquidStack("invalid", "faulty"); //null
```

### Obtener extra

Una entrada puede tener un extra registrado. Un extra puede ser por ejemplo una salida secundaria al pulverizar un óleo coincidente.

Puedes comprobar si una entrada tiene un extra, obtener el extra (o `null` si no está presente) o el extraName.  
También puede utilizar los mismos métodos que los anteriores (`getOreDictEntry`, `getLiquidStack` y `getItemStack`).

Hay hasta 3 extras que se pueden registrar. En aras de la simplicidad no habrá ejemplos de los métodos equivalentes, sólo se indicarán

```zenscript
//Primer extra
oreEntry.hasExtra; //true o false
oreEntry.extra; //matching oreEntry o null
oreEntry. xtraName; //the name or null

//Methods for first extra
oreEntry. etOreDictEntryExtra(prefijo);
oreEntry.getItemStackExtra(prefijo);
oreEntry.getItemStackExtra(prefijo, fallos);
oreEntry. etLiquidStackExtra(prefijo);
oreEntry.getLiquidStackExtra(prefijo, falla);



//Segundo extra
oreEntry.hasSecdExtra; //true o falso
oreEntry. econdExtra; //matching oreEntry o null
oreEntry.secondExtraName; //the name or null

///Methods for second extra
oreEntry.getOreDictEntrySecondExtra(prefix);
oreEntry. etItemStackSecondExtra(prefijo);
oreEntry.getItemStackSecondExtra(prefijo, falla);
oreEntry.getLiquidStackSecondExtra(prefijo);
oreEntry.getLiquidStackSecondExtra(prefijo, falla);



//Tercer extra
oreEntry.hasThirdExtra; /true o falso
oreEntry.thirdExtra; ///coincidente oreEntry o null
oreEntry. hirdExtraName; //the name or null

//Methods for third extra
oreEntry.getOreDictEntryThirdExtra(prefix);
oreEntry.getItemStackThirdExtra(prefix);
oreEntry.getItemStackThirdExtra(prefijo, falla);
oreEntry.getLiquidStackThirdExtra(prefix);
oreEntry.getLiquidStackThirdExtra(prefijo, falle);
```