# IItemUtils

La interfaz de ItemUtils proporciona varias utilidades de elementos.  
Se puede acceder usando la palabra clave `elementos`.

## Creando pociones

La función createPotions te permite crear pociones personalizadas.  
Devuelve la poción como [ItemStack](/Vanilla/Items/IItemStack/).  
Como el parámetro para esta función es un vararg, puede proporcionar un objeto[][] u otro objeto[].  
En ambos casos cada objeto [] necesita contener

1. Una [Ipoción](/Vanilla/Potions/IPotion/)
2. Un int que describe el amplificador/fuerza del efecto
3. Un int que describe la duración del efecto. 

Si un Objeto[] no es de esta longitud o no en este orden, será ignorado.

```zenscript
//createPotion(Object[]);
//createPotion([effect,strong,duration],[effect2, strength2,duration2],...);
//createPotion([[effect,strong,duration],[effect2, strength2,duration2],...]);
val potion = itemUtils.createPotion([[<potion:minecraft:strength>, 1, 1]]);
```

## Obtener artículos por nombre

Ambas funciones retornan un [ItemStack](/Vanilla/Items/IItemStack/)[] que contiene todos los elementos coincidentes.  
La primera comprueba los nombres del registro de los artículos, la segunda usa los nombres no localizados.

```zenscript
//getItemsByRegexRegistryName(String Regex)
itemUtils.getItemsByRegexRegistryName(".*sword.*"); // todas las cosas que tienen espada en el nombre
itemUtils.getItemsByRegexRegistryName(". thermal.*"); // todos los elementos térmicos expansion/foundation/dynamics

//getItemsByRegexUnlocalizedName(String Regex)
itemUtils.getItemsByRegexUnlocalizedName(".*pink.*"); // ¡¡¡¡¡¡¡¡¡¡Las cosas rosas! <3
```

## Imita el Manejador de Bracket Objeto

Este método hace lo mismo que el [Manejador de Bracket](/Vanilla/Brackets/Bracket_Item/)del artículo.  
A diferencia del BH, necesita proporcionar el meta como parámetro opcional.  
Si desea utilizar el meta, utilice `32767`.

    //getItem(location, @Optional meta);
    itemUtils.getItem("minecraft:iron_ingot"); //<minecraft:iron_ingot>
    itemUtils.getItem("minecraft:dye", 1); //<minecraft:dye:1>
    itemUtils.getItem("minecraft:wool", 32767); //<minecraft:wool:*>
    

## Crear huevo de Spawn

La función createSpawnEgg le permite crear huevos de aparición de mod personalizados.  
La función customNBT es OPCIONAL y puede sobrescribir la etiqueta de entidad.  
Devuelve el spawn eff como [ItemStack](/Vanilla/Items/IItemStack/).

```zenscript
//createSpawnEgg(entity, @opcional customNBT)
//NBT sobreescribe la entidad (¡esto crea un huevo de creeper!)
val egg = itemUtils.createSpawnEgg(<entity:minecraft:sheep>, {EntityTag:{id:"minecraft:creeper",NoAI:1 as byte,PersistenceRequired:1 as byte}});
```