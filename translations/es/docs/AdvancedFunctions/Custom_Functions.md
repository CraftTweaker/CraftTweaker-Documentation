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

Puedes usar funciones como variables. In this case, they will be created as separate classes. Other than that, they work pretty much the same as static functions, you call them by their variable name.  
You can even use them as [global variables](/AdvancedFunctions/Global_Static_Variables/) this way.

If you need to cast the method (as you do for globals) you can use this:

    global addition as function(int, int)int = function (a as int, b as int) as int {
        return a + b;
    };
    
    print(addition(1,2));