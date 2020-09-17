# Funciones personalizadas

A veces las funciones proporcionadas por CT y addons no lo harán. ¡Así es como escribir tus propias funciones! Incluso puedes anidar funciones en funciones

## Síntesis básica

Generalmente, declaras un uso estático:

```zenscript
function NAME ([argumentos[como tipo]]) [como returnType]{
    [Statements]
    [return VALUE;]
}
```

Las cosas entre paréntesis son opcionales, dependiendo de lo que quieras conseguir. Veamos más de cerca las funciones específicas.

## Funciones estáticas

Las funciones estáticas se crean antes de que el script se ejecute y se pueda acceder desde cualquier lugar del script.  
Incluso puede acceder a las funciones declaradas fuera del script usando la [referencia de script cruzado](/AdvancedFunctions/Cross-Script_Reference).

### Funciones de Vacío

Las funciones de vacío son funciones que no devolverán ningún valor.

```zenscript
//calls the function tens() without arguments
tens();

//calls the function realTens() with the String "Hola Mundo!" as argument
realTens("Hola Mundo! );


//crates function tens() sin argumentos obligatorios
function tens(){
    //Calls function realTens() with "" as argument
    realTens("");
}


//creates function realTens() with one string required as argument
function realTens(a as string){
    //prints the argument 10 times
    for i in 1 to 11{
        print(a);
    }
}
```

### Devolver funciones

También puede especificar un valor que debe ser devuelto por una función. Se recomienda utilizar la palabra clave `como` para definir el tipo de devolución.

```zenscript
//calls add function with 1 and 99 as parameters
val result = add(1,99);
print(resultado);

///you puede colocar la función add dentro de la función de impresión también
print(add(2,64));

//define función add() con un y b como parámetros (ambos definidos como enteros! y establece el tipo de retorno a Integer
function add(a as int, as int) as int{
    //returns the sum of a and b
    return a+b;
}
```

## Funciones como variables

También puede utilizar funciones como variables. En este caso, se crearán como clases separadas. Aparte de eso, funcionan prácticamente igual que las funciones estáticas, se las llama por su nombre variable.  
Incluso puedes usarlos como [variables globales](/AdvancedFunctions/Global_Static_Variables/) de esta manera.

Si necesitas convertir el método (como lo haces para los globales) puedes usar esto:

    adición global como function(int, int)int = function (a as int, b as int) as int {
        return a + b;
    };
    
    print(addition(1,2));