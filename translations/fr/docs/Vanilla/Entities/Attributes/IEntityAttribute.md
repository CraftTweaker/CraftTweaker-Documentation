# IEntityAttribute

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.entity.Attribute;`

## ZenGetters

| ZenGetter             | Méthode d'obtention | Type de retour       |
| --------------------- | ------------------- | -------------------- |
| Nom                   | getName()           | chaîne de caractères |
| Valeur par défaut     | getDefaultValue()   | double               |
| format@@0 shouldWatch | getShouldWatch()    | boolean              |
| parent                | getParent()         | IEntityAttribute     |

## Plus de méthodes Zen

- double clampValue(double valeur) → Fait quelque chose...