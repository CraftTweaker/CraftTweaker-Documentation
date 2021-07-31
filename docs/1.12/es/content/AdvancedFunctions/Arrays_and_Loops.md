# Arrays

Un array es una Lista de varios elementos DEL MISMO TIPO.

## Declarando Arrays

Se declara como una variable y usando ````[ ```` y ````]````.

Importante: siempre * DEBES * inicializar un array a un tipo, aunque este vacio.

`var arrayDeFloats as float [];` no dará errores de sintaxis, pero al volver a cargar tu juego, obtendrás un error y tu archivo no funcionará.

Para inicializar un array vacío hazlo así: ` var arrayDeFloats as float[] = []; `

```zenscript
//Array que contiene "Hello" y "World"
val arrayDeStrings = ["Hola", "Mundo"] as string[];

//Array que contiene 1-3
val arrayDeInts = [1,2,3] as int[];
```

Si ahora estas pensando: "Espera, ¿no he visto estos parentesis antes?", es porque si que los has visto antes.   
  
Recuerda ```recipes.add(IItemStack,[[],[],[]]);```? Esto usa 3 arrays con cada uno conteniendo hasta un máximo de tres entradas para definir lo que es una receta en la mesa de crafteo.

## Dando un tipo a un Array (Inicializar)

Seguramente te habrás dado cuenta que todos los arrays tiene la palabra clave ` as ` (tipo) en alguna parte. ¿Por qué? Esto es porque ZenScript a veces no puede predecir que tipo de cosas habrá en los miembros de un array. Ésta podría ser la razón a errores de conversión de tipo.   
Mas vale prevenir que curar, y darle un tipo a tu Array, que debería ser único.   
Deberías tener en cuenta que si le das un tipo (en Inglés casteas) a un tipo no primitivo (es decir que no viene de por si en un lenguaje de programación y que es propio de Minecraft), deberías ` importar ` el tipo arriba de todo del archivo.

```zenscript
import crafttweaker.item.IItemStack;
val myArray = [<minecraft:gold_ingot>, <minecraft:iron_ingot>] as IItemStack[];
```

## Arrays dentro de Arrays

Puedes insertar un Array dentro de otro.

```zenscript
val arrayDeStrings1 = ["¡Hola","Mundo"] as string[];
val arrayDeStrings2 = ["Yo", "Soy"] as string[];
val arrayDeStrings3 = ["una","linda"] as string[];
val arrayDeStringsMúltiple = [stringArray1,stringArray2,stringArray3,["Mariposa","!"]] as string[][];
```

## Referirse a un objeto dentro de un Array

Te puedes referirse a un elemento dentro de un Array usando el índice (orden ordinal) del mismo. Los Arrays empiezan a contar desde 0. Es decir, el primer elemento tiene un índice de 0, el segundo de 1, y así sucesivamente.

Si te quieres referir a algo que esta en un Array dentro de otro Array, necesitas dos localizadores, cada uno da información de a lo que nos queremos referir.

```zenscript
/*
arrayDeStrings[0] es "Hola"
arrayDeStrings[1] es "Mundo"
arrayDeStrings[2] es "Yo"
arrayDeStrings[3] es "soy"
*/
val arrayDeStrings = ["Hola","Mundo","Yo","soy"] as string[];

//añade "Hola" al log
print(arrayDeStrings0]);


//Array dentro de un Array
val arrayDeStrings1 = ["¡Hola","Mundo"] as string[];
val arrayDeStrings2 = ["Yo","soy"] as string[];
val arrayDeStrings3 = ["una","linda"] as string[];
val arrayDeStringsMúltiple = [stringArray1,stringArray2,stringArray3,["Mariposa","!"]] as string[][];

/*
arrayDeStringsMúltiple[0] es ["Hola","Mundo"]
arrayDeStringsMúltiple[1] es ["¡Yo","soy"]
arrayDeStringsMúltiple2] es ["una","linda"]
arrayDeStringsMúltiple[3] es ["Mariposa","!"]

arrayDeStringsMúltiple[0][0] es "Hola"
arrayDeStringsMúltiple[0][1] es "Mundo"
etc.
*/

//añade "Mundo" al log
print(stringArrayAll[0][1]);
```

# Bucles

Un bucle es una función que se repite. Puedes usar un bucle para aplicar la misma acción a todo lo que se encuentre dentro de un Array.

## Bucle for 

El bucle for se usa para ir uno por uno a través los miembros de un Array. Esto sirve para poder repetir la misma acción con todos y cada uno de ellos. Puedes usar la palabra clave `break` para terminar el bucle.

```zenscript
import crafttweaker.item.IItemStack;

val array1 = [<minecraft:dirt>,<minecraft:planks>,<minecraft:diamond>] as IItemStack[];
val array2 = [<minecraft:grass>,<minecraft:log>,<minecraft:gold_ingot>] as IItemStack[];
val array3 = [<minecraft:wooden_axe>,<minecraft:golden_shovel>,<minecraft:emerald>] as IItemStack[];


//for [indice (opcional), ] nombreElemento in nombreArray {code}

for objeto in array1 {
    //define la variable "objeto" por cada elemento del array.  <br/>  La acción se ejecutará una vez para el objeto <minecraft:dirt>, y después para <minecraft:planks> y <minecraft:diamond>.
    //Usa esta variable a partir de ahora.

    }


for i in 0 to 10 {
    //define la variable "i" como un número que val del 0 al 9 (10 es el limite), y que va cambiando a medida que el bucle se ejecuta.
    print(i);
}

for i in 10 to 20 { <br/>
    //define la variable "i" como un número que va del 10 al 19 (a 20 no llegará)


    }

for i, objeto in array1 {
    //Define la variable "i" como el indice de cada elemento del array1.
    //Define la variable objeto como el elemento del array1
    //Ahora puedes usar estas variables. <br/>
//Craftea un Item del array1 con un Item del array2, y del array3, sin tener en cuenta lo que sean. 
recipes.addShapeless(item,[array1[i],array2[i]]);


for objeto in loadedMods["minecraft"].items {
    //Define la variable "objeto" como uno de los muchos items añadidos por el mod con modid "minecraft" y elimina su receta de crafteo.
    recipes.remove(objeto);
}
```

## Bucle While

El bucle while se ejecuta siempre y cuando la condición dada (en forma de bool) sea ` true `.   
Alternativamente puedes terminar el bucle de forma prematura usando la palabra clave `break`. Un bucle que no termina puede provocar problemas de RAM.

```zenscript
var i = 0; 

//Añadira los números que van del 0 a 9 al log, ya que son más pequeños que 10, ya que cuando i = 10 el bucle no se ejecuta.
while i < 10 {
    print(i); 
    i += 1;
} 

print("Despues del bucle i es: " + i);


//Añadira los números que van del 10 - 6 porque cuando i = 5 el bucle se termina forzosamente.
while (i > 0) {
    if i == 5
        break;
    print(i);
    i -= 1;
}

print("Despues del segundo bucle i es: " + i);


for k in 1 .. 10 {
    if (k == 5)
        break;
    print(k);
}
```

# Añadir elementos a un Array

Aunque no se recomienda, es posible añadir objetos dentro de un Array.   
Solo puedes añadir objetos de uno en uno, no puedes sumar un array a un array, pero si que puedes hacer un bucle que sume cada uno de los elementos ;D. Usas el operador ` + ` para hacer sumas a Arrays.

```zenscript
import crafttweaker.item.IItemStack;

val lingoteHierro = <minecraft:iron_ingot>;
var array as IItemStack[] = [iron, iron, iron];

array += lingoteHierro;
for objeto in array {
    print(objeto.displayName); </br>  // Añadirá Lingote de Hierro al log
}
```