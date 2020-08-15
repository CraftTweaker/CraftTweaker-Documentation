# Élément

Cela vous permet d'ajouter des objets au jeu!

## Créer la représentation de l'élément

Avant de pouvoir ajouter cet élément, vous devez créer une représentation d'élément qui vous permettra de définir les propriétés de l'élément que vous souhaitez ajouter.  
C'est là que la [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) arrive dans:

```zenscript
mods.contenttweaker.VanillaFactory.createItem(String unlocalizedName);
```

## Importer le package de représentation

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.Item;`

## Propriétés Zen

Pour obtenir/définir les propriétés, vous pouvez soit utiliser les ZenGetters/Setters en respectant ou les méthodes Zen:

```zenscript
//property name: maxStackSize
//ZenGetter
print(item.maxStackSize);
//ZenSetter
item.maxStackSize = 16;
//ZenMethods
item.getMaxStackSize();
item.setMaxStackSize(64);
```

| Nom de la propriété               | Type de texte                                                                                                             | Requis | Valeur par défaut | Description/Notes                                                                                                |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------- |
| beaconPayment                     | boolean                                                                                                                   | Non    | Faux              | Peut être donné à une balise pour activer les bonus                                                              |
| Onglet créatif                    | [Onglet ICreative](/Mods/ContentTweaker/Vanilla/Creatable_Content/Creative_Tab/)                                          | Non    | Divers            | L'onglet Créatif dans lequel l'élément sera placé                                                                |
| scintillant                       | boolean                                                                                                                   | Non    | Faux              | Peut être utilisé pour donner à votre objet l'effet brillant (comme s'il était enchanté).                        |
| format@@0 itemColorSupplier       | [IItemColorSupplier](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemColorSupplier/)                   | Non    | -1 comme couleur  | La couleur de l'élément                                                                                          |
| Éléments détruits                 | [IItemDétruit](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroyedBlock/)                        | Non    | Faux              | Que se passe-t-il lorsque l'objet vient de détruire un bloc?                                                     |
| Vitesse de destruction des objets | [Vitesse de destruction de l'IIème](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemDestroySpeed/)     | Non    | null              | Détermine la vitesse de rupture du bloc de l'objet.                                                              |
| itemContainerItem                 | [IItemGetContainerItem](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemGetContainerItem/)             | Non    | null              | Que reste-t-il dans la grille de fabrication lorsque cet objet a été utilisé dans une recette ?                  |
| Clic droit de l'élément           | [IItemRightClick](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemRightClick/)                         | Non    |                   | Appelé lorsque le joueur clique droit avec l'objet                                                               |
| Utiliser une action               | Utiliser une action                                                                                                       | Non    | "NONE"            | Quelle animation aura l'élément ("NONE", "EAT", "DRINK", "BLOCK", "BOW")                                         |
| Nom de fournisseur localisé       | [Nom du fournisseur de traduction](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/ILocalizedNameSupplier/) | Non    | null              | Peut être utilisé pour déterminer par programme le nom d'affichage de votre objet                                |
| maxDamage                         | Indice                                                                                                                    | Non    | -1                | Combien d'utilisations contient l'élément ? Moins de 0 signifie qu'il ne peut pas être endommagé                 |
| maxStackSize                      | Indice                                                                                                                    | Non    | 64                | Combien d'objets peuvent être rangés dans une seule pile? Moins de 0 signifie la taille de la pile standard (64) |
| onItemUpdate                      | [IItemUpdate](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUpdate/)                                 | Non    | null              | Appelé chaque tick tant que l'objet est dans l'inventaire d'un joueur                                            |
| onItemUse                         | [IItemUse](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUse/)                                       | Non    | null              | Appelé lorsque le joueur fait un clic droit sur un bloc avec l'objet                                             |
| format@@0 onItemUseUseFinish      | [format@@0 IItemUseFinish](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUseFinish/)                 | Non    | null              | Appelé quand le joueur termine en utilisant l'objet                                                              |
| rareté                            | ÉnumRarité                                                                                                                | Non    | COMMUN            | À quel point un élément est rare, détermine la couleur de l'infobulle ("COMMON", "UNCOMMON", "RARE", "EPIC")     |
| format@@0 smeltingExprerience     | flottant                                                                                                                  | Non    | -1                | Combien d'expérience le joueur gagne pour fondre cet objet dans un four ?                                        |
| Localisation de la texture        | [format@@0 CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/)                          | Non    | null              | L'emplacement de la ressource de l'objet, utilisé pour les textures, etc.                                        |
| Classe de l'outil                 | chaîne de caractères                                                                                                      | Non    |                   | Quel type de bloc l'outil peut casser                                                                            |
| Niveauoutil                       | Indice                                                                                                                    | Non    | -1                | Le niveau des blocs peut être cassé                                                                              |
| unlocalizedName                   | chaîne de caractères                                                                                                      | Oui    |                   | Nom, doit être en minuscule                                                                                      |

## Enregistrement de l'article

Tu dois appeler cette méthode pour enregistrer l'objet dans le jeu !  
Sinon, rien ne se passera !  
Après avoir appelé cette fonction, vous ne pouvez pas désinscrire l'élément ou modifier l'une de ses propriétés !

```zenscript
item.register();
```

## Exemple de script

```zenscript
#loader contenttweaker
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Item;
import mods.contenttweaker.IItemRightClick;
import mods. ontenttweaker.Commandes;

var zsItem = VanillaFactory.createItem("zs_item");
zsItem.maxStackSize = 8;
zsItem.rarity = "rare";
zsItem. reativeTab = zsCreativeTab;
zsItem.smeltingExperience = 10;
zsItem.toolClass = "pickaxe";
zsItem.toolLevel = 5;
zsItem.beaconPayment = true;
zsItem. temRightClick = function(stack, world, player, hand) {
    Commandes. all("les joueurs du tableau de scores définissent le nom @p 5", le joueur, le monde);
    retournent "Pass";
};
zsItem.register();
```

## Localisation de l'élément

Vous devrez ajouter `item.contenttweaker.itemName.name=Localized Name` aux fichiers de langue correspondants.  
Exemple dans en_us. fichier ang `item.contenttweaker.zsItem.name=Your itemName Here` will show `Your itemName Here` in the game.

Alternativement, vous pouvez utiliser la fonctionnalité de localisation [de CraftTweaker](/Vanilla/Game/IGame/), bien qu'il soit recommandé d'utiliser les fichiers de langue !