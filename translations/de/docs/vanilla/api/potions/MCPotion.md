# MCTrank

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.potion.MCTrank
```

## Implementierte Schnittstellen
MCTrantion implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methoden
### getNamePrefixed

Gibt den String zurück

```zenscript
myMCPotion.getNamePrefixed(Name als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| name      | String | Keine Beschreibung angegeben |



## Eigenschaften

| Name             | Type                                                                                                 | Hat Getter | Hat Setter |
| ---------------- | ---------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| Kommandozeile    | String                                                                                               | true       | false      |
| effekte          | Liste <[crafttweaker.api.potion.MCPotionEffectInstanz](/vanilla/api/potions/MCPotionEffectInstance)> | true       | false      |
| hasInstantEffect | boolean                                                                                              | true       | false      |

