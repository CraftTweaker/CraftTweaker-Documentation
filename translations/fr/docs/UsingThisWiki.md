# Utiliser ce wiki

Ce wiki est destiné à vous fournir un aperçu des types qui existent dans crafttweaker et de leurs usages.  
Il y a aussi quelques exemples dans certaines entrées pour fournir plus de clarté.

# Conditions générales de vente

Avant de commencer, il y a des termes que vous pouvez utiliser pour :

## ZenGetter

Un ZenGetter est un moyen de récupérer des informations à partir d'un certain objet. Par exemple [IItemStack](/Vanilla/Items/IItemStack/) a un ZenGetter appelé "displayName".  
Nous utilisons le ZenGetter comme ceci :

```zenscript
//object.zenGetter;
<minecraft:iron_ingot>.displayName;
```

Un ZenGetter retournera toujours quelque chose, dans ce cas, une chaîne représentant le nom de l'objet ("Iron Ingot").

## ZenSetter

Un ZenSetter fonctionne à peu près de la même manière qu'un ZenGetter, la seule différence est qu'un ZenSetter s'applique, un ZenGetter obtient.  
Restons avec notre [IItemStack](/Vanilla/Items/IItemStack/), car il a aussi un ZenSetter appelé "displayName". Nous savons par l'entrée qu'elle est de type string.

Nous utilisons le ZenSetter comme ceci :

```zenscript
//object.zenSetter = newValue;
<minecraft:iron_ingot>.displayName = "Lingot sans méfiance";
```

Un ZenSetter ne retournera jamais quelque chose, car il est censé se mettre en place, ne pas obtenir.

## Assigner des opérateurs

Si un objet a les deux, un ZenGetter et un ZenSetter avec le même nom (par ex. [IItemStack](/Vanilla/Items/IItemStack/) "displayName"), vous pouvez utiliser les opérateurs d'assignation autres que `=`:

Selon le type que vous pouvez utiliser : `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`.  
Voyons voir ce qu'ils font :

```zenscript
//Puisque nous avons un ZenGetter et un ZenSetter avec le même nom, le premier fait le même que le second:
//object. enSetter += value;
//object. enSetter = object.zenGetter + valeur;

<minecraft:iron_ingot>.displayName += " de Doom";
<minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " de Doom";
```