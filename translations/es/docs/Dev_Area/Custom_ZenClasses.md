# ZenClasses

Lo digo aquí para que sólo aquellos que quieran saber al menos algunas cosas sobre ZS lo encontrarán.

Una clase ZenClass es esencialmente una clase java, pero se puede definir desde dentro de ZS.  
Si crees que 'eso no encaja realmente con el tema de un lenguaje de script', tienes razón.  
Es por eso que sólo aquellos que son capaces de arreglárselas deberían encontrar esto.

## Palabras clave

Estas son palabras clave que se pueden encontrar en el cuerpo de la clase y que iniciarán una cierta acción, como añadir un miembro a la clase.

| Nombre         | Descripción                                                                                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| zenClass       | Inicia una nueva clase, necesita ser seguida por el nombre.                                                                                                           |
| var/val        | Crea una variable de instancia, final de la palabra clave val fue utilizada.                                                                                          |
| estático       | Crea una variable de clase (estática). No pueden ser definitivas.                                                                                                     |
| zenConstructor | Crea un constructor para la clase.                                                                                                                                    |
| función        | Crea un método de instancia. No hay forma de crear métodos estáticos, ya que puede hacerlo fuera de la clase también.                                                 |
| esto           | Referencia al objeto en el que nos encontramos actualmente. Únicamente utilizable en métodos y constructores. Utilizado si un parámetro oculta un campo, por ejemplo. |

## Ejemplo

Un ejemplo comentado:

```zenscript
<br /><br />//Creates a class named 'name', you can also access it using scripts.scriptPath.name


zenClass name {

    //Each variable needs a type set. 
    //Variables no necesita inicializarse, pero si lo haces, la inicialización es como en Java.


    //Statics están inicializados en <clinit>, es decir, cuando la clase está definida por primera vez.
    static myStatic as string = "value";
    static otherStatic as string = "value";

    ///Si una instancia varaible tiene un inicializador, se inicializará después de la primera llamada al constructor.
    val nonStatic as string = "123";

    //Si una variable de instancia no tiene inicializador, puede inicializarla en el constructor si es necesario, incluso si es final.
    val nonStaticTwo como cadena;


    //Un constructor requiere todos los parámetros (explícitamente escritos)
    zenConstructor(parámetro como string, parameter2 como cadena) {
        print("TETETE");
        print(parameter);


        nonStaticTwo = parameter2;
    }


    //Puedes tener varios constructores, pero no hay manera de encadenar constructores.
    zenConstructor(parametro as string) {
        print("FFFFFFF");
    }


    //Es recomendable que estadues los tipos de retorno del método explícitamente también.
    function myMethod(arg as string, arg1 as string) as string {
        return "value" + arg ~ arg1;
    }

}



//Usted llama a un constructor llamando al tipo de clase/name
var test = name("NOPE");
test = name("nope", "noper");
print(test. yMethod("uno", "dos"));

print("");

//You can call statics by the use of the class type/name
print(name. yStatic);
print(name("parameter1", "parameter2").nonStatic);

val ttt = name("t");

//También puede llamar a estáticos mediante el uso de una instancia de clase.
ttt.myStatic = "1";
print(ttt.myStatic);
```