# Promenade simple

Salut, merci ici. Donc vous essayez ContentTweaker pour 1.15, hein ?

Parfois, je vais habituellement abréger ContentTweaker avec CoT pour m'épargner quelques lettres (c'est plus un automatisme de Discord déjà), alors restez avec moi, d'accord ? Ensuite, je vous recommande tout d'abord d'installer un mod de gestionnaire de ressources, afin que les blocs/éléments que tu as un moyen d'ajouter des textures et des modèles pour les blocs et les éléments plus tard.

ContentTweaker essaiera de créer des fichiers modèles ainsi qu'une simple image sans texture dans votre dossier de ressource, tant qu'il détecte le mod [Le chargeur](https://www.curseforge.com/minecraft/mc-mods/the-loader) ou [Open Loader](https://www.curseforge.com/minecraft/mc-mods/open-loader) installé. Si aucun de ces deux éléments n'est installé, il n'affichera qu'un message dans le journal indiquant qu'il ne créera pas de textures pour vous. A un moment donné, il sera également possible de désactiver la génération des textures, mais pas dans la version curren Alpha/Beta.

Pour les textures générées, CoT ne remplacera pas les fichiers si ils existent déjà. pour que vous puissiez simplement remplacer les fichiers existants par vos propres fichiers et CoT n'annulera pas ces modifications.


« Allons-y, allons-y? » Je vais donner des exemples pour quelques blocs et des éléments simples. Si vous voulez voir tout le support de ces classes, vous pouvez trouver l'export API dans le dossier API juste en dessous de ce fichier dans la barre de navigation !

## Loader ContentTweaker
Puisque CraftTweaker en 1.14+ se chargera pendant que le serveur est en cours d'exécution, nous avons besoin d'un moyen de charger des scripts ailleurs. C'est à cela que sert le `#loader contenttweaker` !  
Il suffit de le mettre quelque part dans votre fichier et vous êtes prêt à y aller.  
Rappelez-vous que **aucun script crafttweaker n'est autorisé** dans `#loader contenttweaker`lorsqu'ils s'exécutent à différentes phases du cycle de laod !


## Blocs

Pour créer des blocs, vous devez créer un objet [BlockBuilder](/mods/contenttweaker/API/block/BlockBuilder) .  
Une fois que vous avez cela vous pouvez définir les propriétés les plus simples dans un patron du constructeur.

Vous pouvez alors appeler directement `build(nom)` sur celui-ci et être fait si vous voulez créer un bloc de base.  
Ou vous pourriez spécialiser le constructeur en utilisant `withType` et fournir une classe de constructeur spécialisée, par exemple [Escaliers de construction](/mods/contenttweaker/API/block/stairs/BlockBuilderStairs) ou [BlockBuilderPillarRotatable](/mods/contenttweaker/API/block/pillar/BlockBuilderPillarRotatable). Consultez leurs pages respectives pour voir quelles fonctionnalités supplémentaires elles offrent. Soyez conscient qu'une fois l'appel withType effectué, il n'y a pas de retour en arrière, donc définissez toutes les propriétés de base avant cet appel.

Souvenez-vous, quoi que vous fassiez, à la fin de la chaîne, vous **avez besoin d'un build(nom) `` call**, sinon rien ne se passera !

Assez parlé, vous voulez un exemple de copier/coller, n'est-ce pas?

```zenscript
#loader contenttweaker

import mods.contenttweaker.block.BlockBuilder;
import mods.contenttweaker.block.stairs.BlockBuilderStairs;
import mods.contenttweaker.block.basic.BlockBuilderBasic;
import mods.contenttweaker. colonne de verrouillage. lockBuilderPillarRotatable;


//La façon la plus simple, utilise blockamterial IRON
new BlockBuilder()
    //Will delegate to the Basic Builder
    . uild("generic_block");


//Définit un matériau de bloc différent.
new BlockBuilder(<blockmaterial:earth>)
    .withType<BlockBuilderBasic>()
    . uild("earth_like_block");


//Le type de pilier est essentiellement le même que les logs, une texture en haut/bas et une pour les côtés.
//Peut être tourné sur tous les axes, tout comme les logs.
//Les noms de texture par défaut seront "block_name" + "end", "_sides"
new BlockBuilder()
    .withType<BlockBuilderPillarRotatable>()
    .build("preset_pillar_rotatable_noarg");


//Stairs.
//A 3 Textures, top, bottom, côtés, par défaut, ils seront "block_name" + "_top", "_bottom", "_sides"
new BlockBuilder()
    .withType<BlockBuilderStairs>()
    .build("stairs_noarg");
```


## Éléments

Pour les éléments, vous faites plus ou moins la même chose, mais cette fois-ci vous avez besoin d'un [ItemBuilder](/mods/contenttweaker/API/item/ItemBuilder).  
Vous pouvez encore utiliser un `build(nom)` directement, ou basculez vers une version spécialisée en utilisant `withType`.  
Au moment de cette écriture, il n'y a cependant qu' [ItemBuilderTool](/mods/contenttweaker/API/item/tool/ItemBuilderTool).

Souvenez-vous, quoi que vous fassiez, à la fin de la chaîne, vous **avez besoin d'un build(nom) `` call**, sinon rien ne se passera !

Assez parlé, vous voulez un exemple de copier/coller, n'est-ce pas?
```zenscript
#loader contenttweaker

import mods.contenttweaker.item.ItemBuilder;
import mods.contenttweaker.item.tool.ItemBuilderTool;

//La façon la plus simple de créer des éléments.
new ItemBuilder().build("generic_item");
new ItemBuilder().build("generic_item_2");
new ItemBuilder().build("generic_item_3");


//With setting properties
new ItemBuilder()
    . ithMaxStackSize(16) //MaxStackSize et MaxDamage se contredisent, donc n'utilisez que 1
    . uild("other_item");


//Si vous voulez des outils, vous devrez définir le type.
//À partir du moment où vous définissez le type, vous changerez de contexte, donc les autres méthodes ne seront plus disponibles.
//Cela signifie que vous devez définir la durabilité et comme _avant_ l'appel withType.
new ItemBuilder()
    .withMaxDamage(100)
    .withType<ItemBuilderTool>()
    . ithToolType(<tooltype:axe>, 1) //Niveau de récolte de hache = 1
    .withToolType(<tooltype:shovel>, 3, 4. F) //Récolte de pelle niveau 3 et détruisez la vitesse 4.0
    . uild("mon_tool");



//Si vous voulez un outil qui fait des dégâts, vous pouvez également utiliser l'outil type
new ItemBuilder()
    . ithMaxDamage(100)
    . ithType<ItemBuilderTool>()
    .withAttackDamage(10.0F)
    .withAttackSpeed(5. F)
    .withDurabilityCostAttack(1) //Par défaut : 2
    .build("my_mace");

```

## Noms
Alors, comment allez-vous donner des noms appropriés aux éléments ?  
Pour cela, vous avez besoin d'un fichier de langue.  
Au moment de cette écriture CoT n'a pas encore créé celle-ci pour vous, vous devrez donc le créer vous-même.  
Dans votre pack de ressources, trouvez le dossier `assets/contenttweaker` .  
Ici, créez un dossier nommé `lang` s'il n'existe pas encore et créez un fichier nommé `en_us. fils` là-dedans.  
Je recommande toujours de commencer avec le fr_us un, parce que c'est à cela que le jeu retombera s'il ne peut pas trouver le nom d'une autre langue. Ensuite, n'hésitez pas à répéter cela avec d'autres codes de langue aussi.

Ici, vous devrez créer une carte Key-Value pour vos entrées. Les clés, aussi appelées clés de traduction, ou dans les versions précédentes non traduites, dépendent du nom du bloc/élément que vous avez utilisé, et ils ressembleront à
```
"<block|item>.contenttweaker.<the_name_you_gave_them>"
```
Pour la valeur, vous pouvez définir comment l'élément est nommé ingame dedans. Si vous n'êtes pas sûr de la syntaxe, vérifiez l'exemple ci-dessous, ou essayez un validateur JSON si vous avez la syntaxe baissée.


TLDR: `<resoruce_pack>/assets/contenttweaker/lang/en_us.json`.
```
{
  "block.contenttweaker.generic_block": "Générique Block",
  "item.contenttweaker.generic_item": "Article générique",
  "item.contenttweaker.generic_item_2": "Article générique le 2nd",
  "item.contenttweaker.generic_item_3": "Article générique le charmé"
}
```