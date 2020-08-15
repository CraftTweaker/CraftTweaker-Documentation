# Fluide

Cela vous permet d'ajouter des fluides au jeu!

## Créer la représentation des fluides

Avant de pouvoir ajouter le fluide, vous devez créer une représentation des fluides qui vous permettra de définir les propriétés du fluide que vous souhaitez ajouter.  
C'est là que la [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) arrive dans:

```zenscript
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, int color);
mods.contenttweaker.VanillaFactory.createFluid(String unlocalizedName, CTColor color);
```

## Importer le package de représentation

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.Fluid ;`

## Propriétés Zen

Pour obtenir/définir les propriétés, vous pouvez soit utiliser les ZenGetters/Setters en respectant ou les méthodes Zen:

```zenscript
//propriété : densité
//ZenGetter
print(fluid.density);
//ZenSetter
fluid.density = 500;
//ZenMethods
fluid.getDensity();
fluid.setDensity(1000);
```

| Nom de la propriété       | Type de texte                                                                            | Requis | Valeur par défaut                | Description/Notes                                                                                    |
| ------------------------- | ---------------------------------------------------------------------------------------- | ------ | -------------------------------- | ---------------------------------------------------------------------------------------------------- |
| unlocalizedName           | chaîne de caractères                                                                     | Oui    |                                  | Nom, doit être en minuscule                                                                          |
| densité                   | Indice                                                                                   | Non    | 1000                             | À quelle vitesse vous pouvez marcher dans le fluide                                                  |
| gazeux                    | boolean                                                                                  | Non    | Faux                             | Le liquide est-il gazeux (coule vers le haut plutôt que vers le bas) ?                               |
| luminosité                | Indice                                                                                   | Non    | 0                                | Le niveau de lumière émis par le fluide                                                              |
| température               | Indice                                                                                   | Non    | 300                              | Température du fluide                                                                                |
| couleur                   | Indice                                                                                   | Oui    |                                  | Code couleur du Fluid                                                                                |
| coloriser                 | boolean                                                                                  | Non    | vrai                             | Le code couleur du fluide est-il appliqué ?                                                          |
| rareté                    | chaîne de caractères                                                                     | Non    | COMMUN                           | A quel point un fluide est rare, détermine la couleur ToolTip ("COMMON", "UNCOMMON", "RARE", "EPIC") |
| viscosité                 | Indice                                                                                   | Non    | 1000                             | Vitesse de propagation du fluide                                                                     |
| Remplir le son            | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) | Non    | BUCKET_OBJET                     | Le son joué lorsque le fluide est ramassé avec un seau                                               |
| Son vide                  | [ISoundEventDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundEventDefinition/) | Non    | BUCKET_INSTALL_TITLE           | Le son joué lorsque le fluide est placé                                                              |
| Vaporiser                 | boolean                                                                                  | Non    | Faux                             | Est-ce que la vaporisation est une fois placée dans le Nether?                                       |
| Endroit                   | chaîne de caractères                                                                     | Non    | contenttweaker:fluids/fluid      | L'emplacement où trouver la texture du fluide                                                        |
| format@@0 flowingLocation | chaîne de caractères                                                                     | Non    | contenttweaker:fluids/fluid_flow | L'emplacement où trouver la texture du fluide fluide                                                 |
| Matériel                  | [Définition des images](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/)   | Non    | EAU                              | Le matériau du fluide est fait de                                                                    |

## Enregistrement du fluide

Tu dois appeler cette méthode pour enregistrer le fluide dans le jeu !  
Sinon, rien ne se passera !  
Après avoir appelé cette fonction, vous ne pouvez pas désinscrire le fluide ou modifier l'une de ses propriétés !

```zenscript
fluid.register();
```

## Exemple de script

```zenscript
#loader contenttweaker
import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Fluid;
import mods.contenttweaker.Color;

var zsFluid = VanillaFactory.createFluid("zs_fluid", Color.fromHex("FF69B4"));
zsFluid.fillSound = <soundevent:block.anvil.place>;
zsFluid.register();
```

## Localisation du fluide

Vous devrez ajouter `fluid.fluidName = Nom localisé` aux fichiers de langue correspondants. Alternativement, vous pouvez utiliser la fonctionnalité de localisation [de CraftTweaker](/Vanilla/Game/IGame/), bien qu'il soit recommandé d'utiliser les fichiers de langue !