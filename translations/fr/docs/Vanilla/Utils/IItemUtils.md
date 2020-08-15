# IItemUtils

L'interface ItemUtils fournit divers utils d'éléments.  
Il est accessible en utilisant le mot-clé `éléments`.

## Création de potions

La fonction createPotions vous permet de créer des potions personnalisées.  
Retourne la potion en tant que [IItemStack](/Vanilla/Items/IItemStack/).  
Comme le paramètre pour cette fonction est un vararg, vous pouvez soit fournir un objet[][] ou plusieurs objet[].  
Dans les deux cas, chaque objet [] doit contenir

1. Une [potion](/Vanilla/Potions/IPotion/)
2. Un int décrivant l'amplificateur/force de l'effet
3. Un entier décrivant la durée de l'effet. 

Si un objet[] n'est pas de cette longueur ou pas dans cet ordre, il sera ignoré.

```zenscript
//createPotion(Object[]...);
//createPotion([effect,force,duration],[effect2, force2,duration2],...);
//createPotion([[effect,force,duration],[effect2, force2,duration2],...]);
potion val = itemUtils.createPotion([[<potion:minecraft:strength>, 1, 1]]);
```

## Récupérer les éléments par nom

Ces deux fonctions retournent toutes deux un [IItemStack](/Vanilla/Items/IItemStack/)[] contenant tous les éléments correspondants.  
La première vérification contre les noms de registres des éléments, le 2ème utilise les noms non localisés.

```zenscript
//getItemsByRegexRegistryName(String Regex)
itemUtils.getItemsByRegexRegistryName(".*sword.*"); // toutes les choses qui ont l'épée dans le nom
itemUtils.getItemsByRegexRegistryName(". thermal.*"); // all thermal expansion/foundation/dynamics items

//getItemsByRegexUnlocalizedName(String Regex)
itemUtils.getItemsByRegexUnlocalizedName(".*pink.*"); // pink things!! <3
```

## Imiter le gestionnaire de la fourchette d'objet

Cette méthode fait la même chose que le [Gestionnaire de brackets d'article](/Vanilla/Brackets/Bracket_Item/).  
Contrairement au BH, vous devez fournir la méta en tant que paramètre optionnel.  
Si vous voulez utiliser la méta joker, utilisez `32767`.

    //getItem(location, @Optional meta);
    itemUtils.getItem("minecraft:iron_ingot"); //<minecraft:iron_ingot>
    itemUtils.getItem("minecraft:dye", 1); //<minecraft:dye:1>
    itemUtils.getItem("minecraft:wool", 32767); //<minecraft:wool:*>
    

## Créer un œuf d'apparition

La fonction createSpawnOg vous permet de créer des œufs d'apparition de mods personnalisés.  
Le customNBT est OPTIONAL et peut remplacer le tag de l'entité.  
Renvoie le spawn eff en tant que [IItemStack](/Vanilla/Items/IItemStack/).

```zenscript
//createSpawnEgg(entity, @optional customNBT)
//NBT remplace l'entité (cela crée un œuf de creeper!)
œuf val = itemUtils.createSpawnEgg(<entity:minecraft:sheep>, {EntityTag:{id:"minecraft:creeper",NoAI:1 en byte,PersistenceRequired:1 en byte}});
```