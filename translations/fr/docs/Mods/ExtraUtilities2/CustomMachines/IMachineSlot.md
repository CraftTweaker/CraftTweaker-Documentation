# IMachineSlot

Une machine à sous est une fente qui accepte des articles ou des liquides.  
Vous en avez besoin lors de la création d'une machine en utilisant le [IMachineRegistry](/Mods/ExtraUtilities2/CustomMachines/IMachineRegistry) plus tard.

## Importation du paquet

Si vous voulez raccourcir les appels de méthodes ou rencontrer des problèmes, vous pourriez devoir [importer](/AdvancedFunctions/Import) le paquet.  
Vous pouvez le faire en utilisant

```zenscript
importer extrautilities2.Tweaker.IMachineSlotte;
```

## Création d'un nouvel IMachineSlot

Le paquet IMachineSlot propose des méthodes pour créer de nouveaux objets IMachineSlot :

```zenscript
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, isOptional);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, stackCapacity);
extrautilities2.Tweaker.IMachineSlot.newItemStackSlot(name, isOptional, stackCapacity);
extrautilities2.Tweaker.IMachineSlot. ewItemStackSlot(name, color, isOptional, backgroundTexture, stackCapacity);


newFluidSlot(name);
newFluidSlot(name, stackCapacity);
newFluidSlot(name, stackCapacity, filterLiquidStack);
newFluidSlot(name, stackCapacity, isOptional, filterLiquidStack);
newFluidSlot(name, stackCapacity, color, isOptional, filterLiquidStack);
```

Toutes ces méthodes retourneront le nouvel emplacement en tant qu'objet IMachineSlot.

Les paramètres sont :

| Nom                    | Type de texte                                 |
| ---------------------- | --------------------------------------------- |
| Nom                    | chaîne de caractères                          |
| est facultatif         | booléen                                       |
| Capacité de pile       | Indice                                        |
| couleur                | Indice                                        |
| Texture d'arrière-plan | chaîne de caractères                          |
| filterLiquidStack      | [ILiquidStack](/Vanilla/Liquids/ILiquidStack) |

Que font les paramètres:

- `name`: Le nom de l'emplacement. Utilisé pour les recettes plus tard. Assurez-vous qu'une machine n'a pas 2 emplacements avec le même nom.
- `isOptional`: dicte si cet emplacement doit être rempli ou non pour le début des vérifications de recettes.
- `stackCapacity`: Combien d'objets/millibuckets peuvent tenir dans cet emplacement ?
- `couleur`: Quelle sera la couleur de l'emplacement ?
- `backgroundTexture`: Un chemin de texture personnalisé pour le fond de cet emplacement peut être ajouté ici.
- `filterLiquidStack`: Si vous fournissez cet objet [ILiquidStack](/Vanilla/Liquids/ILiquidStack) , alors seul ce fluide sera autorisé à entrer dans l'emplacement.

## Obtenants

Vous pouvez également obtenir des informations de base à partir d'un IMachineSlot.  
Ne vous attendez pas à ce que ces getters retournent par magie quelque chose de différent de ce que vous avez défini la fente lors de sa création.

| Nom              | Type de texte        |
| ---------------- | -------------------- |
| Nom              | chaîne de caractères |
| optionnel        | booléen              |
| Capacité de pile | Indice               |