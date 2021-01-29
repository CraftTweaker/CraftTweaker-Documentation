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

A ZenSetter works almost the same way as a ZenGetter does, the only difference is that a ZenSetter sets, a ZenGetter gets.  
Let's stay with our [IItemStack](/Vanilla/Items/IItemStack/), since it also has a ZenSetter called "displayName". We know from the entry that it is of type string.

We use the ZenSetter like this:

```zenscript
//object.zenSetter = newValue;
<minecraft:iron_ingot>.displayName = "Unsuspecting Ingot";
```

A ZenSetter will never return something, since it is meant to set, not to get.

## Assign operators

If an item has both, a ZenGetter and a ZenSetter with the same name (e.g. [IItemStack's](/Vanilla/Items/IItemStack/) "displayName"), you can use the assign operators other than `=`:

Depending on the type you can use these: `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
Let's see what they do:

```zenscript
//Since we have a ZenGetter and a ZenSetter with the same name, the first does the same as the second:
//object.zenSetter += value;
//object.zenSetter = object.zenGetter + value;

<minecraft:iron_ingot>.displayName += " of Doom";
<minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " of Doom";
```