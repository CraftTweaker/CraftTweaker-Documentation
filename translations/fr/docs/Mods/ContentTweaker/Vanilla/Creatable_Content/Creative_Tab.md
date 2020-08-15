# Onglet Créatif

Cela vous permet d'ajouter des onglets créatifs au jeu!

## Création de l'objet ICreativeTab

Avant de pouvoir ajouter l'onglet, vous devez créer une représentation qui vous permettra de définir les propriétés de l'onglet que vous voulez ajouter.  
C'est là que la [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) arrive dans:

```zenscript
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStack iItemStack);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, ItemRepresentation iItem);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, BlockRepresentation iBlock);
mods.contenttweaker.VanillaFactory.createCreativeTab(String unlocalizedName, IItemStackSupplier supplier);
```

La chaîne de caractères est dans chacune des trois méthodes la même : c'est le nom non localisé que l'Onglet aura plus tard.  
Le second paramètre est le symbole que votre onglet transportera plus tard (e. . un seau de lave pour "misc").  
Vous pouvez décider si vous voulez utiliser une fonction itemReprésentation, un itemStack, une blockrepresentation ou une fonction itemStackSupplier .

## Appel d'un objet ICreativeTab existant

Vous pouvez également appeler un onglet [créatif](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Creative_Tab/) existant, bien que vous ne puissiez pas modifier l'une de ses propriétés.  
Pourquoi en auriez-vous besoin, demandez-vous?  
Vous en aurez besoin si vous voulez ajouter un bloc ou un élément nouvellement créé à un onglet existant !

## Propriétés

Vous pouvez appeler et définir toutes ces propriétés en utilisant l'onglet normal ZenGetters et ZenSetters  
`. nlocalizedName = "hh";`  
Notez que vous n'aurez probablement pas besoin des Setters car ces Properties sont déjà initialisées à vos valeurs souhaitées lorsque vous créez l'objet ICreativeTab.  
De même, vous ne pouvez ni définir ni obtenir de propriétés à partir d'un ICreativeTab(celui que vous avez récupéré en utilisant le [gestionnaire de parenthèses](/Mods/ContentTweaker/Vanilla/Brackets/Bracket_Creative_Tab/) ) !

| Nom de la propriété          | Type de texte                                                                                           | Requis  | Valeur par défaut | Description/Notes          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------- | ------- | ----------------- | -------------------------- |
| unlocalizedName              | chaîne de caractères                                                                                    | OUI     |                   | Le nom de l'onglet Créatif |
| pile d'icônes                | [IItemStack](/Vanilla/Items/IItemStack/)                                                                | OUI/NON |                   | Icône de l'onglet Créatif  |
| format@@0 iconStack-Supplier | [IItemStackSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemStackSupplier/) | NON/OUI | null              | Détermine quelque chose ?  |

## Enregistrement de l'onglet créatif

Vous devez appeler cette méthode pour enregistrer l'onglet créatif dans le jeu !  
Sinon, rien ne se passera !  
Après avoir appelé cette fonction, vous ne pouvez pas désinscrire l'onglet ou modifier l'une de ses propriétés !

```zenscript
tab.register();
```

## Exemple de script

```zenscript
#loader contenttweaker
import mods.contenttweaker.CreativeTab;
import mods.contenttweaker.VanillaFactory;

val zsTab = VanillaFactory.createCreativeTab("contenttweaker", <minecraft:dragon_egg>);
zsTab.register();
```