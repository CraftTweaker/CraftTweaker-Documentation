# IEntityAttributeInstance

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.entity.AttributeInstance ;`

## ZenGetters

| ZenGetter            | Méthode d'obtention | Type de retour                                                     |
| -------------------- | ------------------- | ------------------------------------------------------------------ |
| attribut             | getAttribute()      | [IEntityAttribute](/Vanilla/Entities/Attributes/IEntityAttribute/) |
| valeur de base       | getBaseValue()      | double                                                             |
| modificateurs        | getModifiers()      | `Liste<IEntityAttrubuteModifier>`                            |
| Valeur de l'attribut | getAttributeValue() | double                                                             |

## ZenSetters

| ZenSetter      | Méthode de réglage   | Type de paramètre |
| -------------- | -------------------- | ----------------- |
| valeur de base | setBaseValue(valeur) | double            |

## Méthodes de modification

- `Liste<IEntityAttrubuteModifier>` getModifiersByOperation(int opération)
- boolean hasModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier)
- [IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) getModifier(String uuid);
- void applyModifier([modificateur IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) ) ;
- void removeModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier);
- void removeModifier(String uuid);
- void removeAllModifiers();