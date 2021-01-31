# Usando esta wiki

El objetivo de esta wiki es darte una idea general de que Tipos existen dentro de CraftTweaker y sus usos. </br> También hay ejemplos en ciertas entradas para reforzar lo que se explica para que la wiki no sea puramente teórica.

# Términos

Antes de empezar, estos términos van a aparecer a menudo, así que aquí tienes una pequeña explicación: 

## ZenGetter

Un ZenGetter es un método para conseguir información de un objeto. Por ejemplo, el tipo ` IItemStack </a> tiene un <code> ZenGetter </0> llamado "displayName". </br>
Este ZenGetter se usa así:</p>

<pre><code class="zenscript">//object.zenGetter;
<minecraft:iron_ingot>.displayName;
`</pre> 

Un ZenGetter devuelve un algo, en este caso un string que representa el nombre que se verá cuando aguantes el objeto en tu inventario ("Lingote de Hierro").

## ZenSetter

Un ZenSetter es lo mismo que un ZenGetter, pero un ZenSetter establece un valor mientras que un ZenGetter obtiene esa misma información. </br> Nos quedaremos con nuestro tipo `ItemStack </0>, ya que también tiene el ZenSetter "displayName". Sabemos por el tipo de ZenMethod que devolvera un tipo String.</p>

<p>Usamos un ZenSetter así:</p>

<pre><code class="zenscript">//object.zenSetter = nuevoValor;
<minecraft:iron_ingot>.displayName = "Lingote Sospechoso";
`</pre> 

Un ZenSetter nunca devolvera información, ya que está hecho para establecer el valor de algo, no para obtenerlo.

## Asignar operadores

Si un objeto tiene tanto un ZenGetter como un ZenSetter con el mismo nombre (por ejemplo: un tipo </code> IItemStack </a> tiene "displayName"), puedes usar otros operadores de asignación que no sean </code> = </0>. 

Depending on the type you can use these: `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
Let's see what they do:

```zenscript
//Since we have a ZenGetter and a ZenSetter with the same name, the first does the same as the second:
//object.zenSetter += value;
//object.zenSetter = object.zenGetter + value;

<minecraft:iron_ingot>.displayName += " of Doom";
<minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " of Doom";
```