# Représentation du matériel

Une représentation matérielle représente un matériau de construction de Tinkers.  
Vous pouvez obtenir un tel objet soit à partir du [constructeur de matériaux](/Mods/ContentTweaker/Tinkers_Construct/MaterialBuilder/) ou du [gestionnaire de supports de matériaux](/Mods/ContentTweaker/Tinkers_Construct/Brackets/Bracket_Material/).

## Importation de la classe

Il peut être nécessaire d'importer la classe si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`import mods.contenttweaker.tconstruct.Material`

## ZenGetter

| ZenGetter          | Type de texte        |
| ------------------ | -------------------- |
| identifier         | chaîne de caractères |
| Chaîne de commande | chaîne de caractères |

## Ajout d'éléments de matériel

Si vous utilisez l'objet donné dans le constructeur de pièces, vous pouvez définir le nombre de points de matériaux qui vont donner, ou la quantité que l'objet va réparer.

    //monMaterial.addItem(IIngredient item, @Optional(1) int amountNeeded, @Optional(144) int amountMatched));
    monMaterial.addItem(<item:minecraft:iron_pickaxe>);
    monMaterial.addItem(<item:minecraft:iron_block>, 4, 288);
    

- L'élément `` est l'élément auquel il est associé. Vous pouvez utiliser les [conditions d'article](/Vanilla/Items/Item_Conditions/) mais pas de transformateurs. 
- `amountNeeded` est le nombre d'éléments qui sont correspondants. Vous pouvez les séparer sur tous les emplacements fournis par la forge d'outils, ce qui vous permet également d'aller au-delà de 64. Dans le deuxième exemple ci-dessus, vous avez besoin de 4 blocs de fer par ajout. La valeur par défaut est 1.
- `amountMatched` est la quantité de points matériels ajoutés par `amountNeeded`. Dans le deuxième exemple au-dessus de quatre blocs de fer donnent deux points de matériau. La valeur par défaut est 144 (un lingot/une valeur matérielle).

## Ajout de caractéristiques matérielles

Vous pouvez ajouter une caractéristique au matériau.  
Tous les éléments fabriqués à partir de ce matériau auront alors cette caractéristique.  
Utilise une [représentation de la trait](/Mods/ContentTweaker/Tinkers_Construct/Trait/) ou une chaîne avec l'identifiant (recommandé), renvoie nulle.  
Vous pouvez également fournir une chaîne de dépendance, qui fera que la caractéristique ne sera disponible que pour certains types de pièces, comme par exemple les têtes. L'envoi de ce paramètre injectera null, qui fera que la caractéristique ne sera sur le type de pièce que si aucun autre modificateur de dépendance nonnull n'est déjà sur cette partie.

La varaint de chaîne est recommandée, car au moment où CoT fonctionne, la plupart des Traits ne sont pas encore disponibles, et même au moment où CrT s'exécute, Ils n'ont pas tous été initialisés, mais si vous utilisez les cordes, l'ajout des matériaux est reporté jusqu'à ce qu'ils soient disponibles. Cependant, il n'est pas étanche aux erreurs et il n'y a pas de moyen facile de vérifier les fautes de frappe, alors méfiez-vous des messages d'erreur qui vous indiquent quels traits n'ont pas été trouvés.

```zenscript
myMaterial.addTrait("féroce", "head");
myMaterial.addTrait(<ticontrait:fiery>);
```