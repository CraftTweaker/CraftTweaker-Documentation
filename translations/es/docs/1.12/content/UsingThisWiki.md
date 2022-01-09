# Usando esta wiki

This wiki is meant to provide you an outline on which Types exist in crafttweaker and what their uses are.  
There also are some examples in certain entries to provide further clarity.

# Términos
Antes de empezar, estos términos van a aparecer a menudo, así que aquí tienes una pequeña explicación:

## ZenGetter
Un ZenGetter es un método para conseguir información de un objeto. For example [IItemStack](/Vanilla/Items/IItemStack/) has a ZenGetter called "displayName".  
We use the ZenGetter like this:
```zenscript
//Objeto.zenGetter;
<minecraft:iron_ingot>.displayName;
```

Un `ZenGetter` devuelve un algo, en este caso un string que representa el nombre que se verá cuando aguantes el objeto en tu inventario ("Lingote de Hierro").


## ZenSetter
A ZenSetter works almost the same way as a ZenGetter does, the only difference is that a ZenSetter sets, a ZenGetter gets.  
Let's stay with our [IItemStack](/Vanilla/Items/IItemStack/), since it also has a ZenSetter called "displayName". Sabemos por el tipo de ZenMethod que devolvera un tipo String.

Usamos un ZenSetter así:
```zenscript
//Objeto.zenSetter = nuevoValor;
<minecraft:iron_ingot>.displayName = "Lingote Sospechoso";
```

Un ZenSetter nunca devolvera información, ya que está hecho para establecer el valor de algo, no para obtenerlo.


## Asignar operadores
</code> Si un objeto tiene tanto un `ZenGetter` como un `ZenSetter` con el mismo nombre (por ejemplo: un tipo </code>IItemStack</code> tiene "displayName"), puedes usar otros operadores de asignación que no sean ` =. `

Depending on the type you can use these: `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
Let's see what they do:

```zenscript
Como tenemos un ZenGetter y un ZenSetter con el mismo nombre, la primera línea hace lo mismo que la segunda:
//objecto.zenSetter += valor;
//objecto.zenSetter = objecto.zenGetter + valor;

<minecraft:iron_ingot>.displayName += " de la Muerte";
<minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " de la Muerte";
```