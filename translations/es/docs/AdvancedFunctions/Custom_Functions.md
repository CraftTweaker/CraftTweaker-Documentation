# Funciones personalizadas

A veces las funciones que Crafttweaker te proporciona no son suficiente. Aquí te enseñamos como escribir tus propias funciones. Puedes nestear funciones dentro de otras

## Sintaxis básica

Generalmente, declaras una funcion usando:

```zenscript
function Nombre ([argumentos[as tipo]]) [as tipoDeDevolucion]{
    [Código]
    [return VALOR;]
}
```

Las cosas entre claudators son opcionales, dependiendo de lo que quieras conseguir. Vamos a mirar funciones más específicas

## Funciones estáticas

Funciones estáticas se crean antes de que el script se ejecute y se pueden acceder desde el mismo script en cualquier parte.</br> Para usarlas en otro script debes usar [Referencia A Través de Scripts](/AdvancedFunctions/Cross-Script_Reference).

### Funciones Void

Funciones void son aquellas que no devuelven un valor

```zenscript
//ejecuta la función uno sin argumentos
uno();

//llama la funcion dos() con el String "Hola Mundo" como argumento
dos("Hola Mundo");


//crea la funcion uno() sin argumentos requeridos
function uno() as void{
   //llama la función dos() con "" como argumento
    dos()("");
}


//crea la funcion dos() con un String requerido como argumento
function dos()(a as string){
    //printea el argumento 10 veces
    for i in 0 to 10{
        print(a);
    }
}
```

### Funciones que Devuelven Valores

También puedes especificar un valor que devuelve la función. Se recomendia usar la palabra clave `as` para definir el tipo que debe ser devuelto.

```zenscript
//ejecuta sumar() con 1 y 99 como argumentos
val resultado = sumar(1,99);
print(resultado);

//También puedes eliminar la necesidad de una variable
print(sumar(2,64));

//crea la funcion sumar con dos parametros (Integers) y configura el tipo de devolucion a Integer.
function sumar(a as int, b as int) as int {
// suma los dos valores
return a + b;
} 
```

## Funciones como variables

Puedes usar funciones como variables. En este caso, se crean como clases separadas. Aparte de eso, funcionan de la misma manera que las funciones estáticas, las puedes ejecutar con su nombre de variable.</br> También las puedes usar como [variables globales](/AdvancedFunctions/Global_Static_Variables/). 

Si necesitas hacer la funcion global, el cast debe ir así:

    global sumar as function(int, int)int = function (a as int, b as int) as int {
       return a + b;
    };