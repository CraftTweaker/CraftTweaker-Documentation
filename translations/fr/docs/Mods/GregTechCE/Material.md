# Matériel

## Appeler le paquet

Le package `mods.gregtech.material` contient toutes les classes dont vous aurez besoin pour gérer les matériaux.

## Objet Matériel

Un objet de `mods.gregtech.material.Material` représente un matériau dans GregTech, avec quelques membres utiles que vous pouvez traiter.

Propriétés :

| Nom                          | Type de texte                 | Libellé                                                   |
| ---------------------------- | ----------------------------- | --------------------------------------------------------- |
| couleur                      | Indice                        | Couleur du matériau au format RVB                         |
| Formule chimique             | chaîne de caractères          | Formule chimique de ce matériau                           |
| Ensemble d'icônes            | format@@0 MaterialIconSet     | Ensemble d'icônes pour cette génération de méta-matériaux |
| composants                   | Liste immuable<materialstack> | Liste de ce composant matériel                            |
| format@@0 generationFlagsRaw | long                          | Drapeaux de génération de ce matériau (Voir les drapeaux) |
| élément                      | Élément                       | L'élément de ce matériau se compose de                    |

Obtenants :

| Nom                       | Type de texte        | Libellé                            |
| ------------------------- | -------------------- | ---------------------------------- |
| radioactive               | booléen              | Vrai si ce matériau est radioactif |
| protons                   | long                 |                                    |
| neutrons                  | long                 |                                    |
| masse                     | long                 |                                    |
| densité                   | long                 |                                    |
| format@@0 camelCaseString | chaîne de caractères |                                    |
| unlocalizedName           | chaîne de caractères |                                    |
| localizedName             | chaîne de caractères | Côte-client uniquement             |
| Nom                       | chaîne de caractères | Nom dans la liste de matériaux     |

Méthodes :

| Nom (Paramètres)                      | Libellé                            |
| ------------------------------------- | ---------------------------------- |
| addFlags(String... Noms des drapeaux) | Ajouter des drapeaux de génération |
| hasFlag(String flagName)              | A un drapeau de génération         |

`MaterialStack` peut ętre créé par `matériau * numéro`, męme que [quantité d'ingrédient](/Vanilla/Variable_Types/IIngredient.md) ou de fluidstack.

### FluidMaterial

`FluidMaterial` est un matériau qui contient des caractéristiques fluides. Sa superclasse est `Material` donc tous les membres de `Material` sont toujours disponibles.

Propriétés :

| Nom                   | Type de texte | Libellé |
| --------------------- | ------------- | ------- |
| Température de fluide | Indice        |         |

Obtenants :

| Nom                 | Type de texte                                               | Libellé                 |
| ------------------- | ----------------------------------------------------------- | ----------------------- |
| hasFluid            | booléen                                                     |                         |
| format@@0 hasPlasma | booléen                                                     |                         |
| isGastronomique     | booléen                                                     |                         |
| fluide              | [Définition ILiquid](/Vanilla/Liquids/ILiquidDefinition.md) | fluide matériel         |
| plasma              | [Définition ILiquid](/Vanilla/Liquids/ILiquidDefinition.md) | matériau liquide plasma |

### format@@0 DustMaterial

`DustMaterial` est un matériau qui contient des caractéristiques de poussière. Sa superclasse est `FluidMaterial` donc tous les membres de `FluidMaterial` sont toujours disponibles.

Propriétés :

| Nom                            | Type de texte          | Libellé                                                                                                                                                                                       |
| ------------------------------ | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| oreMultiplier                  | Indice                 | Multiplicateur de quantité de minerai concassé lors de la macération                                                                                                                          |
| par multiplicateur de produits | Indice                 | Multiplicateur de quantité de sortie des sous-produits lors de la pulvérisation                                                                                                               |
| format@@0 smeltingMultiplier   | Indice                 | Multiplicateur de quantité d'objets de fusion lors de la fonte d'objets vanillés                                                                                                              |
| Fonte directe                  | SolidMaterial          | Matériau auquel la fonte de ce minerai de matériau résultera                                                                                                                                  |
| lavé                           | FluidMaterial          | Matériau dans lequel le minerai de ce matériau doit être lavé pour donner une sortie supplémentaire                                                                                           |
| separatedInto                  | format@@0 DustMaterial | Lors de la séparation électromagnétique, ce minerai de matériau sera séparé par ce matériau et ce matériau spécifié par ce champ                                                              |
| temps de brûlure               | Indice                 | Le temps de combustion de ce matériau lorsqu'il est utilisé comme combustible dans la fonte du four, Zéro ou valeur négative indique que ce matériau ne peut pas être utilisé comme carburant |

Obtenants :

| Nom               | Type de texte        | Libellé                                                        |
| ----------------- | -------------------- | -------------------------------------------------------------- |
| par produits      | Liste<fluidmaterial> | Liste des minerais par produits                                |
| Niveau de récolte | Indice               | Niveau d'outil nécessaire pour récolter le bloc de ce matériau |

### SolidMaterial

`SolidMaterial` est un matériau qui contient des caractéristiques solides. Sa superclasse est `DustMaterial` donc tous les membres de `DustMaterial` sont toujours disponibles.

Propriétés :

| Nom            | Type de texte          | Libellé                                                                                                              |
| -------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------- |
| handleMaterial | SolidMaterial          | Le matériel spécifié ici sera requis comme gestionnaire pour faire de l'outil à partir de ce matériel                |
| macerateInto   | format@@0 DustMaterial | Macérer n'importe quel élément de ce matériau résultera en un matériau spécifié dans ce champ, par défaut à lui-même |

Obtenants :

<table>
  <tr>
    <th>
      Nom
    </th>
    
    <th>
      Type de texte
    </th>
    
    <th>
      Libellé
    </th>
  </tr>
  
  <tr>
    <td>
      toolSpeed
    </td>
    
    <td>
      flottant
    </td>
    
    <td>
      Vitesse des outils à partir de ce matériel, par défaut 1.0f
    </td>
  </tr>
  
  <tr>
    <td>
      toolDurabilité
    </td>
    
    <td>
      Indice
    </td>
    
    <td>
      Durabilité des outils fabriqués à partir de ce matériau, 0 pour les matériaux qui ne peuvent pas être utilisés pour les outils
    </td>
  </tr>
  
  <tr>
    <td>
      Outil Enchantements
    </td>
    
    <td>
      Liste<enchantmentdata>
    </td>
    
    <td>
      Enchantement à appliquer aux outils fabriqués à partir de ce matériau
    </td>
  </tr>
</table>

### IngotMaterial

`IngotMaterial` est un mtériel qui contient des fonctionnalités de lingot. Sa superclasse est `SolidMaterial` donc tous les membres de `SolidMaterial` sont encore disponibles.

Les matériaux de linge peuvent être utilisés comme câbles, câbles et tuyaux de fluide. Ces propriétés peuvent être définies par `setCableProperties(longue tension, int baseAmperage, int lossPerBlock)` et `setFluidPipeProperties(int throughput, int maxTemperature, boolean gasProof)`.

Par exemple :

```zenscript
var ingotMaterial = MaterialRegistry.createIngotMaterial(2052, "test", 0x1a2f3e, "lingot", 1);
ingotMaterial.setCableProperties(128, 4, 1); // 128EU/t 4A 1 perte/bloc
```

## Données d'enchantement

`gregtech.mods.EnchantmentData` se trouve dans `SolidMaterial#toolEnchantments`, ils sont un stockage interne d'un enchantement avec des niveaux.

Ils peuvent être convertis en `crafttweaker.enchantments.IEnchantmentDefinition` en appelant `l'accesseur d'enchantement` , et le niveau est disponible avec `niveau` getter.

Pour ajouter un enchantement pour les outils dans `SolidMaterial`, appelez simplement `addToolEnchantment(IEnchantment enchanantment)`pour ajouter un type de données d'enchantement CraftTweaker.

Exemple pour un matériau Fortune I:

```zenscript
var material = MaterialRegistry.get("iron"); // Modifie le matériau de fer
material.addToolEnchantment(<enchantment:minecraft:fortune> * 1); // Crée un objet d'enchantement et l'ajoute
```

## Drapeaux de génération de matériaux

Ces drapeaux sont applicables aux matériaux.

| Nom (insensible aux cas)                | Libellé                                                                                                                                                                                                                                                                                      |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DECOMPOSITION_BY_ELECTROLYZING        | Permet la génération de recettes de décomposition de l'électrolyseur                                                                                                                                                                                                                         |
| DECOMPOSITION_PAY_CENTRIER            | Active la génération de recettes de décomposition centrifuge                                                                                                                                                                                                                                 |
| ACTUALISATION                           | Ajouter au matériau s'il a une aura brûlante constante                                                                                                                                                                                                                                       |
| FLAMMABLE                               | Ajouter au matériau s'il est une sorte d'inflammable                                                                                                                                                                                                                                         |
| EXPLOSIVE                               | Ajouter au matériau s'il s'agit d'une sorte d'explosif                                                                                                                                                                                                                                       |
| Pas de UNIFICATION                      | Ajouter au matériel pour désactiver complètement son unification                                                                                                                                                                                                                             |
| Pas de rechange                         | Ajouter au matériau si l'un de ses objets ne peut pas être recyclé pour être broyé                                                                                                                                                                                                           |
| DÉSACTIVE_DECOMPOSITION                 | Désactive la génération de la recette de décomposition pour ce matériau et tous les matériaux qui l'ont en tant que composant                                                                                                                                                                |
| DECOMPOSITION_REQUIRES_HYDROGEN       | La recette de décomposition nécessite de l'hydrogène en tant qu'entrée supplémentaire. Le montant est égal au montant d'entrée                                                                                                                                                               |
| Générer un plan                         | Générer une plaque pour ce matériau, si c'est de la poussière, la recette du compresseur de poussière en plaque sera générée, Si son matériau en métal, les recettes des machines de pliage seront générées, si un bloc est trouvé, la recette de la machine de coupe sera également générée |
| GENERATE_DENSE                          | Générer une plaque dense.                                                                                                                                                                                                                                                                    |
| Pas de travail                          | Ajouter au matériel s'il ne peut pas être travaillé par d'autres moyens, que le brassage ou la fonte. Il est utilisé pour les matériaux revêtus.                                                                                                                                             |
| Pas de SMASHING                         | Ajouter au matériau s'il ne peut pas être utilisé pour des techniques habituelles de travail du métal, car il n'est pas possible de le plier.                                                                                                                                                |
| Pas de PME                              | Ajouter au matériau s'il est impossible de le fondre                                                                                                                                                                                                                                         |
| INDUCTION_BTN                           | Ajouter au matériau s'il produit moins dans une Fonderie d'induction.                                                                                                                                                                                                                        |
| SMS_INT_FLUID                         | Ajouter au matériau s'il fond en fluide (et il générera également du fluide pour ce matériau)                                                                                                                                                                                                |
| EXCLURE_RESTALLATION_RECETTES         |                                                                                                                                                                                                                                                                                              |
| Exclure le plan de place de l'opérateur |                                                                                                                                                                                                                                                                                              |
| CRYSTALLISABLE                          | Si ce matériau est cristallisable                                                                                                                                                                                                                                                            |
| Générer la longueur                     |                                                                                                                                                                                                                                                                                              |
| Hauteur de la sortie                    |                                                                                                                                                                                                                                                                                              |
| Générer un bloc                         | Chaque fois que le système devrait générer un bloc de liquide pour ce matériau fluide                                                                                                                                                                                                        |
| Générer un compte                       | Ajouter ce drapeau pour activer la génération de plasma pour ce matériau                                                                                                                                                                                                                     |
| Gaz                                     | Marque l'état de la matière comme gaz                                                                                                                                                                                                                                                        |
| Générer une roche                       |                                                                                                                                                                                                                                                                                              |
| Générer une géométrie                   |                                                                                                                                                                                                                                                                                              |
| Générer une longueur de roche           |                                                                                                                                                                                                                                                                                              |
| Plafond supérieur                       | Si ce matériau est broyable avec un simple mortier                                                                                                                                                                                                                                           |

## Ensemble d'icônes Material

Les jeux d'icônes sont disponibles dans `mods.gregtech.material.MaterialIconSet`.

- AUCUN
- MÉTALLIQUE
- DULL
- MAGNETIQUE
- QUARTZ
- DIAMOND
- EMÉRÉALISÉ
- SHINY
- PARTAGES
- ROUGE
- FIN
- SANTE
- FLINT
- RUBY
- LAPIS
- POWDER
- FLUID
- Gaz
- LIGNITE
- OPAL
- VERRE
- BOIS
- LEAF
- HORIZONTAL
- Verticale
- PAPIER
- NETHERSTAR

Les Getters sont `name`.

Les méthodes sont `toString()`, et la méthode statique `getByName(String name)`.

## Registre de Matériaux

Le registre des matériaux est une aide à obtenir, lister et créer des matériaux dans le système d'unification.

Vous pouvez importer la classe `mods.gregtech.material.MaterialRegistry`.

### Usage

```zenscript
#loader gregtech
import mods.gregtech.material.MaterialRegistry;

// Notez que le type de retour peut être null si rien n'a été trouvé
var material = MaterialRegistry. et(materialName);

// Liste tous les matériaux enregistrés
var materialList = MaterialRegistry. etAllMaterials();

// Définit toolDurability à 0 si le lingot ne peut pas être utilisé comme outil
// Notez qu'un paramètre @Optional peut être laissé dehors, et il est remplacé par défaut 0.
// La Gem et le lingot ne peuvent pas être utilisés comme outil par défaut.
MaterialRegistry.createFluidMaterial(int metaItemSubId, String name, int color, String iconSet, @Optional MaterialStack[] materialComponents);

MaterialRegistry. reateDustMaterial(int metaItemSubId, String name, int color, String iconSet, int harvestLevel, @Optional MaterialStack[] materialComponents);

MaterialRegistry. reateGemMaterial(int metaItemSubId, String name, int color, String iconSet, int harvestLevel, @Optional MaterialStack[] materialComponents, @Optional float toolSpeed, @Optional int toolDurability);

MaterialRegistry. reateIngotMaterial(int metaItemSubId, String name, int color, String iconSet, int harvestLevel, @Optional MaterialStack[] materialComponents, @Optional float toolSpeed, @Optional int toolDurability, @Optional int blastFurnaceTemperature);
```

### Exemple

```zenscript
#loader gregtech
import mods.gregtech.material.MaterialRegistry;

val dustMaterial = MaterialRegistry.createDustMaterial(700, "test", 0xFFAA33, "dull", 2);
dustMaterial. ddFlags(["GENERATE_ORE", "GENERATE_PLATE"]);

//Crée une gemme avec une infobulle montrant la formule chimique
//Ceci génère automatiquement une recette d'électrolyseur pour séparer ce matériau en ses parties constituantes.
val gemFancy = MaterialRegistry.createGemMaterial(701, "some_fancy_gemstone", 0x0F3E4E2, "gem_horizontal", 1, [<material:beryllium>*4, <material:silicon>*2, <material:oxygen>*9, <material:hydrogen>*2], 1. , 0 );

//Tout matériel précédemment enregistré peut être utilisé, y compris les documents personnalisés.
val ingotComplex = MaterialRegistry.createIngotMaterial(702, "complex_alloy", 0xF6872E, "brillant", 1, [<material:copper>*3, <material:electrum>*1, <material:redstone>*9, <material:some_fancy_gemstone>*2], 3.5, 0);
```