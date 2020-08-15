# Usando este wiki

Este wiki está pensado para proporcionarte un contorno sobre el cual existen tipos en más crafttweaker y cuáles son sus usos.  
También hay algunos ejemplos en ciertas entradas para proporcionar más claridad.

# Términos

Antes de empezar, hay algunos términos a los que deberías acostumbrarte:

## ZenGetter

Un ZenGetter es una forma de recuperar información de un objeto determinado. Por ejemplo [ItemStack](/Vanilla/Items/IItemStack/) tiene un ZenGetter llamado "displayName".  
Utilizamos el ZenGetter así:

```zenscript
//object.zenGetter;
<minecraft:iron_ingot>.displayName;
```

Un ZenGetter siempre devolverá algo, en este caso una cadena que representa el nombre del elemento ("Iron Ingot").

## Ajuste

Un ZenSetter funciona casi igual que un ZenGetter, la única diferencia es que un ZenSetter establece, un ZenGetter consigue.  
Quedemos con nuestro [ItemStack](/Vanilla/Items/IItemStack/), ya que también tiene un ZenSetter llamado "displayName". Sabemos por la entrada que es de tipo cadena.

Utilizamos ZenSetter de esta manera:

```zenscript
//object.zenSetter = newValue;
<minecraft:iron_ingot>.displayName = "Unsuspecting Ingot";
```

Un ZenSetter nunca volverá algo, ya que está pensado para establecer, no para obtener.

## Asignar operadores

Si un elemento tiene ambos, un ZenGetter y un ZenSetter con el mismo nombre (ej. [ItemStack](/Vanilla/Items/IItemStack/) "displayName"), puede utilizar los operadores de asignación que no sean `=`:

Dependiendo del tipo que puedas usar estos: `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
Veamos lo que hacen:

```zenscript
//Puesto que tenemos un ZenGetter y un ZenSetter con el mismo nombre, el primero hace lo mismo que el segundo:
//object. enSetter += valor;
//object. enSetter = object.zenGetter + value;

<minecraft:iron_ingot>.displayName += " de Doom";
<minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " de Doom";
```