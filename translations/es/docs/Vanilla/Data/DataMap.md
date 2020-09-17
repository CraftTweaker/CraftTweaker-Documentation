# DataMap

Un mapa, a veces también llamado Arreglo Asociativo es una estructura de datos que le permite almacenar varios elementos.  
A diferencia de un Array, sin embargo, también puedes dar a cada uno de estos elementos una clave a la que llamar.  
El DataMap expande [IData](/Vanilla/Data/IData/), así que cada DataMap es IData, puede necesitar esta información más tarde.

## Creando un mapa:

Un Mapa es un tipo especial de [IData](/Vanilla/Data/IData/), así que en el último momento tendrás que importar esa interfaz:  
`importar crafttweaker. ata.IData;`

Puede que hayas notado que ningún tipo puede ser convertido en un mapa (ni puede ser convertido a cualquier tipo además de cadenas), ¡así que tiene que haber otra forma de crearlos!  
Allí está:

```zenscript
import crafttweaker.data.IData;

val myFirstMap = {key1: "value1",
                  key2: "value2",
                  key3: 3} as IData;
```

Lo que hay que recordar es:  
Maps son manejados como `Mapa<String,IData>`!  
Esto significa que las claves no deben contener caracteres que las cadenas CT normales no pueden manejar.  
También significa que mientras la clave es una cadena, el valor es otro [objeto IData](/Vanilla/Data/IData/) .  
Puedes anidar mapas dentro de mapas (eso es lo que hacen muchos NBT-Data):

```zenscript
val nestedMap = { key1: 
                    {
                        key1: "hola"
                    }
                } as IData;
```

## Recuperando Miembros

Desafortunadamente, los mapas creados como arriba son inmutables, por lo que no se puede cambiar a sus miembros.  
Para recuperar el miembro del Mapa necesitas conocer su nombre de clave. Entonces puedes hacer esto:

```zenscript
val myseconddMap = {key1: "value1",
                   key2: "value2",
                   key3: 3} como IData;

//Recupera el miembro llamado "key1"
var k1 = mySecondMap. ey1 as IData;
print(k1.asString());

//Obtiene el miembro llamado "key2"
var k2 = mySecondMap.memberGet("key2") as IData;
print(k2.asString());
```

## Modificando mapas

Puedes añadir o sustraer mapas unos de otros para obtener un nuevo mapa con valores cambiados.  
¡Esto incluso funciona para mapas anidados!

```zenscript
val map1 como IData = {
    key1 : "hola"
    key3 : "test"
};

val map2 as IData = {
    key2 : "bye"
    key3 : "override"
};

print(map1 + map2). sString()); //Imprime {key1 : "hola", key2 : "bye", key3 : "override"}



val map3 as IData = {
    key1 : "dos",
    key2 : "dos",
    key3 : "tres"
};

print((map3 - "key1"). sString()); //Imprime {key2 : "dos", key3 : "three"}

val map4 as IData = {
    key3 : "anything"
};

print((map3 - map4). sString()); //Imprime {key1 : "dos", key2 : "dos"}
```